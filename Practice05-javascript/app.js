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

