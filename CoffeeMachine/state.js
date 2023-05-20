const coffeeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200,
}

const isCoffeeMachineReady = true;

// module.exports = coffeeStock;
// module.exports = {coffeeStock, isCoffeeMachineReady}

//add "type": "module", inside package.json
export default {coffeeStock, isCoffeeMachineReady};

// console.log(module);