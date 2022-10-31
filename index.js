const users = [
  { name: 'Abhinash', gender: 'Male' },
  { name: 'Ramesh', gender: 'Male' },
  { name: 'Jyoti', gender: 'Female' },
];
// forEach method
users.forEach(({ name }) => {
  console.log('My name is', name);
});
// map method
const userInfo = users.map(({ name, gender }) => {
  return `Your name is ${name} and your gender is ${gender}`;
});
for (let info of userInfo) {
  console.log(info);
}
// filter method
const final_list = users.filter(({ name }) => {
  return name === 'Abhinash' || name === 'Jyoti';
});
for (let final of final_list) {
  console.log(final.name);
}
