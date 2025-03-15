export default async function loginRequest(data) {
    try {
        const response = await fetch("http://localhost:5000/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        console.log("Ответ сервера:", result);
    } catch (error) {
        console.error("Ошибка:", error);
    }
    return data
}