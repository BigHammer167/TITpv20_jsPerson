console.log("Hello, my friend!");
//задать переменные / declare a variable
let name = "Alen Kutnjashenko";
let age = 17;
let survived = true;
let city = "Estonia";
let drivingLicense = "";
//console.log("Character: ", name, ". Age: ", age, ". City: ", city);
console.log(`Chracter: ${name}. Age: ${age}. City: ${city}.`);

if(age < 17) {
   drivingLicense = (`${name} is too young to drive a car.`);
} else {
   drivingLicense = (`${name} is old enough to drive a car.`);
}

console.log(drivingLicense);

const html = `
<ul>
<li>Name: ${name}</li>
<li>Age: ${age}</li>
<li> City:${city}</li>
<li>${drivingLicense}</li>
</ul>

`;

document.body.innerHTML = html;