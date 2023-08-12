//  ? Di JavaScript sudah terdapat built-in class atau class bawaan, seperti Date, Object, Array, Math, dan String. Class bawaan dapat kita manfaatkan untuk berbagai hal, mulai dari manipulasi data-data terkait dengan array, operasi matematika, manipulasi karakter, ataupun manipulasi objek.

// Mari kita ambil contoh class Date.

// Date merupakan class bawaan JavaScript yang digunakan untuk utilitas terkait tanggal dan waktu. Class ini sangat membantu ketika program yang kita buat terdapat penggunaan dan manipulasi tanggal dan waktu. Kita bisa mudah untuk mendapatkan waktu dalam bentuk instance Date atau mengonversinya ke dalam berbagai format yang kita inginkan.

// Berikut contoh dalam penggunaan class bawaan Date.

    const date = new Date();
    
    const timeInJakarta = date.toLocaleString('id-ID', {
        timeZone : 'Asia/Jakarta',
    });
    
    const timeInMakassar = date.toLocaleString('id-ID', {
        timeZone : 'Asia/Makassar',
    });
    
    const timeInTokyo = date.toLocaleString('ja-JP', {
      timeZone: 'Asia/Tokyo',
    });

    console.log(timeInJakarta);
    console.log(timeInMakassar);
    console.log(timeInTokyo);


    // overriding
    class Animal {
        constructor(name, age, isMamal){
            this.name = name;
            this.age = age;
            this.isMamal =isMamal;
        }    
    }

    class Rabbit extends Animal{
        constructor(name, age, isMamal){
            super(name, age, isMamal);
        }
        eat(){
            console.log(`${this.name} Sedang makan ....`);
        }
    }

    class Eagle extends Animal {
        constructor(name, age, isMamal){
            super(name, age, isMamal);
        }

        fly(){
            console.log(`${this.name} Sedang Terbang ....`);
        }
    }


    const myRabbit = new Rabbit('Labi',2,true);
    myRabbit.eat();
    console.log(myRabbit);

    const myEagle = new Eagle('Elo', 4, true);
    myEagle.fly();
    console.log(myEagle.isMamal);
