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
        <h1>HTML to CSS & JS <br/>Generator</h1>
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


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Sample Website</title>
// </head>
// <body>
//     <header class="site-header">
//         <nav class="main-navigation">
//             <ul class="nav-list">
//                 <li class="nav-item"><a href="#home">Home</a></li>
//                 <li class="nav-item"><a href="#about">About</a></li>
//                 <li class="nav-item"><a href="#contact">Contact</a></li>
//             </ul>
//         </nav>
//     </header>
    
//     <main class="main-content">
//         <section id="hero" class="hero-section">
//             <h1 class="hero-title">Welcome to Our Site</h1>
//             <p class="hero-description">This is a sample description</p>
//             <button class="cta-button primary-button">Get Started</button>
//         </section>
        
//         <section id="features" class="features-section">
//             <div class="container">
//                 <h2 class="section-title">Our Features</h2>
//                 <div class="features-grid">
//                     <div class="feature-card">
//                         <h3 class="feature-title">Feature One</h3>
//                         <p class="feature-description">Description of feature one</p>
//                     </div>
//                     <div class="feature-card">
//                         <h3 class="feature-title">Feature Two</h3>
//                         <p class="feature-description">Description of feature two</p>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     </main>
    
//     <footer class="site-footer">
//         <p class="footer-text">&copy; 2025 Sample Website</p>
//     </footer>
// </body>
// </html>