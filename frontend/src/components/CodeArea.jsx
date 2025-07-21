import React, { useContext, useState } from "react";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { LuLoaderCircle } from "react-icons/lu";
import Editor from "react-simple-code-editor";
import Prism, { languages } from "prismjs";
import "prismjs/themes/prism.css";

// Required base language for many others (Java, C++, etc.)
import "prismjs/components/prism-clike";
import "prismjs/components/prism-markup"; // for PHP
import "prismjs/components/prism-markup-templating";

// Common languages
// Core base for many languages
import "prismjs/components/prism-clike";

// Mainstream languages
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-java";
import "prismjs/components/prism-c"; // Required for C++
import "prismjs/components/prism-cpp"; // Depends on 'c'
import "prismjs/components/prism-csharp";
import "prismjs/components/prism-go";
import "prismjs/components/prism-rust";
import "prismjs/components/prism-php"; // Depends on 'markup'
import "prismjs/components/prism-ruby";
import "prismjs/components/prism-swift";
import "prismjs/components/prism-kotlin";
import generatePrompt from "../functions/generatePrompt";
import { ResponseContext } from "../context/ResponseContext";
import axios from "axios";

// Scripting & functional

const programmingLanguages = [
  {
    name: "JavaScript",
    languages: "javascript",
    comment: "// Write JavaScript code here",
  },
  {
    name: "TypeScript",
    languages: "typescript",
    comment: "// Write TypeScript code here",
  },
  { name: "Python", languages: "python", comment: "# Write Python code here" },
  { name: "Java", languages: "java", comment: "// Write Java code here" },
  { name: "C", languages: "c", comment: "// Write C code here" },
  { name: "C++", languages: "cpp", comment: "// Write C++ code here" },
  { name: "C#", languages: "csharp", comment: "// Write C# code here" },
  { name: "Go", languages: "go", comment: "// Write Go code here" },
  { name: "Rust", languages: "rust", comment: "// Write Rust code here" },
  { name: "PHP", languages: "php", comment: "// Write PHP code here" },
  { name: "Ruby", languages: "ruby", comment: "# Write Ruby code here" },
  { name: "Swift", languages: "swift", comment: "// Write Swift code here" },
  { name: "Kotlin", languages: "kotlin", comment: "// Write Kotlin code here" },
];

export default function SimpleHighlightEditor({ isLoading, setIsLoading }) {
  const { response, setResponse } = useContext(ResponseContext);
  const [language, setLanguage] = useState("python");
  const [outputLanguage, setOutputLanguage] = useState("javascript");

  const [code, setCode] = useState("# Write Python code here");

  const handleSend = async () => {
    setResponse("");
    setIsLoading(true);
    try {
      const prompt = generatePrompt(language, outputLanguage, code);
      const apiUrl = "http://localhost:3000/api/get-response/";
      const res = await axios.post(apiUrl, { prompt });
      console.log(res);
      setResponse(res.data);
    } catch (error) {
      setResponse(error.message);
    }
    setIsLoading(false);
  };

  const highlightCode = (code) => {
    return Prism.highlight(code, Prism.languages[language], language);
  };

  return (
    <div className="bg-zinc-900 text-white p-4  space-y-4 border-2 border-zinc-600">
      <div className="w-full flex justify-around items-center">
        {/* Language Selector */}
        <select
          value={language}
          onChange={(e) => {
            setLanguage(e.target.value);
            setCode(
              programmingLanguages.find(
                (lang) => lang.languages === e.target.value
              ).comment
            );
          }}
          className="bg-zinc-800 text-white p-2 rounded border border-zinc-600"
        >
          {programmingLanguages.map((language) => (
            <option key={language.name} value={language.languages}>
              {language.name}
            </option>
          ))}
        </select>
        <FaArrowRightArrowLeft size={24} />
        <select
          value={outputLanguage}
          onChange={(e) => {
            setOutputLanguage(e.target.value);
          }}
          className="bg-zinc-800 text-white p-2 rounded border border-zinc-600"
        >
          {programmingLanguages.map((language) => (
            <option key={language.name} value={language.languages}>
              {language.name}
            </option>
          ))}
        </select>
      </div>

      {/* Editor */}
      <div className="scroller h-[500px] overflow-auto bg-[#1e1e2f] border-2 border-[#3e3e5e] rounded">
        <Editor
          className="scroller whitespace-pre"
          value={code}
          onValueChange={setCode}
          highlight={highlightCode}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 14,
            minHeight: "100%",
            borderRadius: "8px",
            outline: "none",
            whiteSpace: "pre",
            background: "transparent",
          }}
        />
      </div>

      <div className="flex justify-end">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-sm hover:bg-blue-700 cursor-pointer"
          onClick={() => {
            handleSend();
          }}
        >
          {isLoading ? <LuLoaderCircle className="animate-spin" /> : "Send"}
        </button>
      </div>
    </div>
  );
}
