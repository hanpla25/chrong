// DOM
const greetForm = document.querySelector(".greet-form");
const input = greetForm.querySelector("input");
const button = greetForm.querySelector("button");
const welcome = document.querySelector(".greet-welcome");
const displayName = welcome.querySelector("span");
const todoBox = document.querySelector(".todo-box");
const logoutBtn = document.querySelector(".logoutBtn");

// 변수
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_STRING = "username";
const storageUsername = localStorage.getItem(USERNAME_STRING);

// 함수
const showWelcomeMessage = (username) => {
  showElement(welcome);
  displayName.innerText = `Hello ${username}!`;
};

const showElement = (element) => {
  element.classList.remove(HIDDEN_CLASSNAME);
};

const hideElement = (element) => {
  element.classList.add(HIDDEN_CLASSNAME);
};

// 이벤트리스너
greetForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = input.value;
  localStorage.setItem(USERNAME_STRING, username);
  hideElement(greetForm);
  showWelcomeMessage(username);
  showElement(todoBox);
  showElement(logoutBtn);
});

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("username");
  window.location.reload();
});

if (storageUsername) {
  hideElement(greetForm);
  showWelcomeMessage(storageUsername);
  showElement(todoBox);
  showElement(logoutBtn);
}
