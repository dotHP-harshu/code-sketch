import { createContext, useState } from "react";

const ResponseContext = createContext(null);

const ResponseContextProvider = ({ children }) => {
  const [response, setResponse] = useState("");
  return (
    <ResponseContext value={{ response, setResponse }}>
      {children}
    </ResponseContext>
  );
};

export { ResponseContext, ResponseContextProvider };
