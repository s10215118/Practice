// const data = `{"ticker":{"base":"BTC","target":"USD","price":"11203.95559309","volume":"92852.24445404","change":"29.34902723"},"timestamp":1596510482,"success":true,"error":""}`;

// const parseData = JSON.parse(data);
// console.log(parseData);
// console.log(parseData.ticker);
// console.log(parseData.timestamp);

// const req = new XMLHttpRequest();
// req.onload = function(){
//     console.log("Success!!!");
//     // console.log(this);
//     const data = JSON.parse(this.responseText);
//     console.log(data.name, data.hair_color);
// };
// req.onerror = function(){
//     console.log("ERROR!!!");
//     console.log(this);
// };
// req.open("GET","https://swapi.dev/api/people/1/");
// req.send();

// fetch("https://swapi.dev/api/people/1/")
//     .then(res =>{
//         console.log("RESOLVED!", res);
//         return res.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(e =>{
//         console.log("ERROR!",e);
//     })
// fetch("https://swapi.dev/api/people/1/")
//     .then(res =>{
//         console.log("RESOLVED!", res);
//         return res.json();
//     })
//     .then(data => {
//         console.log(data);
//         return fetch("https://swapi.dev/api/people/2/");
//     })
//     .then(res =>{
//         console.log("SECOND REQUEST RESOLVED!!!");
//         return res.json();
//     })
//     .then(data =>{
//         console.log(data);
//     })
//     .catch(e =>{
//         console.log("ERROR!",e);
//     })
const loadStarWarsPeople = async()=>{
    try{
        const res = await fetch("https://swapi.dev/api/people/1/");
        const data = await res.json();
        console.log(data);
        const res2 = await fetch("https://swapi.dev/api/people/2/");
        const data2 = await res2.json();
        console.log(data2);
    }catch(e){
        console.log("ERROR!!!",e);
    }
};
loadStarWarsPeople();