// Asynchronus dengan callback
function getUser(isOffline, callback){
    
    setTimeout(()=> {
        const users= ['Arif','Eos','Zet'];

        if(isOffline){
            callback(new Error('Cannot retrive user due offline'))
        }

        callback(null, users);
    },3000);
}

function userCallback(error, users){
    if(error){
        console.log('process failed',error.message);
        return;
    }

    console.log(`Process Success : ${users}`);
}

getUser(false, userCallback);