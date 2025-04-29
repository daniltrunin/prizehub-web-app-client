import serverUrl from './server';

async function logoutRequest(data) {
    try {
        const response = await fetch(`${serverUrl}/auth/logout`, {
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