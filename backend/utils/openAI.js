import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const pickModel = (preferred) => {
  if (preferred) return preferred;
  return "gpt-4o-mini";
};

export { openai, pickModel };
