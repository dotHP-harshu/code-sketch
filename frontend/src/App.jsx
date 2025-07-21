import React, { useState } from "react";
import CodeArea from "./components/CodeArea";
import OutputArea from "./components/OutputArea";
import { ResponseContextProvider } from "./context/ResponseContext";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <main className="w-full text-white bg-zinc-950 h-dvh text-base max-sm:text-sm grid grid-cols-2 p-2 max-sm:grid-cols-1 gap-2 ">
      <ResponseContextProvider>
        <CodeArea isLoading={isLoading} setIsLoading={setIsLoading} />
        <OutputArea isLoading={isLoading} />
      </ResponseContextProvider>
    </main>
  );
}

export default App;
