const car = {
    brand : 'ford',
    color : 'red',
    maxSpeed : 200,
    chassisNumber : 'f-1',

    drive : () => {console.log('driving');},
    reverse : () => {console.log('revering');},
    turn : () => {console.log('turning');}
}

console.log(car.brand);
console.log(car.color);
car.drive();

console.table(car);