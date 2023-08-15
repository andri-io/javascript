function withDrawMoney(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (amount > 100) {
        reject(new Error("Not enough money to withdraw"));
      }
      resolve(amount);
    }, 1000);
  });
}


function buyCinemaTicket(money) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (money < 10) {
        reject(new Error("not enough money to buy ticket"));
      }

      resolve("ticket-1");
    }, 1000);
  });
}

function goInsideCinema(ticket){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!ticket) {
          reject(new Error("no ticket"));
        }

        resolve("enjoy the movie");
      }, 1000);
    });
}

function watchMovie(){
    withDrawMoney(20)
      .then(money => {return buyCinemaTicket(money)})
      .then(ticket => {return goInsideCinema(ticket)})
      .then(result => {console.log(result)})
      .catch(error => {console.log(error.message)});
}

watchMovie();

/*Fungsi withDrawMoney() menerima satu parameter, yaitu jumlah uang yang ingin ditarik. Fungsi kemudian memeriksa apakah jumlah uang yang diminta lebih besar dari 100. Jika ya, fungsi akan menolak janji dengan kesalahan "Not enough money to withdraw". Jika tidak, fungsi akan memenuhi janji dengan jumlah uang yang diminta.

Janji yang terpenuhi atau ditolak kemudian dapat digunakan oleh kode lain untuk menentukan apakah penarikan uang berhasil atau gagal. Misalnya, kode berikut akan mencetak "Penarikan uang berhasil" jika penarikan uang berhasil, dan "Penarikan uang gagal" jika penarikan uang gagal:

const amount = 50;
const promise = withDrawMoney(amount);

promise.then(amount => console.log("Penarikan uang berhasil"), error => console.log("Penarikan uang gagal"));

Kode ini akan mencetak "Penarikan uang berhasil" karena jumlah uang yang diminta (50) tidak lebih besar dari 100.

 */

/*
Fungsi buyCinemaTicket menerima satu parameter, yaitu money (jumlah uang yang dimiliki oleh pengguna).

Di dalam fungsi buyCinemaTicket, kita mengembalikan sebuah Promise. Ini adalah mekanisme dalam JavaScript yang memungkinkan kita untuk menghandle operasi asynchronous dengan lebih mudah.

Di dalam Promise, kita menggunakan setTimeout untuk mensimulasikan proses pembelian tiket. Dalam contoh ini, proses pembelian tiket dijadwalkan akan selesai dalam waktu 1000 milidetik (1 detik).

Dalam setTimeout, kita memiliki kondisi. Jika uang yang dimiliki kurang dari 10, kita akan menolak Promise dengan melemparkan error "not enough money to buy ticket". Jika 
*/

/* 
Fungsi goInsideCinema pertama kali membuat Promise baru. Promise ini kemudian diteruskan ke setTimeout() sebagai argumen kedua. setTimeout() adalah fungsi yang akan menjalankan fungsi callback setelah delay tertentu. Dalam hal ini, fungsi callback akan memeriksa apakah ada tiket.

Jika ada tiket, fungsi callback akan memanggil metode resolve Promise dengan nilai "enjoy the movie". Ini akan menyelesaikan Promise dan mengembalikan nilainya ke caller.


Fungsi watchMovie() pertama kali memanggil fungsi withDrawMoney() untuk menarik uang sebesar 20 dolar dari rekening pengguna. Jika penarikan berhasil, fungsi withDrawMoney() akan mengembalikan janji yang menyelesaikan dengan nilai true. Jika penarikan tidak berhasil, fungsi withDrawMoney() akan mengembalikan janji yang menolak dengan pesan kesalahan.

Berikut adalah rincian langkah-langkah yang akan diambil oleh fungsi watchMovie.

1. Fungsi withDrawMoney akan dipanggil untuk menarik uang sebesar 20 dolar dari rekening pengguna.
Jika penarikan berhasil, fungsi withDrawMoney akan mengembalikan janji yang menyelesaikan dengan nilai true.

2. Jika penarikan tidak berhasil, fungsi withDrawMoney akan mengembalikan janji yang menolak dengan pesan kesalahan.

3. Fungsi buyCinemaTicket akan dipanggil dengan nilai yang dikembalikan oleh fungsi withDrawMoney sebagai argumennya.

4. Jika pengguna memiliki cukup uang di rekening mereka, fungsi buyCinemaTicket akan mengembalikan janji yang menyelesaikan dengan tiket bioskop.

5. Jika pengguna tidak memiliki cukup uang di rekening mereka, fungsi buyCinemaTicket akan 
mengembalikan janji yang menolak dengan pesan kesalahan.

6. Fungsi goInsideCinema akan dipanggil dengan tiket bioskop yang dikembalikan oleh fungsi buyCinemaTicket sebagai argumennya.

7. Jika pengguna memiliki tiket bioskop yang valid, fungsi goInsideCinema akan mengembalikan janji yang menyelesaikan dengan pesan "nikmati filmnya".

8.Jika pengguna tidak memiliki tiket bioskop yang valid, fungsi goInsideCinema akan mengembalikan janji yang menolak dengan pesan kesalahan.

9. Klausul then akan mencetak hasil janji goInsideCinema ke konsol.
Klausul catch akan menangani kesalahan apa pun yang dilemparkan oleh fungsi withDrawMoney, buyCinemaTicket, atau goInsideCinema.
*/
