const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}


// const p1Button = document.querySelector('#p1Button');
// const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');
// const p1Display = document.querySelector('#p1Display');
// const p2Display = document.querySelector('#p2Display');
const winningScoreSelect = document.querySelector('#playTo');

// let p1Score = 0;
// let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

function updateScore(player, opponent){
    if(!isGameOver){
        player.score += 1;
        if(player.score === winningScore){
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled=true;
            opponent.button.disabled=true;
        }
        player.display.textContent = player.score;
    }
}

p1Button.addEventListener('click',function(){
    updateScore(p1,p2);
});
p2Button.addEventListener('click',function(){
    updateScore(p2,p1);
});
resetButton.addEventListener('click', reset);
winningScoreSelect.addEventListener('change',function(){
    // alert(this.value);
    winningScore = parseInt(this.value);
    reset();
});

function reset(){
    isGameOver = false;
    for(let player of [p1,p2]){
        player.score = 0;
        player.display.textContent = '0';
        player.display.classList.remove('has-text-success','has-text-danger');
        player.button.disabled=false;
    }
    // p1.score = 0;
    // p2.scorecore = 0;
    // p1.display.textContent = '0';
    // p2.display.textContent = '0';
    // p1.display.classList.remove('has-text-success','has-text-danger');
    // p2.display.classList.remove('has-text-success','has-text-danger');
    // p1.button.disabled=false;
    // p2.button.disabled=false;
}











































































































// const p1 = {
//     score: 0,
//     button: document.querySelector('#p1Button'),
//     display: document.querySelector('#p1Display')
// }
// const p2 = {
//     score: 0,
//     button: document.querySelector('#p2Button'),
//     display: document.querySelector('#p2Display')
// }

// const resetButton = document.querySelector('#reset');
// const winningScoreSelect = document.querySelector('#playto');
// let winningScore = 3;
// let isGameOver = false;

// function updateScores(player, opponent) {
//     if (!isGameOver) {
//         player.score += 1;
//         if (player.score === winningScore) {
//             isGameOver = true;
//             player.display.classList.add('has-text-success');
//             opponent.display.classList.add('has-text-danger');
//             player.button.disabled = true;
//             opponent.button.disabled = true;
//         }
//         player.display.textContent = player.score;
//     }
// }


// p1.button.addEventListener('click', function () {
//     updateScores(p1, p2)
// })
// p2.button.addEventListener('click', function () {
//     updateScores(p2, p1)
// })


// winningScoreSelect.addEventListener('change', function () {
//     winningScore = parseInt(this.value);
//     reset();
// })

// resetButton.addEventListener('click', reset)

// function reset() {
//     isGameOver = false;
//     for (let p of [p1, p2]) {
//         p.score = 0;
//         p.display.textContent = 0;
//         p.display.classList.remove('has-text-success', 'has-text-danger');
//         p.button.disabled = false;
//     }
// }
