import { ToFriendlyPipe } from './to-friendly.pipe';
import { DatePipe } from '@angular/common'

describe('ToFriendlyPipe', () => {
  it('create an instance', () => {
    const pipe = new ToFriendlyPipe(new DatePipe(''));
    expect(pipe).toBeTruthy();
  });
});
