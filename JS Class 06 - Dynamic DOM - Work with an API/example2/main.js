const ulListRef = document.querySelector(".todo-list");

function createATodoRef(text, completed) {
  const liRef = document.createElement("li");
  liRef.innerHTML = `
        <input type="checkbox" ${completed ? "checked" : ""} />
        <span>${text}<span/>
    `;
  return liRef;
}

function renderLiList(todoList) {
  todoList.forEach((item) => {
    console.log(item.todo);
    const newLi = createATodoRef(item.todo);
    ulListRef.appendChild(newLi);
  });
}

function fetchTodos() {
  fetch("https://dummyjson.com/todos")
    .then((res) => res.json())
    .then((data) => renderLiList(data.todos))
    .catch((e) => console.log(e));
}

fetchTodos();