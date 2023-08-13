// Array Map

const newArray = ['Arif','Rahmadani','Zet Erlangga','Gati'].map((name) => {return `${name}`});
console.table(newArray);

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

const eligibleForScholarshipStudent = students.filter((student) => student.score >= 80);
console.info(eligibleForScholarshipStudent);
const totalScore = students.reduce((acc,curr) => acc + curr.score, 0);
console.info('Total Score : s',totalScore);