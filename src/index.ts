import moment from 'moment';

export async function sleep(ms: number) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(true);
    }, ms),
  );
}

export function diffDates(
  a: moment.MomentInput,
  b: moment.MomentInput = new Date(),
  unitOfTime: moment.unitOfTime.Diff = 'seconds',
  minDiffUnit: number = 0,
) {
  const unitOfTimeVal = moment(b).diff(moment(a), unitOfTime);
  const isLess = unitOfTimeVal <= minDiffUnit;

  return {
    [unitOfTime]: unitOfTimeVal,
    isLess,
  };
}
