const methodMahasiswa = {
    makan : function(porsi){
        this.energi += porsi;
        return `Halo ${this.nama} selamat makan!`;
    },


    main : function(jam){
        this.energi -= jam;
        return `Halo ${this.nama} selamat main!`;
    },


    tidur : function (jam) {
        this.energi += jam * 2;
        return `Halo ${this.nama} selamat tidur!`;
    }
};

function Mahasiswa (nama,energi){
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    return mahasiswa;
}

let andre = Mahasiswa ('Andre',10);
let risma = Mahasiswa ('Risma maya sari',20);