import _ from 'lodash';

const myArray = [1,2,3,4];

//Method 1
// let sum = 0;

// for(let i = 0; i < myArray.length; i++){
//     sum += myArray[i];
// }


//Method2
// let sum = myArray.reduce((prev, curr) => {
//     return prev + curr
// });


//Method3
const sum = _.sum(myArray);


console.log(sum);

/* output
10
*/