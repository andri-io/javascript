// construcktor function
// prototype

function Mahasiswa (nama, energi){
    this.nama = nama;
    this.energi = energi;
}

Mahasiswa.prototype.makan = function(porsi){
    this.energi += porsi;
    return (`Halo ${this.nama} Selamat Makan!`);
}

Mahasiswa.prototype.main = function(jam){
    this.energi -= jam;
    return (`Halo ${this.nama} Selamat bermain`);
}

Mahasiswa.prototype.tidur = function(jam) {
    this.energi += jam * 2;
    return (`Halo ${this.nama} Selamat Tidur`);
}

let andre = new Mahasiswa ('Andre',10);

// // versi class

class Mahasiswa{
    constructor (nama, energi){
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi){
        this.energi += porsi;
        return (`Halo ${this.nama} selamat makan`);
    }

    main (jam){
        this.energi -= jam;
        return `Halo ${this.nama} selamat main`;

    }
}

let risma = new Mahasiswa ('risma',10);
