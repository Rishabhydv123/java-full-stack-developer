let data = [];
const API = `http://localhost:3001/todos`;

function myTodosAdd() {
    const todoText = document.querySelector('#todos').value.trim();
    console.log(todoText);

    if (todoText === '') return;

    let newTodos = {
        id: data.length + 1,
        text: todoText,
        isEdit: false,
        isCompleted: false,
    };

    fetch(API, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(newTodos),
    })
        .then(res => res.json())
        .then(() => {
            alert('Data has been sent');
            fetchTodoDB(); 
        })
        .catch(err => console.error("Error from addTodo:", err));
}

function fetchTodoDB() {
    fetch(API)
        .then(res => res.json())
        .then(res => {
            data = [...res];
            console.log('Fetched data:', data);
            showTodos(); 
        })
        .catch(err => console.error("Fetch error:", err));
}
