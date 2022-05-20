function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}


const africa = ['Zebras', 'Liūtas', '', 'Raganosis', '', 'Raganosis', 'Begemotas'];
const australia = ['Kengūra', 'Ančiasnapis', 'Dingo', 'Atsirado', 'Strutis'];

// 1. Tiesiogiai HTML faile rankiniu būdu sukurkite du tuščius <h2> tagus ir vieną mygtuką. (2 taškai)

const heading1 = document.createElement('h2');
const heading2 = document.createElement('h2');
const btn = document.createElement('button');

document.body.appendChild(heading1);
document.body.appendChild(heading2);
document.body.appendChild(btn);
btn.innerHTML = 'Click';

console.log(heading1, heading2, btn);

// Paspaudus mygtuką kiekvienam tagui sugeneruotkite rand() atskirą skaičių nuo 1 iki 6 ir jį įrašykite į tago vidų naudojant innerText() metodą. (4 taškai)

btn.addEventListener('click', () => {
  heading1.innerHTML = rand(1, 6);
  heading2.innerHTML = rand(1, 6);
});

// Paspaudus mygtuką skaičiai turi būti pergeneruojami iš naujo. Jeigu sugeneruoti skaičiai yra vienodi, juos nudažyti raudonai. (4 taškai)

const h2Tags = document.querySelectorAll('h2');
console.log(h2Tags);

btn.addEventListener('click', () => {
  if (heading1.innerHTML === heading2.innerHTML) {
    h2Tags.forEach(tag => tag.style.color = 'red');
  } else {
    h2Tags.forEach(tag => tag.style.color = 'black');
  }
});

// Tiesiogiai HTML faile rankiniu būdu sukurkite <h3> tagą ir vieną mygtuką. Susikurkite tuščią masyvą, skaičiams saugoti. (2 taškai)
const h3Tag = document.createElement('h3');
const but = document.createElement('button');

const numArray = [];

but.innerHTML = 'Click me';

document.body.appendChild(h3Tag);
document.body.appendChild(but);

console.log(h3Tag, but, numArray);

// Paspaudus mygtuką, sugeneruokite rand() skaičių nuo 1 iki 10. Sugeneruotą skaičių pridėkite į masyvą, o tą masyvą atspausdinkite konsolėle. (4 taškai)

but.addEventListener('click', () => {
  numArray.push(rand(1, 10));
  console.log(numArray);
});


// <h3> tage skaičiuokite ir su innerText() metodu rašykite visų sugeneruotų skaičių sumą. (4 taškai)

but.addEventListener('click', () => {
  let sum = 0;
  for (let i = 0;i < numArray.length;i++) {
    sum += numArray[i];
  }
  h3Tag.innerHTML = sum;
});

// Tiesiogiai HTML faile rankiniu būdu sukurkite <ul> tagą. (2 taškai)

const ulTag = document.createElement('ul');
console.log(ulTag);

document.body.appendChild(ulTag);

//  JS pagalba perskaitykite masyvą africa. (4 taškai)
africa.forEach((el, i) => console.log(i, el));

// Naudodami createElement() ir kitus reikalingus metodus sukurkite kiekvienam masyvo elementui po <li> tagą su elemento stringu viduje ir juos įrašykite į <ul> tago vidų. (5 taškai)
//  Elementus su tuščiais stringais praleiskite ir jiems <li> elementų nekurkite. (4 taškai)

africa.forEach(el => {
  if (el !== '') {
    const li = document.createElement('li');
    li.innerHTML = el;
    ulTag.appendChild(li);
  }
});

console.log(ulTag);

//  Tiesiogiai HTML faile rankiniu būdu sukurkite du tuščius input laukelius, vieną <h5> tagą ir du mygtukus: “+” ir “-”. (2 taškai)

const input1 = document.createElement('input');
const input2 = document.createElement('input');

const h5Tag = document.createElement('h5');

const but1 = document.createElement('button');
const but2 = document.createElement('button');

console.log(but1, but2);

but1.innerHTML = '+';
but2.innerHTML = '-';

document.body.appendChild(input1);
document.body.appendChild(input2);
document.body.appendChild(h5Tag);
document.body.appendChild(but1);
document.body.appendChild(but2);

// Suprogramuokite kalkuliatorių taip, kad įrašius skaičius į abu input laukelius ir paspaudus atitinkamą mygtuką su skaičiais būtų atlikta atitinkama aritmetinė operacija. (10 taškai)
// Jos rezultatas būtų atvaizduotas <h5> tage. (3 taškai)

but1.addEventListener('click', () => {
  h5Tag.innerHTML = parseInt(input1.value) + parseInt(input2.value);
});

but2.addEventListener('click', () => {
  h5Tag.innerHTML = parseInt(input1.value) - parseInt(input2.value);
});

// Tiesiogiai HTML faile rankiniu būdu sukurkite <ul> tagą. (2 taškai)

const UL = document.createElement('ul');
document.body.appendChild(UL);
console.log(UL);

// JS pagalba perskaitykite masyvą australia ir kiekvieną masyvo elementą įrašykite į strigą su <li> tagais iš abiejų pusių, o visus gautus stringus sudėkite į vieną bendrą stringą. (8 taškai)

const animalList = australia.map((el) => '<li>' + el + '</li>').join('');

console.log(animalList);

// Tą stringą naudodami innerHTML() metodą įdėkite į <ul> tago vidų. (5 taškai)

UL.innerHTML = animalList;
console.log(UL);


// Generavimo metu “Dingo” background’ą nuspalvinkite mėlynai. (5 taškai)

const animal = document.querySelectorAll('UL li');

animal.forEach(el => console.log(el.innerHTML === 'Dingo' ? el.style.backgroundColor = 'blue' : el.style.backgroundColor = 'transparent'));
