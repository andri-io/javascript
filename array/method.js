const angka = [-1, 2, 6, -9, 6, 7, 2, 8, 6,4];

// mencari angka > 3 mengggunakan for biasa
// lenght
const newAngka = [];
for (let i = 0; i < angka.length; i++){
    if (angka[i] >= 3){
        newAngka.push(angka[i]);
    }
}
console.log (newAngka);


// filter
const newAngka2 = angka.filter( a => a >= 3 );
console.log(newAngka2);

// map 
// kalikan semua angka * 2
const newAngka3 = angka.map (a => a * 2);
console.log (newAngka3);

// reduce 
// menjumlahkan semua array
const newAngka4 = angka.reduce((accumulator, currentvalue) => accumulator + currentvalue);
console.log(newAngka4);

// methid chining
// mencari angka > 5 
// kali in 3
const hasil = angka.filter(a => a > 5).map(a => a * 3).reduce((acc, curr) => acc + curr);
console.log (hasil);


