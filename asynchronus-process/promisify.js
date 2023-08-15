const {promisify} = require('util');

function getUser(isOffline, callBack){
    setTimeout(() =>{
        const user = ["John", "Jack", "Abigail"];

        if(isOffline){
            callBack(new Error("cannot retrieve users due offline"), null);
            return;
        }
        callBack(null, user);
    },200);
}

const getUserPromise = promisify(getUser);

getUserPromise(false).then(user => console.log('Data : ',user)).catch(err => console.log(err.message));
getUserPromise(true).then(user => console.log(user)).catch(err => console.log(err.message));




