export function setSessionStorage(username, password) {
    sessionStorage.setItem("username", username);
    sessionStorage.setItem("password", password);
}

export function removeSessionStorage() {
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("password");
}