// object referanslarını koparmamızı sağlayan, diziler ile çalışırken diziye eleman ekleme çıkarma işlemlerini kolaylaştıran bir ES6 kullanımı.

const person = { name: 'can', surname: 'hakan' };
let person2 = { ...person }; // person ile persons2 aynı heap deki referansa bakmıyor.

Object.assign(person, person2); // ES5 versiyonunda kod, referansı kopardık.
person2.surname = 'han';

person.name = 'canan';

person2 = { ...person2, age: 25 }; // spread operatorü ile objeye yeni bir prop değeride eklenebilir.

console.log('person2', person2);
console.log('person1', person);

const numbers = [1, 2, 4, 5];
numbers.push(34);
numbers.unshift(12);
console.log('numbers1', numbers);

numbers.splice(0, 1); // ilk değeri sil
console.log('numbers2', numbers);

// ES6 ile birlikte yukarıdaki array functionlar yerine spread operatörü ile ekleme yapılabilir.

const numbers3 = [78, 98, ...numbers, 56];
console.log('numbers3', numbers3);
// silme işlemlerinde ise genelde filter function kullanıyoruz. arrow function yazıyoruz
const filteredArr = numbers3.filter((x) => x != 56);
console.log('filteredArr', filteredArr); // 78 çıktı
