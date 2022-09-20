var MyError = /** @class */ (function () {
    function MyError(message, type) {
        this.message = message;
        this.type = type;
    }
    return MyError;
}());
console.log('Will error be right?');
try {
    console.log('Before the error');
    throw new MyError('My made up error', 'Abstrato');
    console.log('After the error');
}
catch (error) {
    if (error instanceof MyError) {
        console.log("".concat(error.type, ": ").concat(error.message));
    }
    else {
        console.log("Error: ".concat(error.message));
    }
    console.log('ERROR!');
}
console.log('End');
