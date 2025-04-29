import serverUrl from './server';

export default async function getNotes(data) {
    try {
        const response = await fetch(`${serverUrl}/notes/get`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        return result
    } catch (error) {
        throw Error(error)
    }
}