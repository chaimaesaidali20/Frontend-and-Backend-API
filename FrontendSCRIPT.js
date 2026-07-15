async function sendMessage() {
    const input = document.getElementById("userInput");
    const responseBox = document.getElementById("response");

    if (!input.value.trim()) {
        responseBox.innerText = "Veuillez entrer un message.";
        return;
    }

    const jsonData = {
        userMessage: input.value.trim(),
        timestamp: new Date().toISOString()
    };

    try {
        const response = await fetch("http://localhost:3000/api/message", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(jsonData)
        });

        if (!response.ok) {
            throw new Error("Erreur serveur");
        }

        const data = await response.json();
        responseBox.innerText = data.reply;

    } catch (error) {
        responseBox.innerText = "Erreur de communication avec le serveur.";
        console.error(error);
    }
}

