const formatDate = (dateString: string): string => {
  const date = new Date(dateString); // 문자열을 Date 객체로 변환

  if (isNaN(date.getTime())) {
    throw new Error("Invalid date format");
  }

  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const hours = ("0" + date.getHours()).slice(-2);
  const minutes = ("0" + date.getMinutes()).slice(-2);

  return `${year}.${month}.${day} ${hours}:${minutes}`;
};

export default formatDate;
