import 'dotenv/config';
import fs from 'fs-extra';
import {TheGraph} from '../utils/thegraph';
import {getBlockArgs} from '../utils/utils';

const blockNumber = getBlockArgs(0);

const theGraph = new TheGraph(
  'https://api.thegraph.com/subgraphs/name/pixowl/the-sandbox'
);

const ids = [
  '55464657044963196816950587289035428064568320970692304673817341489687522457605',
  '55464657044963196816950587289035428064568320970692304673817341489687522457601',
  '55464657044963196816950587289035428064568320970692304673817341489687522457603',
  '55464657044963196816950587289035428064568320970692304673817341489687522457602',
  '55464657044963196816950587289035428064568320970692304673817341489687522457604',
];

const queryString = `
query($blockNumber: Int! $first: Int! $lastId: ID! $id: ID!) {
    assetToken(block: {number: $blockNumber} id: $id) {
      owners(first: $first where: {id_gt: $lastId}) {
        id
        quantity
        owner {id}
      }
    }
}
`;

async function fetchOwnersOf(
  id: string
): Promise<{owner: {id: string}; quantity: string}[]> {
  const assetOwners: {
    owner: {id: string};
    quantity: string;
  }[] = await theGraph.query(queryString, 'assetToken.owners', {
    blockNumber,
    id,
  });
  return assetOwners;
}

void (async () => {
  const owners: {[address: string]: {[tokenId: string]: number}} = {};
  for (const id of ids) {
    const ownersOfToken = await fetchOwnersOf(id);
    for (const ownerOfToken of ownersOfToken) {
      let owner = owners[ownerOfToken.owner.id];
      if (!owner) {
        owner = owners[ownerOfToken.owner.id] = {};
      }
      const balance = owner[id] || 0;
      owner[id] = balance + parseInt(ownerOfToken.quantity);
      // console.log(`${ownerOfToken.owner.id} has ${owner[id]} ${id}`);
    }
  }

  const ownerWithAll5: {[address: string]: number} = {};
  for (const ownerAddress of Object.keys(owners)) {
    const owner = owners[ownerAddress];
    console.log(`${ownerAddress}`);
    let minBalance = 99999999;
    for (const id of ids) {
      minBalance = Math.min(owner[id] || 0, minBalance);
      console.log(`${id}: balance ${owner[id]}`);
    }
    if (minBalance !== 0 && minBalance !== 99999999) {
      ownerWithAll5[ownerAddress] = minBalance;
    }
  }

  const assetClaims = [];
  for (const owner of Object.keys(ownerWithAll5)) {
    const amount = ownerWithAll5[owner];
    if (owner === '0x7a9fe22691c811ea339d9b73150e6911a5343dca') {
      console.log('skipping sandbox wallet');
      continue;
    }
    if (owner === '0xbdebf4de544ca9008d425718cb7331a8f6e788c7') {
      console.log('skipping CMC wallet');
      continue;
    }
    assetClaims.push({
      reservedAddress: owner,
      assetIds: [
        '55464657044963196816950587289035428064568320970692304673817341489687522457606',
      ],
      assetValues: [amount],
    });
  }
  fs.writeFileSync(
    'data/asset_giveaway_3/assets_mainnet.json',
    JSON.stringify(assetClaims, null, '  ')
  );
})();
