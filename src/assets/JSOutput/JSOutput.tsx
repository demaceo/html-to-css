import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import "./JSOutput.css";

interface JSOutputProps {
  jsContent: string;
}

const JSOutput: React.FC<JSOutputProps> = ({ jsContent }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [outputMode, setOutputMode] = useState<
    "vanilla" | "jquery" | "queryselector"
  >("vanilla");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(getDisplayContent());
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

  const convertToJQuery = (content: string): string => {
    return content
      .replace(/document\.getElementById\("([^"]+)"\);/g, '$$("#$1");')
      .replace(/document\.getElementsByClassName\("([^"]+)"\);/g, '$(".$1");');
  };

  const convertToQuerySelector = (content: string): string => {
    return content
      .replace(
        /document\.getElementById\("([^"]+)"\);/g,
        'document.querySelector("#$1");'
      )
      .replace(
        /document\.getElementsByClassName\("([^"]+)"\);/g,
        'document.querySelectorAll(".$1");'
      );
  };

  const getDisplayContent = (): string => {
    switch (outputMode) {
      case "jquery":
        return convertToJQuery(jsContent);
      case "queryselector":
        return convertToQuerySelector(jsContent);
      default:
        return jsContent;
    }
  };

  const statementCount = jsContent
    .split("\n")
    .filter((line) => line.trim()).length;

  return (
    <div
      className={`output-container js-output ${jsContent ? "has-content" : ""}`}
    >
      <div className="output-header">
        <label>
          <strong id="outputTitle">JavaScript Output</strong>
        </label>
        {jsContent && (
          <div className="output-controls">
            <div className="content-info">
              <span className="statement-count">
                {statementCount} statements
              </span>
              <span className="character-count">{jsContent.length} chars</span>
            </div>
            <div className="control-buttons">
              <select
                className="mode-selector"
                value={outputMode}
                onChange={(e) =>
                  setOutputMode(
                    e.target.value as "vanilla" | "jquery" | "queryselector"
                  )
                }
              >
                <option value="vanilla">Vanilla JS</option>
                <option value="queryselector">Query Selector</option>
                <option value="jquery">jQuery</option>
              </select>
              <button
                className={`copy-button ${isCopied ? "copied" : ""}`}
                onClick={handleCopyToClipboard}
                disabled={!jsContent}
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
        value={getDisplayContent()}
        readOnly
        placeholder="Your generated JavaScript will appear here..."
        spellCheck={false}
      />
      {isCopied && (
        <div className="copy-notification">JavaScript copied to clipboard!</div>
      )}
    </div>
  );
};

JSOutput.propTypes = {
  jsContent: PropTypes.string.isRequired,
};

export default JSOutput;
