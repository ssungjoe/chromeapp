const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

function handleLoginForm(event){
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(HIDDEN_CLASS);
    paintGreeting(username);
}

function paintGreeting(username) {
    greeting.innerText = `Hello ${username}!`;
    greeting.classList.remove(HIDDEN_CLASS);
}
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername == null) {
    //show the form
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit", handleLoginForm);
} else {
    //show the greeting
    paintGreeting(savedUsername);
}