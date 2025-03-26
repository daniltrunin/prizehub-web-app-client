export default async function registerRequest(data) {
    try {
        const response = await fetch("http://localhost:5000/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        return result
    } catch (error) {
        console.error("Ошибка:", error);
    }
}