function summarizePerson(
  id: number, 
  firstName: string, 
  lastName: string, 
  age: number,
  middleName?: string,
  hobbies?: string[],
  workInfo?: [string, number]
) : [number, string, number, string, string] {
  const fullName = middleName ? 
    `${firstName} ${middleName} ${lastName}` : 
    `${firstName} ${lastName}`;

  const hobbiesArr = hobbies && hobbies.length > 0 ? hobbies.join(', ') : '-';

  const workInfoArr = workInfo ? workInfo.join(' -> ') : '-';
  
  return [id, fullName, age, hobbiesArr, workInfoArr];
}

console.log(summarizePerson(12, 'Eliot', 'Des', 20, 'Braylen', ['tennis', 'football', 'hiking'], ['Sales Consultant', 2500]));
console.log(summarizePerson(20, 'Mary', 'Trent', 25));