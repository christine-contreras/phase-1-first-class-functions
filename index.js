//receive a function and calls it
function receivesAFunction(callback) {
    callback(); //envoke argument 
}

//return a named function
function returnsANamedFunction(){
    return function named() {
        //function execution here
    }
}

//return anonymous function
function returnsAnAnonymousFunction(){
    return function(){
        //function execution here
    }
}