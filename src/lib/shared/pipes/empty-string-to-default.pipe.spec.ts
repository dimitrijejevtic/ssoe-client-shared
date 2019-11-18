import { EmptyStringToDefaultPipe } from './empty-string-to-default.pipe';

describe('EmptyStringToDefaultPipe', () => {
  it('create an instance', () => {
    const pipe = new EmptyStringToDefaultPipe();
    expect(pipe).toBeTruthy();
  });
});
