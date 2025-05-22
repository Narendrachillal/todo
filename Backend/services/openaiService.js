import axios from "axios";

export const generateSummary = async (todos) => {
  const content = todos
    .map((todo, index) => `${index + 1}. ${todo.title}`)
    .join("\n");

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant that summarizes todo lists.",
          },
          {
            role: "user",
            content: `Summarize the following todos:\n${content}`,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("OpenRouter API response:", response.data);

    const summary = response.data?.choices?.[0]?.message?.content;

    if (!summary) {
      throw new Error("No summary content returned from OpenRouter API");
    }

    return summary;
  } catch (error) {
    console.error(
      "Error generating summary:",
      error.response?.data || error.message
    );
    throw new Error("Failed to generate summary from OpenRouter");
  }
};
