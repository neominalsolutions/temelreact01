// ES5 de Function yapıları class olarak çalıştırıabiliyor.
// Function Component mantığı aslında buradan geliyor
function Person(name, surname) {
	// constructor
	// this js ortamında c# public olarak dışarı çıkarılacak olan property temsil eder.
	this.name = name;
	this.surname = surname;

	this.getFullName = () => {
		// class gibi çalıştığımızdan this keyword ile erişim yaptık
		return `${this.name} ${this.surname}`; // js interpolation
	};
}

// setter tanımı
Person.prototype.setName = function (name) {
	this.name = name;
};

const person = new Person('ali', 'tan');
console.log('person fullName', person.getFullName());
person.setName('hakan');
console.log('person', person);

// ES6 ile birlikte class desteği geldi.

class Human {
	#name; // private keyword js yok onun yerine # ifadesi kullanılmış.
	#surname; // field
	// js ve ts de constructor overload yok
	// tek bir contructor ifadesi ile çalışıyoruz
	constructor(name, surname) {
		this.#name = name;
		this.#surname = surname;
	}

	// setter tanımı önüne birşey yazmaz isek public yapar.
	set Name(value) {
		this.#name = value;
	}
	// getter
	get Name() {
		// property
		return this.#name;
	}

	// method
	getFullName() {
		console.log('super getFullName');
		return `${this.#name} ${this.#surname}`;
	}
}

const hm = new Human('ali', 'tan');
hm.Name = 'mustafa'; // setter
hm.getFullName(); // method call
console.log('hm', hm);

class Employee extends Human {
	#socialNumber;

	constructor(name, surname, socialNumber) {
		// base'e name surname değerlerini constructor yolu ile gönderdik.

		super(name, surname);
		// kalıtım alan sınıflar this keyword super altında kullanmak zorundadır.
		this.#socialNumber = socialNumber;
	}

	// base sınıftaki değeri ovveride etmek için base sınıftaki aynı methodun ismini kalıtım alan inherit sınıfta tanımlıyoruz
	getFullName() {
		console.log('ovveride edildi');
		return super.getFullName(); // base method tetikle
		// c# daki base karşılık burada super keyword var.
	}
}

const emp = new Employee('ali', 'han', '324234');
emp.getFullName();
console.log('emp', emp);

// JS de interface ve Generic Class desteği yok