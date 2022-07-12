// exercise level 1
// que 1
const firstName = "Rufaidat";
const lastName = "Al-siddiq";
const country = "Nigeria";
const isMarried = true;
const year = 2022;
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof isMarried);
console.log(typeof year);
// que 2
console.log("10" == 10);
// que 3
console.log(parseInt("9.8") == 10);
// que 4i
let truthy1 = 4;
let truthy2 = "she";
let truthy4 = true;
// que 4ii
let falsy1 = "";
let falsy2 = null;
let falsy3 = undefined;
// que 5
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
// que 6
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(4 > 3);
console.log(4 < 3);
console.log(!false);
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(python.includes("on") && jargon.includes("on")));
// que 7
let date = new Date();
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth() + 1);
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getTime());

// // exercise level 2
// que 1
let base = prompt("enter base:");
let height = prompt("enter base:");
let area = 0.5 * base * height;
alert(`The area of the triangle is ${area}`);
// que 2
let a = +prompt("enter side A:");
let b = +prompt("enter side B:");
let c = +prompt("enter side C:");
peri(a, b, c);

function peri(a, b, c) {
  sum = a + b + c;
  alert(sum);
}
// que 3
let length = prompt("length");
let width = prompt("width");
let area2 = length * width;
let peri2 = 2 * (length + width);
alert(`area equals ${area2} and perimeter equals ${peri2}`);
// que 4
let radius = prompt("enter radius");
let circleArea = Math.round(Math.PI * radius * radius);
let circumference = Math.round(2 * Math.PI * radius);
alert(`the area is ${circleArea} and the circumference is ${circumference}`);
// que 6
let y2 = 10;
let y1 = 2;
let x2 = 6;
let x1 = 2;
let m = (y2 - y1) / (x2 - x1);
console.log(m);
// que 8
let x = 0;
let y = Math.pow(x, 2) + (6 * x + 9);
console.log(y);
// que 9
let hours = prompt("Enter hours:");
let rate = prompt("Enter rate per hour:");
alert(`Your weekly earning is ${hours * rate}`);
// que 10
if (firstName.length > lastName.length) {
  console.log(
    `Your first name, ${firstName} is longer than your family name, ${lastName}`
  );
} else {
  console.log(
    `Your first name, ${firstName} is shorter than your family name, ${lastName}`
  );
}
// que 11
console.log(firstName.length == lastName.length);
// que 12
let myAge = 250;
let yourAge = 25;
console.log(`I am ${myAge - yourAge}years older than you`);
// que 13
let presentYear = date.getFullYear();
let birthYear = prompt("Enter birth year:");
const driveYear = 18;
let yearResult = presentYear - birthYear;
drive();
function drive() {
  if (yearResult >= 18) {
    alert(`You are ${yearResult}. You are old enough to drive`);
  } else {
    alert(
      `You are ${yearResult}. You will be allowed to drive after ${
        driveYear - yearResult
      } years`
    );
  }
}
// que 14
let yearNumber = prompt("Enter number of years you live:");
alert(`You lived ${yearNumber * 31536000} seconds`);
// que 15
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

// exercise level 3
let hour = () => {
  if (date.getHours() < 9) {
    return `0${date.getHours()}`;
  }
  return date.getHours();
};
console.log(hour());
let minute = () => {
  if (date.getMinutes() < 9) {
    return `0${date.getMinutes()}`;
  }
  return date.getMinutes();
};
console.log(minute());

console.log(
  `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()} ${hour()}:${minute()}`
);
