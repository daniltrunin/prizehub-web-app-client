export default async function addNote(data) {
    try {
        const response = await fetch("http://localhost:5000/notes/delete", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        return response
    } catch (error) {
        console.error(`Ошибка удаления заметки: ${error}`);
    }
    return data
}