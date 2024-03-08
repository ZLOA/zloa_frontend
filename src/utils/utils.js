export function convertDatetime(dateTime) {
  const date = new Date(dateTime);

  // 날짜를 yyyy-mm-dd 형식으로 변환
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
}
