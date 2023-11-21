// object deconstruction
const user = { firstName: 'ali', lastName: 'Tan' };
user.age = 25; // kdou yazarken user schema yeni bir prop tanımladım
console.log('age1', user.age);
delete user.age; // prop sil
console.log('age2', user.age);
const { firstName, lastName } = user;
// C# Tupple kullanıma benzer bir kullanım
// firstName = 'hande';
// {user.firstName} {firstName}
console.log('firstName', firstName);

// array deconstruction
const arr = [1, 2];
const [firstIndex, secondIndex] = arr;

console.log('firstIndex', firstIndex);
console.log('first', arr[0]);
