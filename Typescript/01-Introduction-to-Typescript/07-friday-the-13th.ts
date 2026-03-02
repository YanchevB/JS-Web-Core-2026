function friday13th(arg: unknown[]): void {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  
  for (const el of arg) {
    if (
      el instanceof Date &&
      el.getDate() === 13 &&
      el.getDay() === 5
    ) {
      console.log(`${el.getDate()}-${months[el.getMonth()]}-${el.getFullYear()}`);
    }
  }
}

friday13th([
  new Date(2024, 0, 13),
  new Date(2024, 1, 13),
  new Date(2024, 2, 13),
  new Date(2024, 3, 13),
  new Date(2024, 4, 13),
  new Date(2024, 5, 13),
  new Date(2024, 6, 13), 
  new Date(2024, 7, 13), 
  new Date(2024, 8, 13), 
  new Date(2024, 9, 13), 
  new Date(2024, 10, 13), 
  new Date(2024, 11, 13)
])