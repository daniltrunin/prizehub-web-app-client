export default async function getUser(user) {
    try {
        const response = await fetch(`http://localhost:5000/users/${user}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Ошибка:", error);
        return null;
    }
}
