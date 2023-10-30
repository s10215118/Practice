// setTimeout(()=>{
//     document.body.style.backgroundColor = 'red';
//     setTimeout(()=>{
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(()=>{
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(()=>{
//                 document.body.style.backgroundColor = 'green';
//                 setTimeout(()=>{
//                     document.body.style.backgroundColor = 'blue';
//                     setTimeout(()=>{
//                         document.body.style.backgroundColor = 'purple';
//                     },1000);
//                 },1000);
//             },1000);
//         },1000);
//     },1000);
// },1000);

const delayedColorChange = (newColor, delay, doNext) =>{
    setTimeout(()=>{
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    },delay);
}
delayedColorChange('red',1000, ()=> {
    delayedColorChange('orange', 1000, ()=>{
        delayedColorChange('yellow', 1000, ()=>{
            delayedColorChange('green', 1000, ()=>{
                delayedColorChange('teal', 1000, ()=>{
                    delayedColorChange('purple', 1000, ()=>{
                        
                    });
                });
            });
        });
    });
});