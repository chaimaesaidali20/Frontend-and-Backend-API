const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/api/message", (req, res) => {
try
{
    const { userMessage, timestamp } = req.body;

    if (!userMessage || typeof userMessage !== "string")
    {
        return res.status(400).json({ error: "Le champ 'userMessage' est invalide." });
        }

        const reply = `Message reçu: "${userMessage}" à ${timestamp}`;
res.json({ reply });

    } catch (error) {
    console.error("Erreur interne:", error);
    res.status(500).json({ error: "Erreur interne du serveur." });
}
});

app.listen(3000, () => {
    console.log("Serveur lancé sur http://localhost:3000");
});
