import { diffDates } from '../index';

test('DiffDates', () => {
  expect(diffDates(new Date(), new Date(), 'minutes')).toStrictEqual({ isLess: true, minutes: 0 });
});
