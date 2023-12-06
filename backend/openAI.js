const express = require('express');
require("dotenv").config();
const {OpenAI} = require('openai');

const app = express();

app.use(express.json());

const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_KEY,
});

app.post("/create-resume", async (req, res) => {
    try{
        const response = await openai.chat.completions.create({
            messages: [{ role: "system", content: "You are a helpful assistant." }],
            model: "ada",
          });
        return res.status(200).json({
            success: true,
        });
    } catch (error){
        return res.status(200).json({
            success:false,
            error: error.response ? error.response.data : error.message
        })
    }
});

app.get("/create-resume-test", (req,res) => 
{
    res.json({
        messages : "testing"
    })
})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server listening on port ${port}`))