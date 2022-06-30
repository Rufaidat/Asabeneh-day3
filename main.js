// exercise level 1
let firstName = "Rufaidat";
let lastName = "Al-siddiq";
let country = "Nigeria";
let isMarried = true;
let year = 2022;
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof isMarried);
console.log(typeof year);

console.log("10" == 10);

console.log(parseInt("9.8") == 10);

let truthy1 = 4;
let truthy2 = "she";
let truthy4 = true;

let falsy1 = "";
let falsy2 = null;
let falsy3 = undefined;

console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != "4");
console.log(4 == "4");
console.log(4 === "4");
let python = "python";
let jargon = "jargon";
console.log(python.length !== jargon.length);

let date = new Date();
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth() + 1);
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getTime());

// exercise level 2
// let base = prompt("enter base:");
// let height = prompt("enter base:");
// let area = 0.5 * base * height;
// alert(`The area of the triangle is ${area}`);

// let a = prompt("enter side A:");
// let b = prompt("enter side B:");
// let c = prompt("enter side C:");
// peri(a, b, c);
// // let perimeter = a + b + c;
// // alert(`The perimeter of the triangle is ${a + b + c} `);
// function peri(a, b, c) {
//   sum = parseFloat(a + b + c);
//   alert(sum);
// }

// let length = prompt("length");
// let width = prompt("width");
// let area2 = length * width;
// let peri = 2 * (length + width);

// alert(`area equals ${area2} and perimeter equals ${peri}`);

// let radius = prompt("enter radius");
// let circleArea = Math.round(Math.PI * radius * radius);
// let circumference = Math.round(2 * Math.PI * radius);
// alert(`the area is ${circleArea} and the circumference is ${circumference}`);

let y2 = 10;
let y1 = 2;
let x2 = 6;
let x1 = 2;
let m = (y2 - y1) / (x2 - x1);
console.log(m);

let x = 0;
let y = Math.pow(x, 2) + (6 * x + 9);
console.log(y);

// let hours = prompt("Enter hours:");
// let rate = prompt("Enter rate per hour:");
// alert(`Your weekly earning is ${hours * rate}`);

if (firstName.length > lastName.length) {
  console.log(
    `Your first name, ${firstName} is longer than your family name, ${lastName}`
  );
} else {
  console.log(
    `Your first name, ${firstName} is shorter than your family name, ${lastName}`
  );
}

console.log(firstName.length == lastName.length);

let myAge = 250;
let yourAge = 25;
console.log(`I am ${myAge - yourAge}years older than you`);

// let presentYear = date.getFullYear();
// let birthYear = prompt("Enter birth year:");
// const driveYear = 18;
// let yearResult = presentYear - birthYear;
// drive();
// function drive() {
//   if (yearResult >= 18) {
//     alert(`You are ${yearResult}. You are old enough to drive`);
//   } else {
//     alert(
//       `You are ${yearResult}. You will be allowed to drive after ${
//         driveYear - yearResult
//       } years`
//     );
//   }
// }

// let yearNumber = prompt("Enter number of years you live:");
// alert(`You lived ${yearNumber * 31536000} seconds`);

console.log(
  `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
);
console.log(
  `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
);
console.log(
  `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
);

// // exercise level 3
// console.log(
//   `${date.getFullYear()}-${
//     date.getMonth() + 1
//   }-${date.getDate()} String(${date.getHours()}).padStart(2,'0')`
// );
