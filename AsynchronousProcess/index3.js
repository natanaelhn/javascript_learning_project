//Asynchronous Handling dengan Promise
function getUsers(isOffline){

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const users = ['John', 'Jack', 'Abigail'];

            if(isOffline){
                reject(new Error('cannot retrieve users due offline'));
                return;
            }

            else{
                resolve(users);
            }
        }, 3000);
    });
}

getUsers(false)
    .then(users => console.log(users))
    .catch(err => console.log(err.message));