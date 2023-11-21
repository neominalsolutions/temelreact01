// ES6
// asenkron kod blokları ile çalışırken tercih ettiğimiz programlama yapıları
// api request
// fetchapi, axios, ajax kütüphanler promise'ler ile çalışır.

// asenkron programlama nedir
// kod bloklarının zamansız bir şekilde çalışmasına asenkron programlama diyebiliriz.

let a = 10;
console.log('a', a);
setTimeout(() => {
	let c = 50;
	console.log('c', c);
}, 100); // 100 ms bir iş

let b = 20;
console.log('b', b);

// js önceliği senkron koda verir.

// promise söz demek
// söz tutma resolve
// reject sözü tutamama durumu
// Nodejs api requestleri arka planda promise yapıları ile sarmallanıyor.
const promise1 = new Promise((resolve, reject) => {
	resolve(5);
}); // promise tanımı

// try catch finally
promise1
	.then((data) => {
		// resolve
		console.log('data', data);
	})
	.catch((err) => {
		// reject
		console.log('err', err);
	})
	.finally(() => {
		console.log('resolve yada reject işlemi');
	});

const promise4 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('pie chart');
	}, 5000); // 5sn
});

const promise2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('line chart');
	}, 2000); // 2sn
});

const promise3 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('bar chart');
	}, 3000); // 3sn
});

// birbirinden bağımsız çalışan kod blokları

// beklenen
// pie chart
// line chart
// bar chart

// sonuc
// line chart
// bar chart
// pie chart

promise4.then((response) => {
	console.log(response);
});

promise2.then((response) => {
	console.log(response);
});

promise3.then((response) => {
	console.log(response);
});

// tanımlanmış asenkron ifadeleri hepsini yada bir kaçını tek bir kod blogu üzerinden çözümleme
console.time('promise-all');
// hepsini aynı anda çözümle
// birbirinden bağımsız olan kod bloklarının aynı zaman içerisinde paralelde çalıştırılmasını sağlayan bir yaklaşım.
Promise.all([promise2, promise3, promise4]).then((response) => {
	console.log('promise-all', response);
	console.timeEnd('promise-all');
});
