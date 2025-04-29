import serverUrl from './server';

export default async function addBotToken(username, token) {
    try {
        const response = await fetch(`${serverUrl}/bot/addtoken`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                token: token
            })
        })
        return response.json();
    } catch (e) {
        console.error(e);
    }
}