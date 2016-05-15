'use strict';

function fibonacci_series(n) {
    var fibonacci = [];
    fibonacci[0] = 0;

    if(n === 0){

        return fibonacci;
    }
    fibonacci[1] = 1;

    for(var i = 2 ; ;i++){
        if(i>n){

            return fibonacci;
        }
        fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
    }
}

module.exports = fibonacci_series;
