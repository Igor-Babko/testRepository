'use strict';
const options = {
    name: 'igor',
    age: 25,
    sex: 'male',
    colors: {
        border: 'black',
        bg: 'red'
    }
};

// console.log(options['colors']['border']);

console.log(Object['keys'](options).length);