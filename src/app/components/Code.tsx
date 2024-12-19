import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightBright } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Code = ({ children }: { children: React.ReactNode }) => {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={tomorrowNightBright}
      showLineNumbers={true}
      lineNumberStyle={{
        minWidth: "1.8em",
        paddingRight: "0.5em",
        marginRight: "0.5em",
        borderRight: "1px solid rgba(255, 255, 255, 0.3)",
      }}
    >
      {children}
    </SyntaxHighlighter>
  );
};

export default Code;
