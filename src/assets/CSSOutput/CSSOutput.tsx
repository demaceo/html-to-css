import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import "./CSSOutput.css";

interface CSSOutputProps {
  cssContent: string;
}

const CSSOutput: React.FC<CSSOutputProps> = ({ cssContent }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isFormatted, setIsFormatted] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(cssContent);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      if (textareaRef.current) {
        textareaRef.current.select();
        document.execCommand("copy");
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      }
    }
  };

  const formatCSS = (css: string): string => {
    if (!css.trim()) return css;

    return css
      .replace(/\s*{\s*/g, " {\n  ")
      .replace(/;\s*/g, ";\n  ")
      .replace(/\s*}\s*/g, "\n}\n\n")
      .replace(/\n\s*\n\s*\n/g, "\n\n")
      .trim();
  };

  const handleFormatToggle = () => {
    setIsFormatted(!isFormatted);
  };

  const displayContent = isFormatted ? formatCSS(cssContent) : cssContent;
  const selectorCount = cssContent.match(/[.#][\w-]+\s*{/g)?.length || 0;

  return (
    <div
      className={`output-container css-output ${
        cssContent ? "has-content" : ""
      }`}
    >
      <div className="output-header">
        <label>
          <strong id="outputTitle">CSS Output</strong>
        </label>
        {cssContent && (
          <div className="output-controls">
            <div className="content-info">
              <span className="selector-count">{selectorCount} selectors</span>
              <span className="character-count">{cssContent.length} chars</span>
            </div>
            <div className="control-buttons">
              <button
                className={`format-button ${isFormatted ? "active" : ""}`}
                onClick={handleFormatToggle}
                title={isFormatted ? "Show compact" : "Format CSS"}
              >
                {isFormatted ? "{}" : "{ }"}
              </button>
              <button
                className={`copy-button ${isCopied ? "copied" : ""}`}
                onClick={handleCopyToClipboard}
                disabled={!cssContent}
                title="Copy to clipboard"
              >
                {isCopied ? "✓" : "📋"}
              </button>
            </div>
          </div>
        )}
      </div>
      <textarea
        ref={textareaRef}
        value={displayContent}
        readOnly
        placeholder="Your generated CSS will appear here..."
        spellCheck={false}
      />
      {isCopied && (
        <div className="copy-notification">CSS copied to clipboard!</div>
      )}
    </div>
  );
};

CSSOutput.propTypes = {
  cssContent: PropTypes.string.isRequired,
};

export default CSSOutput;
