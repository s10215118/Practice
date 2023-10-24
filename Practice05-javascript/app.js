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

let maximum = parseInt(prompt('Enter the maximum number!'));
while(!maximum){
    maximum = parseInt(prompt('Enter the maximum number!'));
}
const targetNum = Math.floor(Math.random() * maximum)+1;
// console.log(targetNum);
let guess = prompt("Enter your first guess!");
let attempts = 1;
while(parseInt(guess) !== targetNum){
    if(guess.toLowerCase() === 'q') break;
    attempts++;
    if(parseInt(guess) > targetNum){
        guess = prompt("Too high! Enter a new guess!");
    }else{
        guess = prompt("Too low! Enter a new guess!");
    }
}
if(guess.toLowerCase() === 'q'){
    console.log("OK, Quitting.");
}else{
    console.log(`You Got It!!! The targetNum is ${targetNum}. It took you ${attempts} guesses`);
}