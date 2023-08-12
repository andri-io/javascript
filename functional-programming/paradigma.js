// Cara Pertama menggunakan gaya penulisan kode imperatif
const name = ['Andre','Rahmadani','Syifa'];

const mahasiswa = [];

for (let i = 0; i < name.length; i++) {
  mahasiswa.push(`${name[i]}`);
}

console.log(mahasiswa);

//Cara kedua menggunakan gaya penulisan kode deklaratif
const nama = ['Andre','Rahmadani','Arif Budiman'];

const mhs = nama.map (names => (`${names}!`));
console.log(mhs);
