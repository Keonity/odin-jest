import './styles.css';
import testBg from './coffeeBg.jpg';

console.log(`Welcome To The Odin Jest Test Project`);

const resultHeader = document.querySelector(`#resultHeader`);
const description = document.querySelector(`#description`);
const searchbar = document.querySelector(`#searchbar`);
const submit = document.querySelector(`#submit`);
const loadAnimation = document.querySelector(`#loadAnimationOff`);

const queryLocation = `Las Vegas`;

function sum(a, b) {
    return a + b;
}