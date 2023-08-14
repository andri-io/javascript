setTimeout(() => {
  console.log("sedang di proses ....");
}, 1000);

function getUser(isOffline) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = ["arif", "rahmadani", "eos"];

      if (isOffline) {
        reject(new Error("cannot retrieve users due offline"));
        return;
      }

      resolve(user);
    }, 3000);
  });
}

getUser(false)
  .then((user) => console.log(user))
  .catch((err) => console.log(err.message));

setTimeout(() => {
  console.log("Terimakasih sudah mampir Silahkan datang kembali.");
}, 4000);
