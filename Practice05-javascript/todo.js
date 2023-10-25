const todolist=['Collect Chicken Eggs', 'Clean Litter Box'];
let command = prompt("What would you like to do?");
while(command.toLowerCase() !== 'quit' && command.toLowerCase() !== 'q'){
    if(command.toLowerCase() === 'list'){
        console.log('********************');
        for(let i =0; i < todolist.length; i++){
            console.log(`${i}: ${todolist[i]}`);
        }
        console.log('********************');
    }else if(command.toLowerCase() === 'new'){
        const newTodo = prompt('Ok, what is the new todo?');
        todolist.push(newTodo);
        console.log(`${newTodo} added to the list!`);
    }else if(command.toLowerCase() === 'delete'){
        const index = parseInt(prompt('Ok, enter an index to delete:'));
        if(!Number.isNaN(index) && index >= 0 && index < todolist.length){
            const deleted = todolist.splice(index,1);
            console.log(`Ok, deleted ${deleted[0]}`);
        }else{
            console.log('Unknwon index');
        }
    }

    command = prompt("What would you like to do?");
}
console.log('Ok, you quit the App.');