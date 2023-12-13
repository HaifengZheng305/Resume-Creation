const express = require('express');
require("dotenv").config();
const {OpenAI} = require('openai');
const axios = require("axios");

const app = express();

app.use(express.json());

const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_KEY,
});

let postDataResult = null;

async function postData(text)
{
    console.log("testing")

    const data = [
        {
            message: text
        }
    ]

    postDataResult = data;
}
app.post("/create-resume", async (req, res) => {
    try{
        const response = await openai.chat.completions.create({
            messages: [{ role: "system", content: "You are a helpful assistant." }],
            model: "ada",
          });
        await postData("success")
        return res.status(200).json({
            success: true,
        });
    } catch (error){
        await postData("fail")
        return res.status(200).json({
            success: postDataResult[0].message,
            error: error.response ? error.response.data : error.message
        })
    }
});

app.get("/create-resume-test", (req,res) => 
{
    res.status(200).json({
        message: postDataResult[0].message,
    });
})

app.post("/send_test", async(req,res) => {

    const message = req.body;
    console.log(message)

    return res.status(200).json();
})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server listening on port ${port}`))