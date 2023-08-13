// Contoh 1
try {
    console.log('Awal Blok try ...');
    erorCode;
    console.log('Akhir Blok try ...')
} catch(error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}
// Contoh 2
try {
    console.log('Awal Blok try ...');
    console.log('Akhir Blok try ...')
} catch(error){
    console.log('Baris ini di abaikan ...');
   
} finally {
    console.log('Akan tetap di eksekusi');
}