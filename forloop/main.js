function segitiga(panjang1){
    let hasil = '';
    for (let i = 0; i< panjang1; i++){
        for (let j =0; j>i; j--){
            hasil += ' * ';        
        }
        hasil += '\n'
    }
    return hasil;
}
console.log(segitiga(10));

