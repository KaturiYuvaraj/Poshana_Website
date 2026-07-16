const API = "https://poshanawebsite-production.up.railway.app/api/insights";

export async function askAI(messages) {

    const response = await fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            messages
        })
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message);
    }

    return data.reply;
}
