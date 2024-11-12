import React from "react";
import PropTypes from "prop-types";
import './CSSOutput.css'

interface CSSOutputProps {
  cssContent: string;
}

const CSSOutput: React.FC<CSSOutputProps> = ({ cssContent }) => (
  <div className="output-container">
    <label>
      <strong id="outputTitle">CSS:</strong>
    </label>
    <textarea
      // rows="10"
      value={cssContent}
      readOnly
      placeholder="Your generated CSS will appear here..."
    />
  </div>
);

CSSOutput.propTypes = {
  cssContent: PropTypes.string.isRequired,
};

export default CSSOutput;
