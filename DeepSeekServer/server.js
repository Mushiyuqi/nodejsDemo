const OpenAI = require("openai")

const openai = new OpenAI({
    baseURL: 'https://api.deepseek.com',
    apiKey: 'sk-35ca9bd4e6e340fd900baf9126b93e89'
});

async function main() {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "You are a helpful assistant." }],
        model: "deepseek-chat",
    });

    console.log(completion.choices[0].message.content);
}

main();