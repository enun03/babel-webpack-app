import 'bootstrap';
require('../css/style.css')

const people = require('./people.js')
const oArea = document.querySelector('#app')

let output = `
    <ul class='list-group'>
`;

people.forEach((person) => {
    output += `
        <li class='list-group-item'>
            <strong>Name:</strong> ${ person.name } | <strong>Age:</strong> ${person.age}
        </li>
    `
})

output += '</ul>'

oArea.innerHTML = output;
