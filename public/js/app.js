const people = require('./public/js/people.js');

const output = document.querySelector('#app');

people.forEach(function(person){
    console.log(person);
})

