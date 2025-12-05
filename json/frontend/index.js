let data;
 const API = `http://localhost:3001/todos`;

 function myTodosAdd(){
    const todotext = document.querySelector('#todos').value;
    console.log(todoText);

    console.log(data);

    if (todoText.trim() === '') return;

    let newTodos = {
        id: +data.length + 1,
        text: todoText,
        isEdit: false,
        isCompleted: false,
    };

    fetch(API,{
        method: 'post',
        headers:{
            'content-type': 'application/json',
        },
        body:JSON.stringify(newTodos),
    })
    


    
    
 }