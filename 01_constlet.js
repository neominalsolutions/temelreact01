// JS primative types ve complex types olmak üzere 2 tip var.
// value types = primative types (boolean,number,string)
// complex types = referance types (func,array,object,null)
// undefined (değişken tanımı var değer ataması yok), isNan (sonuç numeric bir ifade değil)

var a; // tanımlandı değer ataması yok default değer ataması yok.
console.log(a); // undefined;

var b = 10; // js tüm değişkenleri var ile tanımlayabiliriz
var c = 'ali';

console.log(b / c); // bu kod exception vermez. NaN Numeric değer değildir.

// js de bazen değişkenlerin typelarına göre işlem yapmak gerekebilir. çünkü tip bazlı değişken tanımı yok. bunun için typeof operatörünü aktif kullanmalıyız.
console.log('c type', typeof b);

if (typeof b == 'number') {
	alert(b * 10);
}
// js de tip ve değer kontrolleri == veya === üzerinden tanımlanır.
// === tip ve değer olarak eşitlik
// == sadece değer eşitliği
// typeof b == 'number' sadece tip eşitliği

var z = 15; // numeric
var k = 15;
var t = '15'; // string

if (z === k) {
	console.log('k ve z değer ve tip olarak eşit');
}

if (t === k) {
	console.log('t ve k değer ve tip olarak eşit');
}

if (t == k) {
	console.log('t ve k sadece değer olarak eşit');
}

// Ecmascript JS standartları, ecmascript standartları değiştiğine js diline yeni özellikler eklenir. bu eklenen özelliklerin doğru çalışması için tarayıclar browser engine de güncelleme yapar.
// Tarayıcılar arasında en yaygın kabul geren standart ES6 standartıdır. Yeni eski tarayıcı farketmeksizin bütün tarayıcılar ES5 standartını destekler. Babel Code Transpiler => ES6 ve üstünde yazılan kodu ES5 formatına dönüştürür.
// ES6 ile var keyword yerine const let keyword ile değişken tanımı özelliği geldi.

// Primative Types ile kullanımı

const ff = 10; // sabitlerde değer değişken tanımlaması yapılırken bir kez atanır daha sonra değişmez.
// ff = 25; // hata oluşturucak

let zz = 45;
zz = 55; // alt satır kodlarda değişkene değer atama yapacak isek let operatörü kullanılır
console.log('55: ', zz);

// Complex types kullanımı

const person = { name: 'ali', surname: 'can' }; // Object literal
person.name = 'canan'; // bir referansa ait değeri güncelledik. const hata vermek.
console.log('person', person);

// bir referance type başka bir referans ataması yaptık bu durumda const kullanımında dolayı hata
// person = { name: 'mustafa', surname: 'şafak' }; // hata alırmıydık ?

// const referans hatalarından kodu korur.

let person2 = { name: 'ali', surname: 'can' };

// heap deki referans aynı ikisinde referansı güncellendi.
let person3 = person2;
person3.name = 'hakan';

console.log('person2', person2, 'person3', person3);
