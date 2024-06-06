import OpenAI from "openai";
import dotenv from "dotenv";
import chalk from "chalk";
import readlineSync from "readline-sync";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

console.clear();




console.log(
    chalk.blueBright(
        
        
        
        
        
        
        
        `ENCOM OS-12 LOADED                           
  
                                                                 `)
  );
console.log(
  chalk.blueBright(`           
██     ██ ███████ ██       ██████  ██████  ███    ███ ███████     ███████ ██      ██    ██ ███    ██ ███    ██ 
██     ██ ██      ██      ██      ██    ██ ████  ████ ██          ██      ██       ██  ██  ████   ██ ████   ██ 
██  █  ██ █████   ██      ██      ██    ██ ██ ████ ██ █████       █████   ██        ████   ██ ██  ██ ██ ██  ██ 
██ ███ ██ ██      ██      ██      ██    ██ ██  ██  ██ ██          ██      ██         ██    ██  ██ ██ ██  ██ ██ 
 ███ ███  ███████ ███████  ██████  ██████  ██      ██ ███████     ██      ███████    ██    ██   ████ ██   ████       
 
 
 
 
 
 `)
);

const messages = [];

while (true) {
  const userContent = readlineSync.question(chalk.blueBright("User: "));

  if (userContent.toLowerCase() === "exit") {
    console.log(chalk.red("Assistant:") + " Goodbye!");
    break;
  }

  const userMessage = { role: "user", content: userContent };
  messages.push(userMessage);

  const aiResponse = await openai.chat.completions.create({
    messages: messages,
    model: "GPT-4o",
  });

  const aiMessage = aiResponse.choices[0].message;
  messages.push(aiMessage);

  console.log(chalk.red("Assistant: ") + aiMessage.content);
}