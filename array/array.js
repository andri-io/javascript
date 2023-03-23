// Definisi
// Array adalah susunan sistematis objek-objek yang serupa

// dalam dunia pemrograman array adalah tipe data yang di gunakan untuk medeskripsikan kumpulan element (nilai atau variabel) yang tiap element nya memiliki index

// dalam javascript array adalah variabel yang bisa menampung banyak nilai dan tipe data array adalah objek 




// CARA PERTAMA
let cara1 = ['andre','maira','bayhaqi','arif'];
console.log(cara1);

// CARA KEDUA
let index = [];
index[0] = 'andre';
index[1] = 'maira';
index[2] = 'bayhaqi';
index[3] = 'airf';
// console.log(array);


// menampilkan array
let array = ['andre','risma','ajizah','maira','bayhaqi','arif'];
for (let i = 0; i < array.length; i++){
    console.log(`nama ke -${i+1} = ${array[i]}`);
}
