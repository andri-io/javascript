// ===== CARA 1 =====
class User {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }

    set fullName(fullName){
        const [firstName, lastName] = fullName.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const user = new User ();
user.fullName = 'Risma Maya';
console.log(user.fullName);
console.log(user);

// ===== CARA 2 =====

class Mahasiswa {
    constructor (npm, nama, umur, jurusan, email){
        this.npm = npm;
        this.nama = nama;
        this.umur = umur;
        this.jurusan = jurusan;
        this.email = email;
    }

    get infoMhs(){
        return `\nNpm : ${this.npm}
                \nNama : ${this.nama} 
                \nUmur : ${this.umur}
                \nJurusan : ${this.jurusan}
                \nEmail : ${this.email}`;
    }

    set infoMhs(result){
        const [npm, nama, umur, jurusan, email] = result.split (` `);
           this.npm = npm;
           this.nama = nama;
           this.umur = umur;
           this.jurusan = jurusan;
           this.email = email;
    }
}

const mahasiswa = new Mahasiswa();
mahasiswa.infoMhs = `2110010384 andre 20 teknik-informatika andre.uniska@hotmail.com`;
console.log(mahasiswa);
mahasiswa.infoMhs = `2110010232 risma 21 teknik-elektro risma.uniska@hotmail.com`;
console.log(mahasiswa);


// === PRIVATEE ===

class Car {

    #chassisNumber = null;
    constructor(brand, color, maxSpeed){
        this.brand = brand;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.#chassisNumber = this.#chassisNumber;
    }
    get chassisNumber(){
        return this.#chassisNumber;
    }
    set chassisNumber(chassisNumber){
        console.log("you are not allowed to change the chassis number");
    }
    // METHODS
    drive(){
        console.log(`${this.brand} ${thi.color} is driving`);
    }
    reverse(){
        console.log(`${this.brand} ${this.color} is reversing`);
    }
    turn(direction){
        console.log(`${this.brand} ${this.color} is turning ${direction}`);
    }

    #generateChassisNumber(){
        return `${this.brand}-${Math.floor(Math.random() * 1000)}`
    }
}

const car = new Car("BMW", "red", 200);
console.log(car);
console.log(Car.#chassisNumber); //eror