// object literal
let mhs = {
    nama : 'andre',
    npm : '2110010384',
    univ : 'uniska',
    kelas : '4C REG BJM',
    jurusan : 'Teknik informatika'
}

let mhs2 = {
    nama : 'Arif',
    npm : '2110010348',
    univ : 'uniska',
    kelas : '4G',
    jurusan : 'Teknik informatika'
}


function data(nama, lahir, kota) {
  let datapenduduk = {};
  datapenduduk.nama = nama;
  datapenduduk.lahir = lahir;
  datapenduduk.kota = kota;
  return datapenduduk;
}

let info = data("risma", "desember", "marabahan");


// function declaratiion
function createObject (nama, npm, univ, kelas, jurusan) {
    let mahasiswa = {};
    mahasiswa.nama = nama;
    mahasiswa.npm = npm;
    mahasiswa.univ = univ;
    mahasiswa.kelas = kelas;
    mahasiswa.jurusan = jurusan;
    return mahasiswa;
}

let mahasiswa2 = createObject ('eos','2110010234','uniska','4G','Teknik informatika');

let mahasiswa3 = createObject ('bayhaqi','2110010254','uniska','4G','Teknik informatika');


// constructor

function Mahasiswa4 (nama,kelas,npm,jurusan) {
    this.nama = nama;
    this.kelas = kelas;
    this.npm = npm;
    this.jurusan = jurusan;
}

let mhs3 = new Mahasiswa4 ('Fini','4C','2110010654','Sistem informasi');

