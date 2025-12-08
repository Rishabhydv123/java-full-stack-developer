let data = [];

const API = "http://localhost:3001/todos";

function myTodosAdd() {
    const todoText = document.querySelector("#todos").value.trim();
    if (!todoText) return;

    // Auto-increment numeric ID
    const newId = data.length ? Math.max(...data.map(t => Number(t.id))) + 1 : 1;

    const newTodo = {
        id: newId,
        text: todoText,
        isEdit: false,
        isComplete: false
    };

    fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTodo),
    })
    .then(fetchTodoDB)
    .finally(() => {
        document.querySelector("#todos").value = "";
    });
}

function fetchTodoDB() {
    fetch(API)
        .then(res => res.json())
        .then(res => {
            data = res;
            showTodos(res);
        })
        .catch(err => console.log(err));
}

function showTodos(list) {
    const div = document.querySelector("#dataInfo");
    div.innerHTML = "";

    list.forEach(item => {
        div.innerHTML += `
            <div>
                <strong>ID: ${item.id}</strong> &nbsp;

                <input type="checkbox" ${item.isComplete ? "checked" : ""} 
                    onclick="toggleComplete('${item.id}', ${item.isComplete})">

                ${
                    item.isEdit
                        ? `<input id="edit_${item.id}" value="${item.text}" />`
                        : `<span>${item.text}</span>`
                }

                ${
                    item.isEdit
                        ? `<button onclick="updateTodo('${item.id}')">Confirm</button>`
                        : `<button onclick="editTodo('${item.id}')">Edit</button>`
                }

                <button onclick="deleteTodo('${item.id}')">Delete</button>
            </div>
        `;
    });
}

function editTodo(id) {
    fetch(`${API}/${String(id)}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isEdit: true }),
    })
    .then(fetchTodoDB);
}

function updateTodo(id) {
    const updatedText = document.querySelector(`#edit_${id}`).value;

    fetch(`${API}/${String(id)}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: updatedText, isEdit: false }),
    })
    .then(fetchTodoDB);
}

function deleteTodo(id) {
    fetch(`${API}/${String(id)}`, {
        method: "DELETE",
    })
    .then(fetchTodoDB);
}

function toggleComplete(id, currentStatus) {
    fetch(`${API}/${String(id)}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isComplete: !currentStatus }),
    })
    .then(fetchTodoDB);
}
