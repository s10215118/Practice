// let random = Math.random();
// if(random < 0.5){
//     console.log("Your number is less than 0.5!!!");
// }else if(random > 0.5){
//     console.log("Your number is greater than 0.5!!!");
// }else{
//     console.log("Your number is equal to 0.5!!!");
// }
// console.log(random);

// const dayOfWeek = prompt('ENTER A DAY...').toLowerCase();
// if(dayOfWeek === 'monday'){
//     console.log("UGHH I HATE MONDAYS!");
// }else if(dayOfWeek === 'saturday'){
//     console.log("YEAHHH I LOVE SATURDAY!");
// }else if(dayOfWeek === 'friday'){
//     console.log("TGIF");
// }else{
//     console.log("MEH");
// }

// const age =80;
// if(age < 5){
//     console.log("You are a baby. You get in for free!");
// }else if(age < 10){
//     console.log("You are a child. You pay $10!");
// }else if(age < 65){
//     console.log("You are a adult. You pay $20!");
// }else{
//     console.log("You are a senior. You pay $10!");
// }

// const password = prompt("Please enter a new password...");
// if(password.length >= 6){
//     if(password.indexOf(' ') === -1){
//         console.log("Valid Password!");
//     }else{
//         console.log("Password cannot contain space!");
//     }
// }else{
//     console.log("Password Too Short! Must be 6+ characters!");
// }

// const password = prompt("Enter Your password");
// if(password.length >= 6 && password.indexOf(' ' === -1)){
//     console.log("Valid Password!");
// }else{
//     console.log("Invalid format for password!");
// }

// const age = 100;
// if((age >= 0 && age < 5) || age >=65 && age <130){
//     console.log("FREE!");
// }else if(age >=5 && age < 10){
//     console.log("$10");
// }else if(age >=5 && age < 65){
//     console.log("$20");
// }else{
//     console.log("Invalid Age");
// }

// const firstName = prompt("Enter your first name");
// if(!firstName){
//     firstName = prompt("Try again");
// }

// const age = 8;
// if(!((age >= 0 && age < 5) || (age >=65 && age <130))){
//     console.log("You are not a baby or senior");
// }

// const day = 6;
// switch (day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursay"); 
//         break; 
//     case 5:
//         console.log("Friday");
//         break;
//     // case 6:
//     //     console.log("Saturday");
//     //     break;
//     // case 7:
//     //     console.log("Sunday");
//     //     break;
//     case 6:
//     case 7:
//         console.log("Weekend");
//         break;
//     default:
//         console.log("Invalid week day");
//         break;
// }

// 字串無法用index去更新
// let firstName ="michael";
// firstName[0] = "M";
// console.log(firstName);

// 陣列可以用index去更新
// let color = ["rad","orange","yalloww"];
// console.log(color);
// color[0] = "red";
// color[2] = "yellow";
// console.log(color);
// color[10] = "indigo";
// console.log(color);
// console.log(color.length);
// console.log(color[5]);

// let rgbColor = ["red","green", "blue"];
// console.log(rgbColor.reverse()); 
// console.log(rgbColor);

// let nums = [1,2,3];
// let numsCopy = nums;
// nums.push(4);
// console.log(nums);
// console.log(numsCopy);
// console.log(nums === numsCopy);

// const nums = [1,2,3];
// // nums = [0,1,2,3];
// nums[0] = 0;
// console.log(nums);

// const gameBoard =[
//     ['X','O','X'],
//     ['O',null,'X'],
//     ['O','O','X']
// ];
// console.log(gameBoard);
// console.log(gameBoard[1][1]);

// const person = {firstName: 'Mick',lastName:'Jagger'};
// console.log(person);
// const kitchenSink={
//     favNum: 92319023,
//     isFunny: true,
//     colors: ['red','orange']
// };
// console.log(kitchenSink);
// console.log(person['lastName']);
// console.log(kitchenSink['colors']);
// console.log(person.firstName);
// console.log(kitchenSink.isFunny);

// const midterms = {daniel: 96, thomas: 78};
// console.log(midterms);
// midterms.thomas = 79;
// console.log(midterms);
// midterms.thomas = 'C';
// midterms.daniel = 'A';
// console.log(midterms);
// midterms.ezra = 'B+';
// midterms['antonio'] = 'A-'
// console.log(midterms);

// const comments =[
//     {userName: 'Tammy', text: 'lololol', votes: 9},
//     {userName: 'FishBoi', text: 'glub glub', votes: 12387}
// ];
// console.log(comments[1].text);

// const secret = 'BabyHippo';
// let input = prompt("Enter a secret code...");
// while(input !== secret){
//     input = prompt("Enter a secret code...");
// }
// console.log("CONGRATS!!!");

// let maximum = parseInt(prompt('Enter the maximum number!'));
// while(!maximum){
//     maximum = parseInt(prompt('Enter the maximum number!'));
// }
// const targetNum = Math.floor(Math.random() * maximum)+1;
// // console.log(targetNum);
// let guess = prompt("Enter your first guess!");
// let attempts = 1;
// while(parseInt(guess) !== targetNum){
//     if(guess.toLowerCase() === 'q') break;
//     attempts++;
//     if(parseInt(guess) > targetNum){
//         guess = prompt("Too high! Enter a new guess!");
//     }else{
//         guess = prompt("Too low! Enter a new guess!");
//     }
// }
// if(guess.toLowerCase() === 'q'){
//     console.log("OK, Quitting.");
// }else{
//     console.log(`You Got It!!! The targetNum is ${targetNum}. It took you ${attempts} guesses`);
// }

// const subreddits = ['cringe','books','chickens', 'funny', 'pics', 'soccer', 'gunners'];
// for(let sub of subreddits){
//     console.log(sub);
// }

// const seatingChart =[
//     ['Kristen', 'Erik', 'Namita'],
//     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]
// for(let row of seatingChart){
//     for(let student of row){
//         console.log(student);
//     }
// }

// for(let char of "Hello World"){
//     console.log(char);
// }

// const scores = {
//     keenan: 80,
//     damon: 67,
//     kim: 89,
//     shawn: 91,
//     marlon: 72
// }
// for(let person in scores){
//     console.log(`${person} scored ${scores[person]}`);
// }
// console.log(Object.keys(scores));
// console.log(Object.values(scores));
// console.log(Object.entries(scores));
// let totalScore = 0;
// let studentScore = Object.values(scores);
// for(let score of studentScore){
//     totalScore+=score;
//     console.log(totalScore);
// }
// console.log(totalScore / studentScore.length);

// function singSong(){
//     console.log('Do');
//     console.log('Re');
//     console.log('Mi');
// }
// singSong();

// function greet(firstName, lastName){
//     console.log(`Hi, ${firstName} ${lastName[0]}.`);
// }
// greet('Michael','Hsieh');

// function repeat(message, times){
//     let result = '';
//     for(let i = 0; i < times; i++){
//         result +=message
//     }
//     console.log(result);
// }
// repeat('$',3);
// repeat(10,'$');

// let bird = 'eagle';
// function birdWatch(){
//     let bird = 'swallow';
//     console.log(bird);
// }
// console.log(bird);
// birdWatch();
// console.log(bird);

// const add = function(x,y){
//     return x+y;
// }
// console.log(add(1,3));

// function callTwice(func){
//     func();
//     func();
// }
// function rollDice(){
//     const roll = Math.floor(Math.random()*6)+1;
//     console.log(roll);
// }
// callTwice(rollDice);
// // callTwice(rollDice()); //錯誤寫法

// function makeMysterFunc(){
//     const rand = Math.random();
//     if(rand > 0.5){
//         return function(){
//             console.log('Congrats');
//         };
//     }else{
//         return function(){
//             alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS!");
//         }
//     }
// }
// const mystery = makeMysterFunc();
// console.log(mystery());

// function makeBetweenFunc(min, max){
//     return function(num){
//         return num >= min && num <= max;
//     }
// }
// const testRange = makeBetweenFunc(50,100);
// console.log(testRange(70));

// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// function print(element){
//     console.log(element);
// }
// numbers.forEach(print);
// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// numbers.forEach(function (el){
//     console.log(el);
// });

// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99
//     },
//     {
//         title: 'Stand By Me',
//         score: 85
//     },
//     {
//         title: 'Parasite',
//         score: 95
//     },
//     {
//         title: 'Alien',
//         score: 90
//     }
// ];
// movies.forEach(function (movie){
//     console.log(`${movie.title} - ${movie.score}/100`);
// });

// const numbers = [1,2,3,4,5,6,7];
// const doubles = numbers.map(function(num){
//     return num*2;
// });
// numbers.forEach(function(el){
//     console.log(el);
// });
// doubles.forEach(function(el){
//     console.log(el);
// });

// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99
//     },
//     {
//         title: 'Stand By Me',
//         score: 85
//     },
//     {
//         title: 'Parasite',
//         score: 95
//     },
//     {
//         title: 'Alien',
//         score: 90
//     }
// ];
// const movieTitles = movies.map(function(movie){
//     return movie.title.toUpperCase();
// });
// movieTitles.forEach(function(title){
//     console.log(title);
// });

// const add = (x,y) =>{
//     return x + y;
// };
// console.log(add(1,5));

// const square = (x)=>{
//     return Math.pow(x,2);
// };
// console.log(square(2));

// const square = x =>{
//     return Math.pow(x,2);
// };
// console.log(square(2));

// const rollDice = ()=>{
//     return Math.floor(Math.random()*6)+1;
// };
// console.log(rollDice());

// const rollDice = ()=>(
//     Math.floor(Math.random()*6)+1
// );
// console.log(rollDice());

// const add = (a,b) => (a+b);
// console.log(add(7,100));

// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99
//     },
//     {
//         title: 'Stand By Me',
//         score: 85
//     },
//     {
//         title: 'Parasite',
//         score: 95
//     },
//     {
//         title: 'Alien',
//         score: 90
//     }
// ];
// const newMovies = movies.map((movie)=>{
//     return `${movie.title} - ${movie.score}/100`;
// });
// const titles = movies.map(movie=>(movie.score));
// newMovies.forEach(el=>console.log(el));
// titles.forEach(el=>console.log(el));

// console.log("Hello");
// setTimeout(()=>(console.log('u still there...?')),3000);

// const id = setInterval(()=>(console.log(Math.floor(Math.random()*6)+1)),2000);
// setTimeout(()=>(clearInterval(id)),10001);

// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99,
//         year: 1984
//     },
//     {
//         title: 'Sharknado',
//         score: 35,
//         year: 2013
//     },
//     {
//         title: '13 Going On 30',
//         score: 70,
//         year: 2004
//     },
//     {
//         title: 'Stand By Me',
//         score: 85,
//         year: 1986
//     },
//     {
//         title: 'Waterworld',
//         score: 62,
//         year: 1995
//     },
//     {
//         title: 'Jingle All The Way',
//         score: 71,
//         year: 1996
//     },
//     {
//         title: 'Parasite',
//         score: 95,
//         year: 2019
//     },
//     {
//         title: 'Notting Hill',
//         score: 77,
//         year: 1999
//     },
//     {
//         title: 'Alien',
//         score: 90,
//         year: 1979
//     }
// ];
// const greatMovies = movies.filter(movie =>{
//     return movie.score >80
// });
// const badMovies = movies.filter(movie =>(movie.score<70));
// greatMovies.forEach(greatMovie=>(
//     console.log(`${greatMovie.title} - ${greatMovie.score}`)
// ));
// console.log('----------');
// badMovies.forEach((badMovie => (console.log(`${badMovie.title} - ${badMovie.score}`))));
// console.log('----------');
// const recentMovies = movies.filter(m => m.year > 2000);
// recentMovies.forEach((r)=>(console.log(`${r.title} - ${r.year}`)));
// console.log('----------');
// const goodTitles = greatMovies.map(m => m.title);
// goodTitles.forEach((gt)=>console.log(gt));

// const exams = [80,98,92,78,70,90,89,84,81,77];
// console.log(exams.every(score=>score >=75));
// console.log(exams.some(score=>score >=75));

// const prices = [9.99,1.50,19.99,49.99,30.50];
// const total = prices.reduce((summary,price)=>(summary+price));
// console.log(total);

// const prices = [9.99,1.50,19.99,49.99,30.50];
// const total = prices.reduce((min,price)=>{
//     if(price < min)  return price;
//     else return min;
// });
// console.log(total);

// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99,
//         year: 1984
//     },
//     {
//         title: 'Sharknado',
//         score: 35,
//         year: 2013
//     },
//     {
//         title: '13 Going On 30',
//         score: 70,
//         year: 2004
//     },
//     {
//         title: 'Stand By Me',
//         score: 85,
//         year: 1986
//     },
//     {
//         title: 'Waterworld',
//         score: 62,
//         year: 1995
//     },
//     {
//         title: 'Jingle All The Way',
//         score: 71,
//         year: 1996
//     },
//     {
//         title: 'Parasite',
//         score: 95,
//         year: 2019
//     },
//     {
//         title: 'Notting Hill',
//         score: 77,
//         year: 1999
//     },
//     {
//         title: 'Alien',
//         score: 90,
//         year: 1979
//     }
// ];

//  const bestMovie = movies.reduce((bestM, curM)=>{
//     if(curM.score > bestM.score){
//         return curM;
//     }else{
//         return bestM;
//     }
//  });
//  console.log(bestMovie.title);

// const evens = [2,4,6,8];
// const total = evens.reduce((sum,num)=>(sum + num),100);
// console.log(total);


// function rollDie(numSides){
//     return Math.floor(Math.random()*numSides)+1;
// }
// console.log(rollDie());
// function rollDie(numSides){
//     if(numSides === undefined){
//         numSides = 6;
//     }
//     return Math.floor(Math.random()*numSides)+1;
// }
// console.log(rollDie());
// function rollDie(numSides = 6){
//     return Math.floor(Math.random()*numSides)+1;
// }
// console.log(rollDie());

// function greet(msg = "Hi",person){
//     console.log(`${msg}, ${person}!`);
// }
// greet('Michael');

// const nums = [13,4,5,21,3,3,1,2,7,6,4,2,53456];
// console.log(Math.max(nums));
// console.log(Math.max(...nums));
// console.log(...nums);

// console.log('hello');
// console.log(...'hello');

// const cats = ['Blue','Scout','Rocket'];
// const dogs = ['Rusty','Wyatt'];
// const allPets = [...cats, ...dogs];
// allPets.push('Nana');
// console.log(...allPets);
// console.log(...dogs);
// console.log(...cats);

// const feline = {legs: 4, family: 'Felidae'};
// const canine = {isFurry: true, family: 'Caninae'};
// const catDog = {...feline, ...canine};
// console.log(catDog);

// const num = {...[2,4,6,8]};
// console.log(num);

// const dataFromForm ={
//     email: 'blueman@gmail.com',
//     password: 'tobias123!',
//     userName: 'tfunke'
// };
// const newUser = {...dataFromForm, id:2345, isAdmin: false};
// console.log(newUser);

// function sum(){
//     return arguments.reduce((total,el)=>(total+el));
// };
// console.log(sum(3,4,5,6,7,8,1,2,3,4,1,2,3));

// function sum(...nums){
//     console.log(nums);
//     return nums.reduce((total,el)=>(total+el));
// }
// console.log(sum(3,5));

// function raceResults(gold, silver, ...everyoneElse){
//     console.log(`GOLD MEDAL GOES TO: ${gold}`);
//     console.log(`SILVER MEDAL GOES TO: ${silver}`);
//     console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`);
// }
// raceResults('Tammy','Todd','Tina','Trevor','Travis');

// const scores = [929321,899341,888336,772739,543671,243567,111934];
// const [gold, silver, bronze,...everyoneElse] = scores;
// console.log(gold);
// console.log(everyoneElse);

// const user = {
//     email: 'harvey@gmail.com',
//     password: 'sCoTt1948sMiTh',
//     firstName: 'Harvey',
//     lastName: 'Milk',
//     born: 1930,
//     died: 1978,
//     bio: 'Harvey Bernard Milk was an American politician an the first openly one.',
//     city: 'San Francisco',
//     state: 'California'
// }
// const {email, firstName, lastName, ...restPart} = user;
// const {born : birthYear} = user;
// console.log(email);
// console.log(firstName);
// console.log(lastName);
// console.log(birthYear);
// console.log(restPart);

// const user = {
//     email: 'harvey@gmail.com',
//     password: 'sCoTt1948sMiTh',
//     firstName: 'Harvey',
//     lastName: 'Milk',
//     born: 1930,
//     died: 1978,
//     bio: 'Harvey Bernard Milk was an American politician an the first openly one.',
//     city: 'San Francisco',
//     state: 'California'
// };
// function fullName({firstName, lastName}){
//     return `${firstName} ${lastName}`;
// }
// console.log(fullName(user));

// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99,
//         year: 1984
//     },
//     {
//         title: 'Sharknado',
//         score: 35,
//         year: 2013
//     },
//     {
//         title: '13 Going On 30',
//         score: 70,
//         year: 2004
//     },
//     {
//         title: 'Stand By Me',
//         score: 85,
//         year: 1986
//     },
//     {
//         title: 'Waterworld',
//         score: 62,
//         year: 1995
//     },
//     {
//         title: 'Jingle All The Way',
//         score: 71,
//         year: 1996
//     },
//     {
//         title: 'Parasite',
//         score: 95,
//         year: 2019
//     },
//     {
//         title: 'Notting Hill',
//         score: 77,
//         year: 1999
//     },
//     {
//         title: 'Alien',
//         score: 90,
//         year: 1979
//     }
// ];
// console.log(movies.filter((movie)=>(movie.score >= 90)));
// console.log(movies.filter(({score})=>(score >= 90)));

