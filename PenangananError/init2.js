// const json = '{ bad json }';
const json = '{ "age": 20 }';
try {
    console.log('Begin try');
    errorcode;
    const user = JSON.parse(json);

    if (!user.name) {
        throw new SyntaxError("'name' is required.");
    }

    console.log(user.name);
    console.log(user.age);
    console.log('End try');
} catch (error) {
    console.log('Error Catch');
    // console.log(error.name);
    // console.log(error.message);

    if (error instanceof SyntaxError) {
        console.log(`SyntaxError: ${error.message}`);
    } 
    else if (error instanceof ReferenceError) {
        console.log(`ReferenceError ${error.message}`);
    } 
    else {
        console.log(error.stack);
    }
}