// let data = [];

// const API = "http://localhost:3001/todos";

// function myTodosAdd() {
//     const todoText = document.querySelector("#todos").value.trim();

//     if (!todoText) return;

//     const newTodo = {
//         text: todoText,
//         isEdit: false,
//         isComplete: false
//     };

//     fetch(API, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(newTodo),
//     })
//     .then(fetchTodoDB)
//     .finally(() => {
//         document.querySelector("#todos").value = "";
//     });
// }

// function fetchTodoDB() {
//     fetch(API)
//         .then(res => res.json())
//         .then(res => {
//             data = res;
//             showTodos(res);
//         })
//         .catch(err => console.log(err));
// }

// function showTodos(list) {
//     const div = document.querySelector("#dataInfo");
//     div.innerHTML = "";

//     list.forEach(item => {
//         div.innerHTML += `
//             <div>
//                 <strong>ID: ${item.id}</strong> &nbsp;

//                 <input type="checkbox" ${item.isComplete ? "checked" : ""} 
//                     onclick="toggleComplete(${item.id}, ${item.isComplete})">

//                 ${
//                     item.isEdit
//                         ? `<input id="edit_${item.id}" value="${item.text}" />`
//                         : `<span>${item.text}</span>`
//                 }

//                 ${
//                     item.isEdit
//                         ? `<button onclick="updateTodo(${item.id})">Confirm</button>`
//                         : `<button onclick="editTodo(${item.id})">Edit</button>`
//                 }

//                 <button onclick="deleteTodo(${item.id})">Delete</button>
//             </div>
//         `;
//     });
// }

// function editTodo(id) {
//     fetch(`${API}/${id}`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ isEdit: true }),
//     })
//     .then(fetchTodoDB);
// }

// function updateTodo(id) {
//     const updatedText = document.querySelector(`#edit_${id}`).value;

//     fetch(`${API}/${id}`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ text: updatedText, isEdit: false }),
//     })
//     .then(fetchTodoDB);
// }

// function deleteTodo(id) {
//     fetch(`${API}/${id}`, {
//         method: "DELETE",
//     })
//     .then(fetchTodoDB);
// }

// function toggleComplete(id, currentStatus) {
//     fetch(`${API}/${id}`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ isComplete: !currentStatus }),
//     })
//     .then(fetchTodoDB);
// }


let data = [];

const API = 'http://localhost:3001/todos';

function myTodosAdd() {
    const todoText = document.querySelector('#todos').value;

    if (todoText.trim() == '') return;

    let newTodos = {
        id: data.length + 1 + '',
        text: todoText,
        isEdit: false,
        isComplete: false,
    };

    fetch(API, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(newTodos),
    })
    .then(() => fetchTodoDB())
    .catch((err) => console.log(err));
}

function fetchTodoDB() {
    fetch(API)
        .then((res) => res.json())
        .then((res) => {
            data = [...res];
            UIrender();
        })
        .catch((err) => console.log(err));
}

function UIrender() {
    const mainContainer = document.querySelector('#dataInfo');
    mainContainer.innerHTML = ""; 

    if (data.length == 0) {
        mainContainer.append("No Data");
        return;
    }

    data.map((el) => {
        const todoDiv = document.createElement('div');
        todoDiv.className = 'myTodo_Div';

        const headingText = document.createElement('h2');
        headingText.innerText = el.text;

        const statusTodod = document.createElement('h3');
        statusTodod.innerText = el.isEdit ? 'true' : 'false';

        const editBtn = document.createElement('button');
        editBtn.innerText = 'Edit';

        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete';

       
        editBtn.addEventListener('click', async () => {
            await fetch(`${API}/${el.id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ isEdit: !el.isEdit }),
            });
            fetchTodoDB();
        });

      
        deleteBtn.addEventListener('click', async () => {
            await fetch(`${API}/${el.id}`, {
                method: 'DELETE',
            });
            fetchTodoDB();
        });

        todoDiv.append(headingText, statusTodod, editBtn, deleteBtn);
        mainContainer.append(todoDiv);
    });
}
