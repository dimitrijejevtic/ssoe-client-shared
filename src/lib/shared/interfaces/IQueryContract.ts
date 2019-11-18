import { Utils } from '../extensions/utils';

export abstract class IQueryContract {
  skip: number;
  top: number;

  constructor(skip: number, top: number) {
    if (Utils.isNullEmptyOrUndefined(skip))
      this.skip = 0;
    if (Utils.isNullEmptyOrUndefined(top))
      this.top = 10;
  }
}
