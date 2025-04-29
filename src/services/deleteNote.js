import serverUrl from './server';

export default async function addNote(data) {
    try {
        const response = await fetch(`${serverUrl}/notes/delete`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        return response
    } catch (error) {
        throw Error(error)
    }
}