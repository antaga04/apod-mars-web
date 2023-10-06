export function randomDate(min, max) {
  const start = isoToDate(min);
  const end = isoToDate(max);

  return toISOFormat(new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())));
}

export function toISOFormat(date) {
  return date.toISOString().slice(0, 10);
}

export function formatDateToDayFirst(inputDate) {
  const reversedDate = inputDate.split('-').reverse().join('/');
  return reversedDate;
}

function isoToDate(isoDate) {
  const parts = isoDate.split('-').map(Number);
  return new Date(parts[0], parts[1] - 1, parts[2]);
}
