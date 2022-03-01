const getFormattedValue = (value: number) => (value < 10 ? `0${value}` : value);

const getFormattedDate = (date: string) => {
  const curDate = new Date(date);
  const yyyy = curDate.getFullYear();
  const MM = getFormattedValue(curDate.getMonth() + 1);
  const dd = getFormattedValue(curDate.getDate());
  const hh = getFormattedValue(curDate.getHours());
  const mm = getFormattedValue(curDate.getMinutes());
  return `${yyyy}.${MM}.${dd} ${hh}:${mm}`;
};

export default getFormattedDate;
