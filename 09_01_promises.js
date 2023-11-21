// asenkron kod bloklarını senkron olarak sıralı çalıştırmak istersek ne yapacağız ?
// paralelde çalışamadığımız için toplamda 8sn bekledik.
const promise5 = () =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('promise5');
		}, 3000);
	});

const promise6 = () =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('promise6');
		}, 5000);
	});

// promise6'nın datası promise5 beklerse nasıl bir yol izleyeceğiz.
// function tanımı yapmadığımız değişken tanımı yaptığımız takdirde 2 ayrı promise de aynı anda çağırılma için başlatılıyor.

console.time('promise-5');
promise5()
	.then((response) => {
		console.log('promise5', response);
		console.timeEnd('promise-5');
		console.time('promise-6');
		promise6()
			.then((response2) => {
				console.log('promise6', response2);
				console.timeEnd('promise-6');
			})
			.catch((err) => {
				console.log('promise6-err', err);
			});
	})
	.catch((err) => {
		console.log('promise5 err', err);
	});

// 2.teknik
// promise chain promise zincirleri şeklinde çalıştırma

// wrapper Promise
// 3 farklı api call tek bir call işlemine çevirdik.
const doRequest = () => {
	// 1 bitmeden 2 başlamaz.

	let data = { p1: false, p2: false };

	const promiseChain1 = () => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				data.p1 = true;
				resolve(data);
			}, 3000);
		});
	};

	const promiseChain2 = () => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				data.p2 = true;
				reject('hata');
			}, 500);
		});
	};

	return promiseChain2().then(promiseChain1); // 1 bitmeden 2 ye geçme.
};

// reject durumunda transaction rollback gibi bütün reponse kesilir.

console.time('doRequest');
doRequest()
	.then((response) => {
		console.timeEnd('doRequest');
		console.log('doRequest', response);
	})
	.catch((err) => {
		console.log('err', err);
	});
