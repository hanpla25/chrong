// DOM
const todoButton = document.querySelector(".todo-button");
const ballon = document.querySelector(".todo-box-ballon");
const todoForm = document.querySelector(".todoform");
const todoInput = document.querySelector(".todo-input");
const todoUl = document.querySelector(".todo-box-ul");

// 할 일 목록 가져오기
let todos = JSON.parse(localStorage.getItem("todos")) || [];

// 할 일 목록 렌더링 함수
const renderTodos = () => {
  if (!todoUl) return;
  todoUl.innerHTML = todos.map(renderTodoItem).join("");
  addEventListenersToTodoItems();
};

// 할 일 아이템 렌더링 함수
const renderTodoItem = (item, index) => `
  <li>
    <div class="ul-left">
      <span class="checkbtn ${item.isDone ? "checked" : ""}">
        ${item.isDone ? "✓" : ""}
      </span>
      <span class="${item.isDone ? "todo-text-done" : "todo-text"}">
        ${item.text}
      </span>
    </div>
    <div class="ul-right">
      <button class="deleteBtn" data-index="${index}">X</button>
    </div>
  </li>
`;

// 할 일 아이템에 이벤트 리스너 추가 함수
const addEventListenersToTodoItems = () => {
  document.querySelectorAll(".checkbtn").forEach((button, index) => {
    button.addEventListener("click", () => {
      toggleTodoStatus(index);
      renderTodos();
    });
  });

  // 삭제버튼
  document.querySelectorAll(".deleteBtn").forEach((button) => {
    button.addEventListener("click", (e) => {
      deleteTodoItem(e.target.dataset.index);
      renderTodos();
    });
  });
};

// 할 일 추가 함수
const addNewTodo = () => {
  const newTodo = {
    text: todoInput.value,
    isDone: false,
  };
  todos.push(newTodo);
  updateLocalStorage();
  todoInput.value = "";
  renderTodos();
};

// 할 일 상태 전환 함수
const toggleTodoStatus = (index) => {
  todos[index].isDone = !todos[index].isDone;
  updateLocalStorage();
};

// 할 일 삭제 함수
const deleteTodoItem = (index) => {
  todos.splice(index, 1);
  updateLocalStorage();
};

// 로컬 스토리지 업데이트 함수
const updateLocalStorage = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

// 새로운 할 일 추가 이벤트 리스너
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addNewTodo();
});

// 할 일 버튼 클릭 이벤트 리스너
todoButton.addEventListener("click", () => {
  ballon.classList.toggle("hidden");
});

// 초기 할 일 목록 렌더링
renderTodos();
