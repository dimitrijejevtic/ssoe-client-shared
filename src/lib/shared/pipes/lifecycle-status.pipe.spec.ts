import { LifecycleStatusPipe } from './lifecycle-status.pipe';

describe('LifecycleStatusPipe', () => {
  it('create an instance', () => {
    const pipe = new LifecycleStatusPipe();
    expect(pipe).toBeTruthy();
  });
});
