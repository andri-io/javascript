//Pemeriksaan Umur:

let age = 17;

if (age >= 18){
    console.log('You are an adult');
} else {
    console.log("You are not an adult yet.");
}

// pemeriksa bilangan positif atau negatif
let number = -5;

if (number > 0) {
  console.log("The number is positive.");
} else if (number < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}

// pemeriksa bilangan genap atau ganjil 
let num = 8;

if (num % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}

// pemeriksa kata kunci 
let role = "admin";

if (role === "admin") {
  console.log("You have administrative privileges.");
} else {
  console.log("You have limited access.");
}

// pemeriksa nilai rata rata

let averageScore = 85;

if (averageScore >= 90) {
  console.log("You got an A.");
} else if (averageScore >= 80) {
  console.log("You got a B.");
} else if (averageScore >= 70) {
  console.log("You got a C.");
} else {
  console.log("You need to improve your performance.");
}

