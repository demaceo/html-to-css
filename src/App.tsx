import React, { useState } from "react";
import HTMLInput from "./assets/HTMLInput/HTMLInput";
import CSSOutput from "./assets/CSSOutput/CSSOutput";
import "./App.css";

const App: React.FC = () => {
  const [htmlContent, setHtmlContent] = useState<string>("");
  const [cssContent, setCssContent] = useState<string>("");

  const generateCSSFromHTML = (htmlContent: string): string => {
    const classSet = new Set<string>();
    const idSet = new Set<string>();

    // regex to match both 'class' and 'className' attributes
    const classRegex = /\bclass(Name)?=["']([^"']+)["']/g;
    const idRegex = /\bid=["']([^"']+)["']/g;

    // Find all classes and classNames
    let match;
    while ((match = classRegex.exec(htmlContent)) !== null) {
      const classNames = match[2].split(/\s+/);
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

    return cssContent.trim();
  };

  const handleGenerateCSS = () => {
    const generatedCSS = generateCSSFromHTML(htmlContent);
    setCssContent(generatedCSS);
  };

  return (
    <>
      <div className="header-container">
        <h1>HTML to CSS Generator</h1>
        <div className="subtext">
          Generate CSS skeletons based on the class, className, and id
          attributes found in a given HTML file.
        </div>
      </div>

      <div className="content-container">
        <HTMLInput htmlContent={htmlContent} setHtmlContent={setHtmlContent} />
        <div className="button-container">
          <button className="generate-button" onClick={handleGenerateCSS}>
            Generate
          </button>
        </div>
        <CSSOutput cssContent={cssContent} />
      </div>
    </>
  );
};

export default App;
