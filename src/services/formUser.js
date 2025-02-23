export default function formUser(username, password) {
    const data = {
        username: username.trim().toLowerCase(),
        password: password.trim().toLowerCase(),
    };
    return data
}