let store = JSON.parse(localStorage.getItem("todos")) || [];

const saveToLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(store));
};

const addTodo = () => {
    const valueText = document.getElementById('todo').value.trim();

    if (valueText === "") {
        alert("Please enter a task!");
        return;
    }

    const todoDetails = {
        id: Date.now(),
        textTodo: valueText,
        isCompleted: false,
    };

    store.push(todoDetails);
    saveToLocalStorage();
    renderonUI(store);

    document.getElementById('todo').value = "";
};

const renderonUI = (data) => {
    const mainDiv = document.getElementById('todo_list');
    mainDiv.innerHTML = "";

    data.forEach((el) => {
        const childDiv = document.createElement('div');

        const CheckBox = document.createElement('input');
        CheckBox.type = "checkbox";
        CheckBox.checked = el.isCompleted;

        CheckBox.addEventListener('change', () => {
            el.isCompleted = CheckBox.checked;
            saveToLocalStorage();
        });

        const text = document.createElement('h3');
        text.innerText = el.textTodo;

        if (el.isCompleted) {
            text.style.textDecoration = "line-through";
        }

        const btn_edit = document.createElement('button');
        btn_edit.innerText = 'Edit';

        const btn_delete = document.createElement('button');
        btn_delete.innerText = 'Delete';

        btn_delete.addEventListener('click', () => {
            store = store.filter((item) => item.id !== el.id);
            saveToLocalStorage();
            renderonUI(store);
        });

        btn_edit.addEventListener('click', () => {
            const editInput = document.createElement('input');
            editInput.type = "text";
            editInput.value = el.textTodo;

            const btn_save = document.createElement('button');
            btn_save.innerText = "Confirm";

            const btn_cancel = document.createElement('button');
            btn_cancel.innerText = "Cancel";

            childDiv.innerHTML = "";
            childDiv.append(CheckBox, editInput, btn_save, btn_cancel, btn_delete);

            btn_save.addEventListener('click', () => {
                const updatedText = editInput.value.trim();
                if (updatedText !== "") {
                    el.textTodo = updatedText;
                    saveToLocalStorage();
                    renderonUI(store);
                }
            });

            btn_cancel.addEventListener('click', () => {
                renderonUI(store);
            });
        });

        childDiv.append(CheckBox, text, btn_edit, btn_delete);
        mainDiv.append(childDiv);
    });
};

document.getElementById('btn').addEventListener('click', addTodo);

renderonUI(store);
