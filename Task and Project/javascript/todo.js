let store = JSON.parse(localStorage.getItem("todos")) || [];

const saveData = () => {
    localStorage.setItem("todos", JSON.stringify(store));
};

const addTodo = () => {
    const input = document.getElementById("todo");
    const text = input.value.trim();

    if (!text) return alert("Please enter a task!");

    store.push({
        id: Date.now(),
        textTodo: text,
        isCompleted: false,
        groupType: "unpinned",
        groupId: Date.now() // unique but NOT used for numbering
    });

    saveData();
    renderUI();
    input.value = "";
};

const renderUI = () => {
    const pinnedDiv = document.getElementById("pinned_list");
    const unpinnedDiv = document.getElementById("todo_list");

    pinnedDiv.innerHTML = "";
    unpinnedDiv.innerHTML = "";

    const pinnedGroups = {};
    const unpinnedGroups = {};

    store.forEach(todo => {
        const target =
            todo.groupType === "pinned" ? pinnedGroups : unpinnedGroups;

        target[todo.groupId] = target[todo.groupId] || [];
        target[todo.groupId].push(todo);
    });

    createBoxes(pinnedGroups, pinnedDiv, "Pinned");
    createBoxes(unpinnedGroups, unpinnedDiv, "Unpinned");
};

const createBoxes = (groups, parent, title) => {
    let boxNumber = 1; 

    Object.values(groups).forEach(groupTodos => {
        const box = document.createElement("div");
        box.className = "group-box";

        const heading = document.createElement("h3");
        heading.innerText = `${title} ${boxNumber++}`;
        box.appendChild(heading);

        groupTodos.forEach(todo => {
            const item = document.createElement("div");
            item.className = "todo-item";

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = todo.isCompleted;

            checkbox.onchange = () => {
                todo.isCompleted = checkbox.checked;
                saveData();
                renderUI();
            };

            const text = document.createElement("span");
            text.innerText = todo.textTodo;
            if (todo.isCompleted) {
                text.style.textDecoration = "line-through";
            }

            const pinBtn = document.createElement("button");
            pinBtn.innerText =
                todo.groupType === "pinned" ? "Unpin" : "Pin";

            pinBtn.onclick = () => {
                todo.groupType =
                    todo.groupType === "pinned" ? "unpinned" : "pinned";

                todo.groupId = Date.now(); 
                saveData();
                renderUI();
            };

            const editBtn = document.createElement("button");
            editBtn.innerText = "Edit";

            editBtn.onclick = () => {
                const updated = prompt("Edit task", todo.textTodo);
                if (updated && updated.trim()) {
                    todo.textTodo = updated.trim();
                    saveData();
                    renderUI();
                }
            };

            const deleteBtn = document.createElement("button");
            deleteBtn.innerText = "Delete";

            deleteBtn.onclick = () => {
                store = store.filter(item => item.id !== todo.id);
                saveData();
                renderUI();
            };

            item.append(
                checkbox,
                text,
                pinBtn,
                editBtn,
                deleteBtn
            );

            box.appendChild(item);
        });

        parent.appendChild(box);
    });
};

document.getElementById("btn").addEventListener("click", addTodo);

renderUI();
