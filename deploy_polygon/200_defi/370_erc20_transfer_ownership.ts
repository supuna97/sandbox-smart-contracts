import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

const func: DeployFunction = async function (
  hre: HardhatRuntimeEnvironment
): Promise<void> {
  const {deployments, getNamedAccounts, ethers} = hre;
  const {sandAdmin, deployer} = await getNamedAccounts();

  const rewardsCalculator = await ethers.getContract('ERC20RewardCalculator');
  const contributionRules = await ethers.getContract('ContributionRules');
  const sandPool = await ethers.getContract('ERC20RewardPool');

  // get currentAdmin - sandpool
  const sandPoolAdmin = await sandPool.owner();

  // transferOwner from deployer to sandAdmin
  if (sandPoolAdmin.toLowerCase() !== sandAdmin.toLowerCase()) {
    await deployments.catchUnknownSigner(
      deployments.execute(
        'ERC20RewardPool',
        {from: sandPoolAdmin, log: true},
        'transferOwnership',
        sandAdmin
      )
    );
  }

  // get currentAdmin - contributionRules
  const contribRulesAdmin = await contributionRules.owner();

  // transferOwner from deployer to sandAdmin
  if (contribRulesAdmin.toLowerCase() !== sandAdmin.toLowerCase()) {
    await deployments.catchUnknownSigner(
      deployments.execute(
        'ContributionRules',
        {from: contribRulesAdmin, log: true},
        'transferOwnership',
        sandAdmin
      )
    );
  }

  const ADMIN_ROLE = await rewardsCalculator.DEFAULT_ADMIN_ROLE();

  if (await rewardsCalculator.hasRole(ADMIN_ROLE, deployer)) {
    if (!(await rewardsCalculator.hasRole(ADMIN_ROLE, sandAdmin))) {
      await deployments.execute(
        'ERC20RewardCalculator',
        {from: deployer, log: true},
        'grantRole',
        ADMIN_ROLE,
        sandAdmin
      );
    }
    // we need to ensure that sandAdmin has role before renounce deployer
    if (await rewardsCalculator.hasRole(ADMIN_ROLE, sandAdmin)) {
      await deployments.execute(
        'ERC20RewardCalculator',
        {from: deployer, log: true},
        'renounceRole',
        ADMIN_ROLE,
        deployer
      );
    }
  }
};

export default func;
func.tags = ['ERC20RewardPool', 'ERC20TransferOwnserhip'];
func.dependencies = [
  'ERC20RewardCalculator_deploy',
  'ERC20RewardPool_deploy',
  'ContributionRules_deploy',
  'ERC20RewardPool_setup',
];
