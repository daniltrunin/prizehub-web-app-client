async function logoutRequest(data) {
    try {
        const response = await fetch("http://localhost:5000/auth/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        return response
    } catch (error) {
        console.error(error)
    }
}

export default logoutRequest;