const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { OpenAI } = require("openai");
const axios = require("axios");

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
});

let postDataResult = null;

async function postData(text) {
  const data = [
    {
      message: text,
    },
  ];

  postDataResult = data;
}
app.post("/create-resume", async (req, res) => {
  const resume = req.body;
  try {
    const response = await openai.chat.completions.create({
      messages: [{ role: "system", content: "You are a helpful assistant." }],
      model: "ada",
    });
    await postData("success");
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    await postData(resume);
    return res.status(200).json({
      success: resume,
      error: error.response ? error.response.data : error.message,
    });
  }
});

app.get("/create-resume-test", (req, res) => {
  res.status(200).json({
    message: postDataResult[0].message,
  });
  console.log(postDataResult[0].message);
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server listening on port ${port}`));
