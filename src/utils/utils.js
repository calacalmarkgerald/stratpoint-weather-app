export const getFormattedDate = datetime => {
  const day = datetime.getDate();
  const month = datetime.getMonth();
  const year = datetime.getFullYear();

  return `${month}-${day}-${year}`;
};

export const getFormattedTime = datetime => {
  const hours = datetime.getHours();
  const minutes = datetime.getMinutes();
  const seconds = datetime.getSeconds();

  return `${hours}:${minutes}:${seconds}`;
};
