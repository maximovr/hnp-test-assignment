import { DateToLocalePipe }  from './date-to-locale.pipe';

describe('DateToLocalePipe', () => {
  it('create an instance', () => {
    const pipe = new DateToLocalePipe('us');
    const transform = pipe.transform('2018-10-13T00:00:00Z');
    expect(transform).toBe('10/13/2018');
  });
});
