const Groq = require("groq-sdk");

const { onRequest } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");

const groqApiKey = defineSecret("GROQ_API_KEY");

exports.getExplanation = onRequest(
    { cors: true, secrets: [groqApiKey] },
    async (req, res) => {
        const { question, answer } = req.body;

        if (!question || !answer) {
            return res.status(400).json({ error: "Missing question or answer" });
        }

        try {
            const groq = new Groq({ apiKey: groqApiKey.value() });

            const messages = [
                { role: "user", content: `Question: ${question}` },
                { role: "user", content: `Answer: ${answer}` },
                { role: "user", content: "Please provide a simple ELI5 explanation." }
            ];

            console.log("Sending messages to Groq:", messages);

            const chatCompletion = await groq.chat.completions.create({
                messages,
                model: "llama3-8b-8192",
            });

            const explanation = chatCompletion.choices[0]?.message?.content || "No explanation available.";
            res.json({ explanation });
        } catch (error) {
            console.error("Error generating explanation:", error);
            res.status(500).json({ error: "Error generating explanation" });
        }
    }
);