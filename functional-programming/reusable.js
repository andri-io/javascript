// Array Map

const newArray = ['Arif','Rahmadani','Zet Erlangga','Gati'].map((name) => {return `${name}`});
console.info('Map',newArray);

//Array filter

const students = [
    {
        name : 'Arif',
        score : 70,
    },
    {
        name : 'Zet Erlangga',
        score : 90,
    },
    {
        name : 'Gati',
        score :80,
    },
    {
        name : 'Andre',
        score : 85,
    },
    {
        name : 'Bayhaqi',
        score : 60,
    }
];


// Array Filter
const eligibleForScholarshipStudent = students.filter(student => student.score >= 80);
console.info('Filter : ',eligibleForScholarshipStudent);
// Array Reduce
const totalScore = students.reduce((acc,curr) => acc + curr.score, 0);
console.info('Reduce  :',totalScore);
// Array Find
const findBayhaqi = students.find(student => student.name === 'Bayhaqi');
console.info('Find : ',findBayhaqi);


// Array Sort 
const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);

// compire number
const num = [1,5,3,6,7,2,7,8,9,];

const compireNumber = (a, b) => {
    return a - b;
}
const sorting = num.sort(compireNumber);
console.log(sorting);

// Array Every
const scores = [80,85,90];
const minimumScores = 60;

const result = scores.every(score => score >= minimumScores);
console.log(result);

// Array ForEach 
const user = ['Bayhaqi','Eos','Arif','Zet','Rahmadani'];

user.forEach(name => console.log(name));













