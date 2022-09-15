const deadlines: { [sector: number]: number } = {
  0: Date.UTC(2100, 0, 1) / 1000,         // Fri, 01 Jan 2100 00:00:00 UTC
  1: Date.UTC(2019, 11, 19, 11) / 1000,   // Thu, 19 Dec 2019 11:00:00 UTC
  2: Date.UTC(2020, 1, 26, 12) / 1000,    // Wed, 26 Feb 2020 12:00:00 UTC
  3: Date.UTC(2020, 3, 14, 13) / 1000,    // Tue, 14 Apr 2020 13:00:00 UTC
  4: Date.UTC(2020, 6, 9, 18, 59) / 1000, // Thu, 09 Jul 2020 18:59:00 UTC
  5: Date.UTC(2020, 6, 9, 18, 59) / 1000, // Thu, 09 Jul 2020 18:59:00 UTC
  6: Date.UTC(2020, 6, 9, 18, 59) / 1000, // Thu, 09 Jul 2020 18:59:00 UTC
  7: Date.UTC(2020, 6, 9, 18, 59) / 1000, // Thu, 09 Jul 2020 18:59:00 UTC
  8: Date.UTC(2020, 6, 9, 18, 59) / 1000, // Thu, 09 Jul 2020 18:59:00 UTC
  9: Date.UTC(2020, 6, 9, 18, 59) / 1000, // Thu, 09 Jul 2020 18:59:00 UTC
  10: Date.UTC(2020, 7, 18, 13) / 1000,   // Tue, 18 Aug 2020 13:00:00 UTC
  11: Date.UTC(2020, 8, 25, 17) / 1000,   // Fri, 25 Sep 2020 17:00:00 UTC
  12: Date.UTC(2020, 8, 25, 17) / 1000,   // Fri, 25 Sep 2020 17:00:00 UTC
  13: Date.UTC(2020, 8, 25, 17) / 1000,   // Fri, 25 Sep 2020 17:00:00 UTC
  14: Date.UTC(2020, 8, 25, 17) / 1000,   // Fri, 25 Sep 2020 17:00:00 UTC
  15: Date.UTC(2020, 10, 26, 13) / 1000,  // Thu, 26 Nov 2020 13:00:00 UTC
  16: Date.UTC(2021, 1, 17, 13) / 1000,   // Tue, 17 Feb 2021 13:00:00 UTC
  17: Date.UTC(2021, 2, 3, 13) / 1000,    // Wed, 03 Mar 2021 13:00:00 UTC
  18: Date.UTC(2021, 3, 29, 13) / 1000,   // Thu, 29 Apr 2021 13:00:00 UTC
  19: Date.UTC(2021, 5, 10, 13) / 1000,   // Thu, 10 Jun 2021 13:00:00 UTC
  20: Date.UTC(2021, 6, 1, 13) / 1000,    // Thu, 01 Jul 2021 13:00:00 UTC
  21: Date.UTC(2021, 6, 8, 13) / 1000,    // Thu, 08 Jul 2021 13:00:00 UTC
  22: Date.UTC(2021, 6, 15, 13) / 1000,   // Thu, 15 Jul 2021 13:00:00 UTC
  23: Date.UTC(2021, 6, 22, 13) / 1000,   // Thu, 22 Jul 2021 13:00:00 UTC
  24: Date.UTC(2021, 6, 29, 13) / 1000,   // Thu, 29 Jul 2021 13:00:00 UTC
  25: Date.UTC(2021, 7, 12, 13) / 1000,   // Thu, 12 Aug 2021 13:00:00 UTC
  26: Date.UTC(2021, 7, 19, 13) / 1000,   // Thu, 19 Aug 2021 13:00:00 UTC
  27: Date.UTC(2021, 8, 2, 13) / 1000,    // Thu, 02 Sep 2021 13:00:00 UTC
  28: Date.UTC(2021, 8, 9, 13) / 1000,    // Thu, 09 Sep 2021 13:00:00 UTC
  29: Date.UTC(2021, 8, 16, 13) / 1000,   // Thu, 16 Sep 2021 13:00:00 UTC
  30: Date.UTC(2021, 8, 23, 13) / 1000,   // Thu, 23 Sep 2021 13:00:00 UTC
  31: Date.UTC(2021, 8, 30, 13) / 1000,   // Thu, 30 Sep 2021 13:00:00 UTC
  32: Date.UTC(2021, 10, 11, 13) / 1000,  // Thu, 11 Nov 2021 13:00:00 UTC
  33: Date.UTC(2021, 11, 9, 13) / 1000,   // Thu, 09 Dec 2021 13:00:00 UTC
  34: Date.UTC(2021, 11, 23, 13) / 1000,  // Thu, 23 Dec 2021 13:00:00 UTC
  // TODO: to be determined
  35: Date.UTC(2022, 2, 3, 13) / 1000,    // Thu, 03 Mar 2022 13:00:00 UTC
  36: Date.UTC(2022, 0, 20, 13) / 1000,   // Thu, 20 Jan 2022 13:00:00 UTC
  38: Date.UTC(2022, 1, 17, 13) / 1000,   // Thu, 17 Feb 2022 13:00:00 UTC
  39: Date.UTC(2022, 2, 10, 13) / 1000,   // Thu, 10 Mar 2022 13:00:00 UTC
  40: Date.UTC(2022, 3, 14, 13) / 1000,   // Thu, 14 Apr 2022 13:00:00 UTC
  41: Date.UTC(2022, 4, 5, 13) / 1000,    // Thu, 05 May 2022 13:00:00 UTC
};
export default deadlines;
