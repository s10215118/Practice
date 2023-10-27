// const allImages = document.getElementsByTagName('img');

// for(let img of allImages){
//     // console.log(img.src);
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
// }

const square = document.getElementsByClassName('square');
for(let img of square){
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
}

// const anchorJava = document.querySelector('a[title="Java"]');
// console.log(anchorJava);

// const allP = document.querySelectorAll('p');
// console.log(allP);

// const links = document.querySelectorAll('p a');
// for(let link of links){
//     console.log(link.href);
// }

// const allLinks = document.querySelectorAll('a');
// for(let link of allLinks){
//     link.innerText = 'I AM A LINK';
// }

const firstLink = document.querySelector('a');
firstLink.innerText = 'TAKE ME TO GOOGLE';
firstLink.setAttribute('href','https://www.google.com');

const inputT = document.querySelector('input[type="text"]');
// inputT.setAttribute('type','color');
// inputT.setAttribute('type','text');
inputT.setAttribute('placeholder','type something...');

// const h1 = document.querySelector('h1');


const allLinks = document.querySelectorAll('a');
for(let link of allLinks){
    link.style.color = '#006c86';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy';
}

// const firstH2 = document.querySelector('h2');
// firstH2.setAttribute('class','purple');
// // firstH2.setAttribute('class','border');
// // firstH2.setAttribute('class','purple border');
// const currentClasses = firstH2.getAttribute('class');
// firstH2.setAttribute('class',`${currentClasses} border`);

const firstH2 = document.querySelector('h2');
firstH2.classList.add('purple');
firstH2.classList.replace('purple','border');
// firstH2.classList.remove('border');
firstH2.classList.add('purple');

const squareImg = document.querySelector('.square');

const newImg = document.createElement('img');
newImg.src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=80";
document.body.appendChild(newImg);
newImg.classList.add('square');

const newH3 = document.createElement('h3');
newH3.innerText = 'I am New!';
document.body.appendChild(newH3);

const p = document.querySelector('p');
p.append('I am new test yaaaaaaaayy!!!','asdasdasdasdsads');

const newB = document.createElement('b');
newB.append('Hi!');
p.prepend(newB);

const h2 = document.createElement('h2');
h2.append('Are Adorable chickens');
const h1 = document.querySelector('h1');
h1.insertAdjacentElement("afterend",h2);
const h3 = document.createElement('h3');
h3.innerText='I am h3';
h1.after(h3);
h1.before(h3);

const firstLi = document.querySelector('li');
const ul = firstLi.parentElement;
const b = document.querySelector('b');

const imgToRemove = document.querySelector('img');
imgToRemove.remove();












































































// const allImages = document.getElementsByTagName('img');

// for (let img of allImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
// }

// const squareImages = document.getElementsByClassName('square');

// for (let img of squareImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
// }

// const links = document.querySelectorAll('p a');

// for (let link of links) {
//     console.log(link.href)
// }