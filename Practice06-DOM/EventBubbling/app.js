const p = document.querySelector('p');
const btn = document.querySelector('#btn');
p.addEventListener('click',function(){
    alert('Paragraph Clicked!');
});
btn.addEventListener('click', function(e){
    e.stopPropagation();
    alert('Button Clicked!');
});