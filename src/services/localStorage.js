export function setLocalStorage(username, password) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
}

export function removeLocalStorage() {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
}