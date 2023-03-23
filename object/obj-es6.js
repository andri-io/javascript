//  objek literal

let mahasiswa = {
    nama : 'andre',
    energi : 10,
    makan : function(porsi){
        this.energi += porsi;
        console.log (`halo ${this.nama} selamat makan`);
    }
}


// function declaration
function Mahasiswa2 (nama, energi){
    let mahasiswa=  {};
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    mahasiswa.makan = function (porsi){
        this.energi += porsi;
        console.log (`halo ${this.nama} selamat makan`);
    }

    mahasiswa.main = function(jam){
        this.energi -= jam;
        console.log (`hallo ${this.nama} selamat bermain`);
    }

    mahasiswa.tidur = function(waktu){
        this.energi += waktu * 2;
        console.log(`halo ${this.nama} selamat tidur`);
    } 
    return mahasiswa;
}

// let andre = Mahasiswa2('andre',10);
// let arif = Mahasiswa2('arif',10);

// construcktor function 

function Mahasiswa2(nama, energi) {
  this.nama = nama;
  this.energi = energi;

  this.makan = function (porsi) {
    this.energi += porsi;
    console.log(`halo ${this.nama} selamat makan`);
  };

  this.main = function (jam) {
    this.energi -= jam;
    console.log(`hallo ${this.nama} selamat bermain`);
  };
}

let andre = new Mahasiswa2("maira", 10);
let arif = new Mahasiswa2("ajizah", 30);