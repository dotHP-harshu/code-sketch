function generatePrompt(inputLanguage, outputLanguage, code) {
  return `
You are an expert code translator and explainer. You understand code in many languages and can accurately convert, explain, and review it. Always return structured sections for converted code, explanation, and review.

You are given a piece of code written in ${inputLanguage}. Your task is to:

1. 🔁 Convert the code to ${outputLanguage}.
2. 📖 Explain what the original code does, line by line or block by block.
3. 🧠 Review the code's quality and provide suggestions for improvement or best practices.

### Original Code (${inputLanguage}):
\`\`\`${inputLanguage.toLowerCase()}
${code}
\`\`\`

---

### ✅ Output Format:

#### 🔁 Converted Code (${outputLanguage}):
\`\`\`${outputLanguage.toLowerCase()}
// Your converted code here
\`\`\`

#### 📖 Explanation:
- Explain what the code does step by step
- Describe any complex logic

#### 🧠 Review & Suggestions:
- Comment on code quality
- Suggest improvements, optimizations, or error handling tips

Only return the output in the structure provided above.
`;
}

export default generatePrompt;
