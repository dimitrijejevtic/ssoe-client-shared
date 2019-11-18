// @dynamic
export class Constants {
  static currencyCodes = {
    941: 'RSD',
    978: 'EUR',
    840: 'USD',
    826: 'GBP'};
  static quantityCodes = {
    1: 'pcs',
    2: 'pack',
    3: 'kg'
  };

  static readonly DATE_FMT = 'd.M.yyyy';
  static readonly DATE_TIME_FMT = `${Constants.DATE_FMT} H:mm`;
}
