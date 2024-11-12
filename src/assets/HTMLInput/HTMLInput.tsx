import React from "react";
import PropTypes from "prop-types";
import "./HTMLInput.css";

interface HTMLInputProps {
  htmlContent: string;
  setHtmlContent: (content: string) => void;
}

const HTMLInput: React.FC<HTMLInputProps> = ({
  htmlContent,
  setHtmlContent,
}) => (
  <div className="input-container">
    <label>
      <strong id="htmlTitle">HTML Input:</strong>
    </label>
    <textarea
      className={htmlContent === "" ? "pulsing-border" : ""}
      value={htmlContent}
      onChange={(e) => setHtmlContent(e.target.value)}
      placeholder="Paste your HTML content here..."
    />
  </div>
);

HTMLInput.propTypes = {
  htmlContent: PropTypes.string.isRequired,
  setHtmlContent: PropTypes.func.isRequired,
};

export default HTMLInput;
