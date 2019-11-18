import { BooleanToYesNoPipe } from './booleanToYesNo.pipe';

describe('BooleanToYesNoPipe', () => {
  it('create an instance', () => {
    const pipe = new BooleanToYesNoPipe();
    expect(pipe).toBeTruthy();
  });
});
