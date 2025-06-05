import React, { useState } from "react";
import HTMLInput from "./assets/HTMLInput/HTMLInput";
import CSSOutput from "./assets/CSSOutput/CSSOutput";
import JSOutput from "./assets/JSOutput/JSOutput";

import "./App.css";

const App: React.FC = () => {
  const [htmlContent, setHtmlContent] = useState<string>("");
  const [cssContent, setCssContent] = useState<string>("");
  const [jsContent, setJsContent] = useState<string>("");

  // Generate CSS content from HTML
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

  // Generate JavaScript statements for classes and ids
  const generateJSFromHTML = (htmlContent: string): string => {
    const classSet = new Set<string>();
    const idSet = new Set<string>();

    const classRegex = /\bclass(Name)?=["']([^"']+)["']/g;
    const idRegex = /\bid=["']([^"']+)["']/g;

    let match;
    while ((match = classRegex.exec(htmlContent)) !== null) {
      const classNames = match[2].split(/\s+/);
      classNames.forEach((className) => classSet.add(className));
    }
    while ((match = idRegex.exec(htmlContent)) !== null) {
      idSet.add(match[1]);
    }

    let jsContent = "";
    idSet.forEach((idName) => {
      jsContent += `document.getElementById("${idName}");\n`;
    });
    classSet.forEach((className) => {
      jsContent += `document.getElementsByClassName("${className}");\n`;
    });

    return jsContent.trim();
  };

  const handleGenerateCSS = () => {
    const generatedCSS = generateCSSFromHTML(htmlContent);
    setCssContent(generatedCSS);
  };

  const handleGenerateJS = () => {
    const generatedJS = generateJSFromHTML(htmlContent);
    setJsContent(generatedJS);
  };

  const handleButtonClick = () => {
    handleGenerateCSS();
    handleGenerateJS();
  }

  return (
    <>
      <div className="header-container">
        <h1>HTML to CSS (& JS) <br></br>Generator</h1>
        <div className="subtext">
          Generate CSS skeletons based on the class, className, and ID
          attributes found in a given HTML file.
        </div>
      </div>

      <div className="content-container">
        <HTMLInput htmlContent={htmlContent} setHtmlContent={setHtmlContent} />
        <div className="button-container">
          <button className="generate-button" onClick={handleButtonClick}>
            Generate
          </button>
        </div>
        <CSSOutput cssContent={cssContent} />
        <JSOutput jsContent={jsContent} />
      </div>
    </>
  );
};

export default App;

// to start: npm run dev 