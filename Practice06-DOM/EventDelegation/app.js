// const lis = document.querySelectorAll('li');
// for(let li of lis){
//     li.addEventListener('click', function(){
//         li.remove();
//     });
// }
const tweetForm = document.querySelector('#tweetForm');
const tweets = document.querySelector('#tweets');
tweetForm.addEventListener('submit',function(e){
    e.preventDefault();
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
tweets.addEventListener('click',function(e){
    // console.log('click on ul');
    // console.log(e);
    // e.target.remove();
    e.target.nodeName === 'LI' && e.target.remove();
});