export default function setLocalStorage(username, password) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
}