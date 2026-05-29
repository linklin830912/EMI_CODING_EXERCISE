export function getMinuteFromTime(t0:number, t1:number) {
    return Number(
    ((t1 - t0) / 1000 / 60).toFixed(2)
  );
}