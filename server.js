// server.js
const express = require('express');
const { OpenAI } = require("openai");
const app = express();
const port = 3000;
const openai = new OpenAI({ apiKey: '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'}); // Replace 'your-api-key' with your actual API key


app.use(express.static('public'));

app.get('/get', async (req, res) => {
  console.log(";;;;;;;;;;");
  const params = req.query;
  let toSend = " כתוב לי " +"3 דוגמאות של"+ params.category + " באווירה " + params.atmosphere + " ל " + params.event;
  if (params.age !== '')
    toSend += " לגיל " + params.age;

  try {
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: toSend }],
        model: 'gpt-3.5-turbo',
    });

    console.log(chatCompletion.choices[0].message.content);
    res.send(chatCompletion.choices[0].message.content);
  } 
  
  catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

