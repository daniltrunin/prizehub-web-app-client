export function setLocalStorage(username, password) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
}

export function removeLocalStorage() {
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("password");
}