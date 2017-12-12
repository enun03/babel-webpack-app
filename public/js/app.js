const people = require('./people.js');

const output = document.querySelector('#app');

people.forEach(function(person){
    console.log(person);
})

