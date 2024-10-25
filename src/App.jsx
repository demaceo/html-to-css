import { useState } from "react";
import "./App.css";

function App() {
  const [htmlContent, setHtmlContent] = useState("");
  const [cssContent, setCssContent] = useState("");

const generateCSSFromHTML = (htmlContent) => {
  const classSet = new Set();
  const idSet = new Set();

  // regex to match both 'class' and 'className' attributes
  const classRegex = /\bclass(Name)?=["']([^"']+)["']/g;
  const idRegex = /\bid=["']([^"']+)["']/g;

  // Find all classes and classNames
  let match;
  while ((match = classRegex.exec(htmlContent)) !== null) {
    const classNames = match[2].split(/\s+/); // Access the matched classes
    classNames.forEach((className) => classSet.add(className));
  }

  // Find all ids
  while ((match = idRegex.exec(htmlContent)) !== null) {
    idSet.add(match[1]);
  }

  // Generate CSS content for each class and id
  let cssContent = "";

  classSet.forEach((className) => {
    cssContent += `.${className} {\n}\n\n`;
  });

  idSet.forEach((idName) => {
    cssContent += `#${idName} {\n}\n\n`;
  });

  return cssContent.trim(); // Remove any trailing whitespace
};

  const handleGenerateCSS = () => {
    const generatedCSS = generateCSSFromHTML(htmlContent);
    setCssContent(generatedCSS);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>HTML to CSS Generator</h1>
      <label>
        <strong>HTML Content:</strong>
      </label>
      <textarea
        rows="10"
        style={{ width: "100%", marginBottom: "10px" }}
        value={htmlContent}
        onChange={(e) => setHtmlContent(e.target.value)}
        placeholder="Paste your HTML content here..."
      />

      <button onClick={handleGenerateCSS} style={{ marginBottom: "10px" }}>
        Generate CSS
      </button>

      <label>
        <strong>Generated CSS:</strong>
      </label>
      <textarea
        rows="10"
        style={{ width: "100%", backgroundColor: "#f4f4f9" }}
        value={cssContent}
        readOnly
        placeholder="Your generated CSS will appear here..."
      />
    </div>
  );
}

export default App;
