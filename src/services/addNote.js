export default async function addNote(data) {
    try {
        const response = await fetch("http://localhost:5000/notes/add", {
            method: "PUT",
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