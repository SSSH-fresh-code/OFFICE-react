export const getDate = (date?: Date) => {
  const d = date ? date : new Date();
  const month = d.getMonth() < 9 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
  const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();

  return `${d.getFullYear()}-${month}-${day}`;
}

export const addZero = (target: number, criteria: number) => target < criteria ? `0${target}` : target;

export const getDatesStartToLast = (startDate: Date, lastDate: Date) => {
  const result = [];
  while (startDate <= lastDate) {
    const date = startDate.toLocaleDateString().split(".");
    result.push(`${date[0]}-${addZero(+date[1].trim(), 10)}-${addZero(+date[2].trim(), 10)}`);
    startDate.setDate(startDate.getDate() + 1);
  }
  return result;
};