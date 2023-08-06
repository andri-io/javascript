function Car (brand, color, maxSpeed, chassisNumber){
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = chassisNumber;
}
Car.prototype.drive  = function(){
    console.log(`${this.brand} ${this.color} Is Driving`);
}
Car.prototype.reverse = function(){
    console.log(`${this.brand} ${this.color} Is Reversing`);
}
Car.prototype.turn = function(){
    console.log(`${this.brand} ${this.color} Is Turning`);
}
const car1 = new Car('Toyota','Silver',100,'A-1');
console.log(car1);
car1.reverse();
car1.drive();
car1.turn();

// === MENGGUNAKAN CLASS ===

class Mahasiswa  {
    constructor (nim, nama, usia, jurusan){
        this.nim = nim;
        this.nama = nama;
        this.usia  = usia;
        this.jurusan = jurusan;
    }

    getInfo(){
        return `Nim ${this.nim} Nama ${this.nama} Usia ${this.usia} Jurusan ${this.jurusan}`;
    }
}
const mhs1 = new Mahasiswa (2110010384,'Andre',20,'Teknik Informatika');
mhs1.getInfo();

// === MENGGUAKAN PROTOTYPE ===
function Mahasiswa (npm, nama, jurusan) {
    this.npm = npm;
    this.nama = nama;
    this.jurusan = jurusan;
}

Mahasiswa.prototype.getInfo = function(){
        console.log(`Nim ${this.npm} Nama ${this.nama} Jurusan ${this.jurusan}`);

}
const mhs = new Mahasiswa (2110010384,'Andre','Teknik Informatika');
mhs.getInfo();