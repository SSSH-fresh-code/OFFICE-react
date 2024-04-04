export const getDate = (date?: Date) => {
  const d = date ? date : new Date();
  const month = d.getMonth() < 9 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
  const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();

  return `${d.getFullYear()}-${month}-${day}`;
}

export const getDatesStartToLast = (startDate: Date, lastDate: Date) => {
  const result = [];
  while (startDate <= lastDate) {
    result.push(startDate.toISOString().split('T')[0]);
    startDate.setDate(startDate.getDate() + 1);
  }
  return result;
};