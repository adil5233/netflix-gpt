import OpenAI from "openai";
import { OPENAI_KEY } from "./constants";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: OPENAI_KEY,
  dangerouslyAllowBrowser: true,
  defaultHeaders: {
    "HTTP-Referer": "https://netflix-gpt-black-omega.vercel.app/", // Optional
    "X-Title": "Netflix-GPT", // Optional
  },
});

export default openai;
