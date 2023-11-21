// askenron sıralı işlemlerde ES7 ile birlikte async/await
// try catch senkron programlama yapılarını asenkron kod bloklarında da kullanabiliriz.

const promise1 = Promise.resolve(5);
const promise2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(10);
	}, 2000);
});

async function func1() {}

const func = async () => {
	console.time('async');
	try {
		// promise chain yapısının daha basit bir hali
		let promise2Response = await promise2;
		console.log('res1', promise2Response);
		let promise1Response = await promise1;
		console.log('res2', promise1Response);
		console.timeEnd('async');
	} catch (error) {
		console.log('error', error);
	} finally {
		console.log('error version vermesin çalışır');
	}
};

func();
