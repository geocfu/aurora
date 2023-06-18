import { HumanFriendlyTimePipe } from './human-friendly-time.pipe';

describe('MomentPipe', () => {
  it('create an instance', () => {
    const pipe = new HumanFriendlyTimePipe();
    expect(pipe).toBeTruthy();
  });
});
