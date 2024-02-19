export function formatDate(date) {
  const dateObj = new Date(date);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  return dateObj.toLocaleDateString('ko-KR', options);
}
