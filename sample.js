//let isRaining = prompt();

//isRaining = isRaining.toLowerCase() ==='false' ? false: true;

//console.log('Is currently raining', isRaining);

//let numberOfKidsPlayingOutside=10;

//if(isRaining)
// numberOfKidsPlayingOutside=2;
//else
// numberOfKidsPlayingOutside++;

// console.log(numberOfKidsPlayingOutside);

//Tema-curs miercuri

let nr1 = 11;
let nr2 = 15;
let nr3 = 25;
let x = 12;
let y = 10;
let varsta = 35;

console.log(nr1 + nr2);

function averageSum(x, y, z) {
  let avg = 0;
  avg = (x + y + z) / 3;
  return avg;
}

console.log(averageSum(nr1, nr2, nr3));

x += 5;
console.log(x);

y += 10;
y += 2;
console.log(y);

function compareNumbers(a, b) {
  if (a > b) console.log("A este mai mare ca B");
  else console.log("B este mai mare ca A");
}

compareNumbers(nr1, nr2);

function compareAge(a) {
  if (a <= 18) return false;
  else return true;
}
console.log("Varsta este mai mare sau egala cu 18" + " " + compareAge(varsta));

function checkCondition(a, b, c) {
  if (b > a && b > c) console.log(b + "" + "este cel mai mare numar");
  else console.log(b + " " + "nu este cel mai mare numar");
}
checkCondition(nr1, nr3, nr2);

function chechIf(a, b) {
  if (a != b) console.log("true");
  else console.log("a este egal cu b");
}
chechIf(nr1, nr2);

//Conditionale si bucle exercitii
function oneDo(x) {
  let i = 1;
  do {
    console.log(i);
    i++;
  } while (i <= x);
}

oneDo(10);

function showEven(x) {
  for (let i = 2; i <= x; i++) {
    if (i % 2 === 0) console.log(i + " " + "numar par");
  }
}

showEven(20);

let num1 = parseInt(prompt());
let num2 = parseInt(prompt());

function showNum(a, b) {
  if (a < b) for (let i = a; i <= b; i++) console.log(i);
  else for (let i = b; i <= a; i++) console.log(i);
}

showNum(num1, num2);

//ultimul exercitiu

let numar = parseInt(prompt());

function showTable(x) {
  for (let i = 1; i <= x; i++) console.log(x + "x" + i + "=" + x * i);
}

showTable(numar);
