export default async function getNotes(username) {
    try {
        const response = await fetch(`http://localhost:5000/notes/get?username=${username}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });

        const result = await response.json();
        console.log("Ответ сервера:", result);
        return result
    } catch (error) {
        console.error(error)
    }
}