// const form = document.querySelector('#shelter');
// const input = document.querySelector('#catName');
// input.setAttribute('required','');
// const list = document.querySelector("#cats");
// form.addEventListener('submit', function(e){
//     // console.dir(e);
//     e.preventDefault();
//     // console.log(input.value);
//     const catName = input.value;
//     const newLI = document.createElement("li");
//     newLI.innerText = catName;
//     // console.log(newLI);
//     list.append(newLI);
//     input.value="";
// });

const tweetForm = document.querySelector('#tweetForm');
const tweets = document.querySelector('#tweets');
tweetForm.addEventListener('submit',function(e){
    e.preventDefault();
    // const userNameInput = document.querySelectorAll('input')[0];
    // const tweetInput = document.querySelectorAll('input')[1];
    // console.log(tweetForm.elements.userName.value);
    // console.log(tweetForm.elements.tweet.value);
    const userNameInput = tweetForm.elements.userName;
    const tweetInput = tweetForm.elements.tweet;

    addTweet(userNameInput.value, tweetInput.value);

    userNameInput.value='';
    tweetInput.value='';
});

const addTweet = (userName, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    
    bTag.append(userName);
    newTweet.append(bTag);
    newTweet.append(`-${tweet}`);
    tweets.append(newTweet);
};
