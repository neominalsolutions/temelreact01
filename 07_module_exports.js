// js dosyalarının birbileri ile paylaşılması için kullanılan bir sistem
// using, import
// C# dosyasında başka bir objeyi kullanabilmemizi sağlıyorsak burada da import export özelliği ile bunu sağlıyoruz.

// 2 farklı standart üzerinden gerçekleşir
// COMMONJS module sistem Node module sistem
// Ecmascript Inport Export module sistem

export const sum = (nm1, nm2) => {
	console.log('sum');
	return nm1 + nm2;
};

export const division = (nm1, nm2) => {
	console.log('div');
	return nm1 / nm2;
};

// export olmadığı için başka dosyadan erişilemez
const multiply = (nm1, nm2) => {};

export default multiply; // default keyword ile direkt olarak bunun ilgili dosyadan multiply değişken ismi ile dışarı çıkacağını söylemiş olduk.
