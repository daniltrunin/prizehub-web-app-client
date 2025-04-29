import serverUrl from './server';

export default async function getUser(user) {
    try {
        const response = await fetch(`${serverUrl}/users/${user}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        });

        if (!response.ok) {
            throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Ошибка:", error);
        return null
    }
}
