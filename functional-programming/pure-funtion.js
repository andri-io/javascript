// impure function
let PI = 3.14;

const luasLingkaran = (jejari) => {
    return PI * (jejari * jejari);
}

console.log (`Luas Lingkaran : ${luasLingkaran(2)}`);
PI = 5;
console.log (`Luas Lingkaran : ${luasLingkaran(2)}`);


// pure Function
const hitungLuasLingkaran = (jariJari) =>{
    return 3.14 * (jariJari * jariJari);
}


console.log(`Luas Lingkarang : ${hitungLuasLingkaran(4)}`);
console.log(`Luas Lingkarang : ${hitungLuasLingkaran(5)}`);
console.log(`Luas Lingkarang : ${hitungLuasLingkaran(6)}`);

// contoh 2 

const createPersonWithAge = (age, person) => {
    return {...person, age}
}

const person = {
    name : 'Agile'
};

const newPerson = createPersonWithAge(18, 'andri');

console.log({person, newPerson});