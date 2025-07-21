import React, { useContext } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";
import { LuLoaderCircle } from "react-icons/lu";

// Load Prism languages
import "prismjs/components/prism-python";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-json";

// Required CSS for Prism highlighting
import "prismjs/themes/prism-tomorrow.css"; // You can try others like `prism-okaidia.css`
import { ResponseContext } from "../context/ResponseContext";

const markdownComponents = {
  h1: ({ node, ...props }) => (
    <h1 className="text-4xl font-extrabold text-blue-400 mb-5" {...props} />
  ),
  h2: ({ node, ...props }) => (
    <h2 className="text-3xl font-bold text-blue-300 mb-4" {...props} />
  ),
  h3: ({ node, ...props }) => (
    <h3 className="text-2xl font-semibold text-blue-200 mb-3" {...props} />
  ),
  h4: ({ node, ...props }) => (
    <h4 className="text-xl font-medium text-blue-100 mb-2" {...props} />
  ),
  p: ({ node, ...props }) => (
    <p className="text-gray-100 leading-relaxed mb-3" {...props} />
  ),
  ul: ({ node, ...props }) => (
    <ul
      className="list-disc list-inside text-gray-100 mb-3 space-y-1"
      {...props}
    />
  ),
  ol: ({ node, ...props }) => (
    <ol
      className="list-decimal list-inside text-gray-100 mb-3 space-y-1"
      {...props}
    />
  ),
  li: ({ node, ...props }) => <li className="ml-5" {...props} />,
  code: ({ node, className, children, ...props }) => {
    const isBlock = className?.startsWith("language-");

    if (!isBlock) {
      return (
        <code
          className="bg-gray-800 px-1.5 py-0.5 rounded text-red-400 font-mono text-sm"
          {...props}
        >
          {children}
        </code>
      );
    }

    return (
      <code
        className={`${className} font-mono text-sm w-full bg-[#ccc] block p-1 scroller`}
        {...props}
      >
        {children}
      </code>
    );
  },
};

function OutputArea({ isLoading }) {
  const { response } = useContext(ResponseContext);

  return (
    <div className="scroller h-full w-full max-w-4xl mx-auto bg-gray-900 border border-gray-700 p-2 shadow-lg overflow-auto">
      {isLoading && <LuLoaderCircle className="animate-spin" />}
      {response != "" && (
        <Markdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypePrism]}
          components={markdownComponents}
        >
          {response}
        </Markdown>
      )}
    </div>
  );
}

export default OutputArea;
