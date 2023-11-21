// ES6 ile birlikte gelen arrow functionslar
// default function
function sum(number1, number2) {
	return number1 + number2;
}

// arrow function
const sum1 = (nm1, nm2) => nm1 + nm2; // tek satır yazım şekli
const sum2 = (nm1, nm2) => {
	if (nm1 == undefined) {
		nm1 = 0;
	}

	if (nm2 == undefined) {
		nm2 = 0;
	}

	return nm1 + nm2;
};

// functionlara default parametre geçebiliriz
const showMessage = (message = 'mesaj1') => alert(message);

// function parametres any tipinde tanımlandığı için hataya müsait bir yapı var.

sum1(1, 2);
sum2(3, 5);
console.log(sum2()); // NaN, javascripte tip güvenliği yok
console.log(sum(1)); // NaN

showMessage();

// functionslar ile birlikte sonsuz parametre gönderebileceğimiz rest operatör kullanımı vardır. C# daki params yapısına benzer
// ... grades istediğimiz kadar parametre gönderebiliriz
const getAverage = (...grades) => {
	let total = 0;
	grades.forEach((grade) => {
		total += grade;
	});

	return total / grades.length;
};

const result = getAverage(10, 25, 35, 60);
console.log('result', result);
