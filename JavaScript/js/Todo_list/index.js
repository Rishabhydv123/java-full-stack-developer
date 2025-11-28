let store = [];

const addTodo = () => {
    const valueText = document.getElementById('todo').value.trim();
    

    if (valueText === "") {
        alert("Please enter a task!");
        return;
    }

    let todoDetails = {
        id: Date.now(),
        textTodo: valueText,
        isEdit: false,
        isCompleted: false,
    };

    store.push(todoDetails);
    renderonUI(store);
    document.getElementById('todo').value = "";
};

const renderonUI = (data) => {
    const mainDiv = document.getElementById('todo_list');
    mainDiv.innerHTML = '';

    //  "Data not found"
    // if (data.length === 0) {
    //     const msg = document.createElement("p");
    //     msg.innerText = "Data not found";
    //     msg.style.color = "black";
    //     msg.style.textAlign = "center";
    //     msg.style.fontSize = "18px";
    //     mainDiv.append(msg);
    //     return;
    // }

    data.map((el) => {

        const childDiv = document.createElement('div');

        const CheckBox = document.createElement('input');
        CheckBox.type = "checkbox";
        CheckBox.checked = el.isCompleted;

        const text = document.createElement('h3');
        text.innerText = el.textTodo;

        const btn_edit = document.createElement('button');
        btn_edit.innerText = 'Edit';

        const btn_delete = document.createElement('button');
        btn_delete.innerText = 'Delete';

        btn_delete.addEventListener('click', () => {
            store = store.filter((item) => item.id !== el.id);
            renderonUI(store);
        });

        btn_edit.addEventListener('click', () => {

            const editInput = document.createElement('input');
            editInput.type = "text";
            editInput.value = el.textTodo;

            const btn_save = document.createElement('button');
            btn_save.innerText = "confirm";

            const btn_cancel = document.createElement('button');
            btn_cancel.innerText = "Cancel";

            childDiv.innerHTML = "";  
            childDiv.append(CheckBox, editInput, btn_save, btn_cancel, btn_delete);

            btn_save.addEventListener('click', () => {
                el.textTodo = editInput.value.trim();
                renderonUI(store);
            });

            btn_cancel.addEventListener('click', () => {
                renderonUI(store);
            });
        });

        childDiv.append(CheckBox, text, btn_edit, btn_delete);
        mainDiv.append(childDiv);
    });
};
