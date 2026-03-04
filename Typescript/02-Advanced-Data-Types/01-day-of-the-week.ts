function daysOfWeek(day: number): void {
  enum Days {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }

  console.log(Days[day] || 'error');
}

daysOfWeek(5); // Output: Friday
daysOfWeek(10); //Output: error