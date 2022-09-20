class MyError {
    public message: string;
    public type: string;

    constructor (message: string, type: string) {
        this.message = message
        this.type = type
    }
}

console.log('Will error be right?')

try {
    console.log('Before the error')
    throw new MyError ('My made up error', 'Abstrato')
    console.log('After the error')
}catch (error) {
    if (error instanceof MyError) {
    console.log(`${error.type}: ${error.message}`);
    } else {
        console.log(`Error: ${error.message}`);
    }
        console.log('ERROR!')
        }


console.log('End')