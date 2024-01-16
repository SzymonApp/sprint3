// Zadania ze Zmiennych
// a) Zadeklaruj zmienną typu number i przypisz do niej dowolną liczbę całkowitą.
let number = 5;
console.log(number);
// b) Utwórz zmienną typu string przechowującą twoje imię.
let string = "Szymon";
console.log(string);
// c) Zainicjalizuj zmienną bez wartości, a następnie przypisz do niej dowolny tekst.
let name2;
name2 = "Szymon";
console.log(name2);
// d) Stwórz zmienną const i przypisz do niej obiekt z dwoma kluczami: name (string) i age (number).
const object = { name: "Szymon", age: 27 };
console.log("name: " + object.name + ", age:" + object.age);
// e) Zadeklaruj dwie zmienne: jedną używając let, drugą const i przypisz do nich wartości logiczne.
let lodic = true;
const logic2 = false;
console.log(logic + ", " + logic2);
// f) Stwórz zmienną, która będzie przechowywać sumę dwóch liczb.
let suma = 5 + 4;
console.log(suma);
// g) Utwórz zmienną przechowującą twoje pełne imię i nazwisko jako jedną wartość typu string.
let daneOsobowe = "Szymon Stachewicz";
console.log(daneOsobowe);
// h) Zainicjalizuj zmienną z liczbą zmiennoprzecinkową.
let a2 = 5.14;
console.log(a2);
// i) Zadeklaruj zmienną i przypisz do niej wynik działania matematycznego (np. dodawanie).
let a = 5;
let b = 4;
let suma2 = a + b;
console.log(suma2);
// j) Stwórz zmienną przechowującą twoje miasto jako ciąg znaków.
let city = "Poznań";
console.log(city);

// Zadania z Prostych i Złożonych Typów Danych
// a) Utwórz tablicę zawierającą trzy różne typy danych.
let table = [27, "Szymon", true];
console.log(table);
// b) Stwórz obiekt car z właściwościami make, model i year.
let marka = "Mercedes";
let model = "G-Class";
let year = 2020;
let car = marka + ", " + model + ", " + year;
console.log(car);
// c) Zadeklaruj tablicę z trzema różnymi wartościami liczbowymi.
let table2 = [7, 9.9834, 8945];
console.log(table2);
// d) Utwórz obiekt reprezentujący osobę, zawierający klucze name, age i isStudent (boolean).
let person = {
  name: "Jan",
  age: 21,
  isStudent: [true, false],
};

console.log(person.name + ", " + person.age + ", " + person.isStudent);
// e) Zadeklaruj zmienną przechowującą pusty obiekt, a następnie dodaj do niego klucz color z wartością typu string.
let object2;
object2 = { color: "Blue" };
console.log(object2.color);
// f) Stwórz tablicę obiektów, gdzie każdy obiekt reprezentuje zwierzę z kluczami name (string) i age (number).
let pet = new Array();
pet[0] = { name: "Cortina", age: 3 };
pet[1] = { name: "Snupi", age: 2 };
pet[2] = { name: "Marsi", age: 4 };
console.log(pet);
// g) Utwórz zmienną przechowującą tablicę z różnymi wartościami boolean.
var tablicaBoolean = [true, false];
console.log(tablicaBoolean);
// h) Stwórz obiekt student z kluczami name (string), grades (tablica liczb) i isActive (boolean).
let student = {
  name3: "Jan Kowalski",
  grades: [1, 2, 3, 4, 5, 6],
  isActive: [true, false],
};
console.log("Imię studenta" + student.name3);
console.log("Ocena" + student.grades);
console.log("Czy jest aktywny?" + student.isActive);

// i) Zadeklaruj tablicę zawierającą różne typy danych, w tym co najmniej jeden obiekt.
let table3 = [
  "Tekst",
  27,
  { pieczywo: "chleb", pieczywo2: "bułki", smarowanie: "masło" },
  true,
  undefined,
];
console.log(table3);

// j) Utwórz obiekt reprezentujący książkę z kluczami title, author i yearPublished.
let book = {
  title: "Langer",
  author: "Remigiusz Mróz",
  yearPublished: 2023,
};

console.log(book.title + ", " + book.author + ", " + book.yearPublished);

// Zadania z Warunków i Operatorów Trójargumentowych
// a) Napisz warunek if, który sprawdzi, czy zmienna typu number jest większa od 10.
number = 15;

if (number > 10) {
  console.log("Liczba większa od 10");
} else {
  console.log("liczba mniejsza od 10");
}

// b) Stwórz warunek if, który sprawdzi, czy zmienna tekstowa jest równa "Hello".

let string2 = "Hello";

if (string2 === "Hello") {
  console.log("Hello is Hello");
} else {
  console.log("Hello isn't Hello");
}

// c) Użyj operatora ternarnego do przypisania do zmiennej wartości w zależności od innego warunku logicznego.

// d) Napisz warunek, który sprawdzi, czy zmienna age jest większa lub równa 18.

let age = 20;

if (age >= 18) {
  console.log("Osoba jest pełnoletnia");
} else {
  console.log("Osoba ma mniej niz 18 lat");
}

// e) Stwórz warunek if-else, który sprawdzi, czy tablica jest pusta.

let tab;
if (tab == null) {
  console.log("Tablica jest pusta");
} else {
  console.log("Twoja tablica to:" + " " + tab);
}

// f) Użyj operatora ternarnego do sprawdzenia, czy zmienna isMember jest prawdziwa, i na tej podstawie przypisz rabat.

const age2 = 19;

const isMember = age2 == 20 ? true : false;

console.log(isMember);

// g) Napisz warunek if, który sprawdzi, czy długość ciągu znaków w zmiennej jest większa niż 5.

let string3 = "Szymon";

if (string3.length > 5) {
  console.log("Zmienna posiada więcej znaków niz 5");
} else {
  console.log("Zmienna posaida do 5 zanków");
}

// h) Stwórz warunek if-else, który sprawdzi, czy liczba jest parzysta lub nieparzysta.

let number3 = 20;

if (number3 % 2 === 0) {
  console.log("liczba jest parzysta");
} else {
  console.log("liczba jest nieparzysta");
}

// i) Użyj operatora ternarnego do wyboru między dwoma różnymi wartościami tekstowymi w zależności od warunku.

let Szymon = true;
let isYourName = Szymon ? "tak" : "nie";

console.log(isYourName);

// j)Napisz warunek if, który sprawdzi, czy obiekt ma określony klucz.

let Object = {
  key1: "qwerty",
  key2: "asdfgh",
  key3: "zxcvbn",
};

let gitKey = "key3";

if (gitKey in Object) {
  console.log(`Objekt posiada klucz ${gitKey}`);
} else {
  console.log(`Objekt nie posaida klucza ${gitKey}`);
}
