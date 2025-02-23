export default function setSessionStorage(username, password) {
    sessionStorage.setItem("username", username);
    sessionStorage.setItem("password", password);
}