let store = [];

const addTodo = () => {
    const valueText = document.getElementById('todo').value;
    let todoDetails = {
        id: Date.now(),
        textTodo: valueText,
        isEdit: false,
        isCompleted: false,
    };
    store.push(todoDetails);
    renderonUI(store);
};

const renderonUI = (data) => {
    const mainDiv = document.getElementById('todo_list');
    mainDiv.innerHTML = '';

    data.map((el) => {
        const CheckBok = document.createElement('checkbox');
        const text = document.createElement('h3');

        const childDiv = document.createElement('div');

         btn_edit.innerText ='edit';
         btn_delete.innerText = 'delete';
        
        text.innerText = el.textTodo;


        // Edit Functionality
        

        // Delete Functionality

        btn_delete.addEventListener('click', () => {
            let deletStore = data.filter((dl) => dl.id ==el.id);
            store = deletStore;
            renderonUI(store);

        });

        childDiv.append(CheckBok,text,btn_edit,btn_delete);
        mainDiv.append(childDiv);
    });
};