//Exercitii-session 10 iunie 2024

let num = prompt();
checkIf(num);
console.log(checkPrime(num));
sumNumbers(num);

function checkIf(x) {
  if (x > 10) console.log("Este mai mare ca 10");
  else console.log("Nu este mai mare ca 10");
}

function checkPrime(x) {
  if (x > 2) for (let i = 2; i < x; i++) if (x % i === 0) return false;

  return true;
}

function sumNumbers(x) {
  let sum = 0;
  for (let i = 0; i <= x; i++) sum += i;

  console.log(sum);
}

function createPerson(name, age, city) {
  return {
    name: name,
    age: age,
    city: city,
  };
}

const person = createPerson("John", 32, "Chicago");
person.age = 33;
console.log(person);

function Computer(num1, num2) {
  this.num1 = num1;
  this.num2 = num2;
  this.suma = function () {
    return num1 + num2;
  };
}

let a = parseInt(prompt());
let b = parseInt(prompt());
const computers = new Computer(a, b);
console.log(computers.num1);
console.log(computers.num2);
console.log(computers.suma());

let Car = {
  make: "dunno",
  model: "Mustang",
  year: 2021,

  engine: {
    power: 220,
    fuelType: "diesell",
  },
};

console.log(Car.engine.power);

function Book(author, title) {
  this.author = author;
  this.title = title;
}

const book1 = new Book("Bram Stoker", "Dracula");
const book2 = new Book("Bram Stoker", "Other works");

compareBooks(book1, book2);

function compareBooks(book1, book2) {
  if (book1.title === book2.title && book1.author === book2.author)
    console.log("books are the same");
  else console.log("Books are not the same");
}

let numLine = [];

for (let i = 1; i <= 3; i++) {
  const num = parseInt(prompt());
  numLine.push(num);
}

function sum(ara) {
  let sum = 0;
  for (let numbers of ara) {
    sum += numbers;
  }
  return sum;
}

console.log(sum(numLine));

//exercitiu array de la utilizator

let numLine2 = [];

for (let i = 1; i <= 5; i++) {
  const num = parseInt(prompt());
  numLine2.push(num);
}

numLine.forEach(checkNegative);

function checkNegative() {
  for (let number of numLine2)
    if (number < 0) {
      console.log("Are un numar negativ");
      return false;
    }

  console.log("Are nr doar pozitive");
  return true;
}
//country exercise
const countries = [];
function createCountry(code, name, capital) {
  return {
    code,
    name,
    capital,
  };
}

const romania = createCountry(4, "Romania", [
  "Bucuresti",
  "Brasov",
  "Timisoara",
]);
const eng = createCountry(1, "UK", ["London", "Surrey", "Cambridge"]);
countries.push(romania);
countries.push(eng);

console.log(countries);

showCountry(1);

function showCountry(cod) {
  for (let key in countries)
    if (countries[key].code === cod)
      console.log(countries[key].name, countries[key].capital);
}

///ex 4 arrays
const products = [];

products.push(createProducts("mere", 50, 25));
products.push(createProducts("bananae", 30, 50));
total(products);

function createProducts(nume, pret, cantitate) {
  return {
    nume,
    pret,
    cantitate,
  };
}

function total(prod) {
  let pretT = 0;
  let cantT = 0;
  for (let key in prod) {
    pretT += prod[key].pret;
    cantT += prod[key].cantitate;
  }

  console.log("Pretul total este:" + pretT);
  console.log("Cantitatea toala este:" + cantT);
}

//ex5 array
const students = [];
students.push(new Student("Johnny", 16, [10, 8, 6]));
students.push(new Student("Sara", 15, [10, 7, 9]));
students.push(new Student("Steve", 16, [8, 7, 4]));
console.log(students);

function Student(name, age, grades) {
  this.name = name;
  this.age = age;
  this.grades = grades;
}
for (let key in students) {
  console.log(students[key].name);

  avrGrade(students[key].grades);
}

function avrGrade(arrGrades) {
  let sum = 0;
  for (let i = 0; i < 3; i++) sum += arrGrades[i];

  console.log("Average grade:" + Math.floor(sum / 3));
}

/////

//exercitii de string
const str1 = prompt();
const str2 = prompt();

const sir = str1.concat(str2);
console.log(sir);
console.log(sir.length);
const stringLong = createSeparate(str2);
console.log(stringLong);
const aha = stringLong.reverse();
console.log(aha);

function createSeparate(ara) {
  const arai = ara.split("");
  return arai;
}

//ultimul ex de string//

let siru = prompt();
afisare(siru);

function afisare(ara) {
  let arai = [];
  arai = ara.split(" ");
  console.log(arai);

  for (let cuvant of arai) console.log(cuvant.length);
}
