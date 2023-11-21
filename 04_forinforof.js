// Js de reflection yok
// bu yüzden object değerinin propertylerinde direk olarak erişim mümkün.
// object property ve property value erişmek için js de forin kullanırız.

const user = { name: 'ali', surname: 'can' };

for (const propName in user) {
	// user da böyle bir prop var mı kontrolü
	if (Object.hasOwnProperty.call(user, propName)) {
		const propValue = user[propName]; // user["name"] indekser vasıtası ile propValue okuma
		console.log('prop', 'propValue', propName, propValue);
	}
}

// array ve array object ile çalışırken her bir item içerisinde dönmek için forof keyword. c# foreach yapısının aynısıdır.

const usersObject = [
	{ id: 1, name: 'ali' },
	{ id: 2, name: 'can' },
];

// js  arraysden gelen extension function. array prototype dan gelir.
usersObject.forEach((element) => {
	console.log('element', element);
});

// javascript dil özelliği
for (const user of usersObject) {
	user.name = user.name.trim().toUpperCase();
	console.log('user', user);
}

// map ilede bir obje dizisi içerisinde dönerken obje dizisine müdahele etmemiz gereken durumlarda kullanabiliriz. map function değer return ederler.
// C# dto to entity mapping
const data = usersObject.map((item) => {
	return {
		firstName: item.name,
		userId: item.id,
	};
}); // map ile çalışmak yepyeni bir referans ile çalışmak anlamına gelir object arrayde referance hatalarından bizi kurtarır.


console.log('data', data);
data[0]['firstName'] = 'jale'; // sizce usersObject nesnesinin değeride değişir mi ?
// usersObject ile data farklı referanslara bakıyor mu ?

console.log('data2', data);
console.log('userObject2', usersObject);
