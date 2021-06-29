export function generateTodayDateString(): string {
  const today: Date = new Date();
  const dd: string = String(today.getDate()).padStart(2, '0');
  const mm: string = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy: number = today.getFullYear();

  return `${yyyy}-${mm}-${dd}`;
}

export function generateDateStringForTodo(inputDate: string): string {
  const dateArr: string[] = String(new Date(inputDate)).split(' ');

  return `${dateArr[1]} ${dateArr[2]} ${dateArr[3]}`;
}
