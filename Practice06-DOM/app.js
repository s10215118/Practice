// const btn = document.querySelector('#v2');
// btn.onclick = function(){
//     console.log("You Clicked Me!");
//     console.log("I Hope It Worked.");
// };
// function scream(){
//     console.log('AAAAAHHH');
//     console.log('STOP TOUCHING ME!!!');
// }
// btn.onmouseenter = scream;

// const button1 = document.querySelector('button');

// const h1 = document.querySelector('h1');
// h1.onclick = ()=>(alert('you clicked the h1!'));

// function scream(){
//     alert("YAAAAAHHH!!!");
// }
// const btn3 = document.querySelector('#v3');
// // btn3.addEventListener('mousedown',()=>{
// //     alert('Clicked!');
// // });
// // btn3.addEventListener('mouseup',()=>(alert('CLICKED!')));
// btn3.addEventListener('click',scream);
// btn3.addEventListener('click',()=>(alert('NO!')));



// const h1 = document.querySelector('h1');
// const btn = document.querySelector('button');
// btn.addEventListener('click',()=>{
//     const newColor = makeRandomColor();
//     const txtColor = makeTextColor(newColor[1],newColor[2],newColor[3]);
//     document.body.style.backgroundColor =  newColor[0];
//     h1.innerText = newColor[0];
//     h1.style.color=txtColor[0];
// });
// const makeRandomColor = ()=>{
//     const r = Math.floor(Math.random()*256);
//     const g = Math.floor(Math.random()*256);
//     const b = Math.floor(Math.random()*256);
//     const newColor = `rgb(${r},${g},${b})`;
//     return [newColor,r,g,b];
// }
// const makeTextColor = (r,g,b)=>{
//     const newR = 255-parseInt(r);
//     const newG = 255-parseInt(g);
//     const newB = 255-parseInt(b);
//     const newColor = `rgb(${newR},${newG},${newB})`;
//     return [newColor,newR,newG,newB];
// }


// const makeRandomColor = ()=>{
//     const r = Math.floor(Math.random()*256);
//     const g = Math.floor(Math.random()*256);
//     const b = Math.floor(Math.random()*256);
//     const newColor = `rgb(${r},${g},${b})`;
//     return newColor;
// }

// for(let i = 0; i<36; i++){
//     const btn = document.createElement('button');
//     btn.innerText = 'CLICK';
//     btn.style.margin = '20px';
//     btn.style.width = '100px';
//     btn.style.height = '100px';

//     document.body.appendChild(btn);
// }
// for(let i=0; i < 10; i++){
//     const h1 = document.createElement('h1');
//     h1.innerText="CLICK ME!";
//     document.body.appendChild(h1);
// }
// const buttons = document.querySelectorAll('button');
// for(let btn of buttons){
//     btn.addEventListener('click',colorize);
// }
// const h1s = document.querySelectorAll('h1');
// for(let h1 of h1s){
//     h1.addEventListener('click',colorize);
// }
// function colorize(){
//     this.style.backgroundColor = makeRandomColor();
// }


const input = document.querySelector('input');
input.addEventListener('keydown',function (e){
    console.log(e.key);
    console.log(e.code);
});
// input.addEventListener('keyup',function (){
//     console.log("KEYUP");
// });

window.addEventListener('keydown',function(e){
    // console.log(e.code);
    console.dir(e);
    console.log(e);
    switch(e.code){
        case 'ArrowUp':
            console.log('Up');
            break;
        case 'ArrowDown':
            console.log('Down');
            break;
        case 'ArrowLeft':
            console.log('LEFT');
            break;
        case 'ArrowRight':
            console.log('RIGHT');
            break;
        default:
            console.log('IGNORED');
    }
});