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

const password = prompt("Please enter a new password...");
if(password.length >= 6){
    if(password.indexOf(' ') === -1){
        console.log("Valid Password!");
    }else{
        console.log("Password cannot contain space!");
    }
}else{
    console.log("Password Too Short! Must be 6+ characters!");
}