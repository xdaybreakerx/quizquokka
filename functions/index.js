const Groq = require("groq-sdk");

const { onRequest } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");

const groqApiKey = defineSecret("GROQ_API_KEY");

exports.getExplanation = onRequest(
    { cors: true, secrets: [groqApiKey] },
    
    /**
     * A function that handles an asynchronous request to generate an ELI5 explanation using Groq API. It expects 'req' and 'res' parameters representing the request and response objects. The function extracts 'question' and 'answer' from the request body and checks if either is missing. If 'question' or 'answer' is missing, it returns a 400 error response with a message indicating the missing parameter. The function then creates a Groq instance with an API key, prepares messages for the Groq chat, and sends the messages to Groq. It captures the generated explanation from Groq and sends it as a JSON response. If there is an error during the process, it logs the error and sends a 500 error response with a message indicating the error.
     * @author Xander
     *
     * @async
     * @param {} req The request object containing the question and answer in the body
     * @param {*} res The response object
     * @returns {unknown} Asynchronous function that generates an explanation based on the provided question and answer in the request body. If the question or answer is missing, it returns a 400 status with an error message. It initializes a Groq client with an API key, sends messages to Groq with the question and answer, and creates a chat completion using the llama3-8b-8192 model. Finally, it returns the generated explanation or a default message if none is available. Handles errors and returns a 500 status with an error message if an exception occurs.
     */
    
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