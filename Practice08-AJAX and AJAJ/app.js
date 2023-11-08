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
// const loadStarWarsPeople = async()=>{
//     try{
//         const res = await fetch("https://swapi.dev/api/people/1/");
//         const data = await res.json();
//         console.log(data);
//         const res2 = await fetch("https://swapi.dev/api/people/2/");
//         const data2 = await res2.json();
//         console.log(data2);
//     }catch(e){
//         console.log("ERROR!!!",e);
//     }
// };
// loadStarWarsPeople();

// axios.get("https://swapi.dev/api/people/1/")
// .then(res =>{
//     console.log("RESPONSE:",res);
// })
// .catch(e=>{
//     console.log("ERROR:",e);
// });
// const getStarWarPerson = async (id)=>{
//     try{
//         const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//         console.log(res.data);
//     }catch(e){
//         console.log("ERROR",e);
//     }
// }
// getStarWarPerson(1);
// getStarWarPerson(2);

// const jokes = document.querySelector("#jokes");
// const jokeBtn = document.querySelector("#jokeBtn");
// const getDadJoke = async () =>{
//     try{
//         const config = {headers:{Accept:'application/json'}};
//         const res = await axios.get("https://icanhazdadjoke.com/",config);
//         return res.data.joke;
//     }catch(e){
//         return "NO JOKES AVAILABLE! SORRY."
//     }
// }
// const addNewJoke = async () =>{
//     const jokeText = await getDadJoke();
//     const newJoke = document.createElement("LI");
//     newJoke.append(jokeText);
//     jokes.append(newJoke);
// }
// jokeBtn.addEventListener('click',addNewJoke);

const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function(e){
    e.preventDefault();
    // console.dir(form);
    const searchTerm = form.elements.query.value;
    // const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
    const config = {params: {q: searchTerm}}
    const res = await axios.get(`https://api.tvmaze.com/search/shows`,config);
    // console.log(res.data);
    // console.log(res.data[0].show.image.medium);
    // const img = document.createElement('IMG');
    // img.src = res.data[0].show.image.medium;
    // document.body.append(img);
    makeImages(res.data);
    form.elements.query.value='';
});

const makeImages = (shows) => {
    for(let result of shows){
        if(result.show.image){
            const img = document.createElement("IMG");
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}