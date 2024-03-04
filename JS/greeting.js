const greetForm = document.querySelector(".greet-form");
const input = greetForm.querySelector("input");
const button = greetForm.querySelector("button");
const welcome = document.querySelector(".greet-welcome");
const displayName = welcome.querySelector("span");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_STRING = "username";

const storageUsername = localStorage.getItem(USERNAME_STRING);

const handleLoginSubmit = (e) => {
  e.preventDefault();
  const username = input.value;
  localStorage.setItem(USERNAME_STRING, username);
  greetForm.classList.add(HIDDEN_CLASSNAME);
  showWelcomeMessage(username);
};

const showWelcomeMessage = (username) => {
  welcome.classList.remove(HIDDEN_CLASSNAME);
  displayName.innerText = `Hello ${username}!`;
};

greetForm.addEventListener("submit", handleLoginSubmit);

if (storageUsername) {
  greetForm.classList.add(HIDDEN_CLASSNAME);
  showWelcomeMessage(storageUsername);
}
