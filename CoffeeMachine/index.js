// console.log("Menyalakan mesin kopi");
// console.log("Menggiling biji kopi");
// console.log("Memanaskan air");
// console.log("Mencampurkan air dan kopi");
// console.log("Menuangkan kopi ke dalam gelas");
// console.log("Menuangkan susu ke dalam gelas");
// console.log("Kopi Anda sudah siap!");

// const coffeeStock = require('./state');
// console.log(coffeeStock);

// const {coffeeStock, isCoffeeMachineReady} = require('./state');

// const makeCoffee = (type, miligrams) => {

//     if(isCoffeeMachineReady){
//         console.log('Mesin kopi siap digunakan');
//         if(coffeeStock[type] >=miligrams){
//             console.log(`Kopi ${type} berhasil dibuat`);
//         }
//         else{
//             console.log(`Biji kopi ${type} habis`);
//         }
//     }
//     else{
//         console.log('Mesin kopi tidak siap digunakan');
//     }
// }


// makeCoffee('robusta', 80);
// makeCoffee('arabica', 270);

//add "type": "module", inside package.json
import state from './state.js';

const displayStock = stock => {
    for (const type in stock) {
      console.log(type);
    }
  }

displayStock(state.coffeeStock);
console.log(state.coffeeStock);
console.log(state.isCoffeeMachineReady);