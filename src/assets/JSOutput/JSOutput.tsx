import React from "react";
import PropTypes from "prop-types";
import "./JSOutput.css";

interface JSOutputProps {
  jsContent: string;
}

const JSOutput: React.FC<JSOutputProps> = ({ jsContent }) => (
  <div className="output-container">
    <label>
      <strong id="outputTitle">JavaScript:</strong>
    </label>
    <textarea
    //   rows={10}
    //   style={{ backgroundColor: "#f4f4f9" }}
      value={jsContent}
      readOnly
      placeholder="Your generated JavaScript will appear here..."
    />
  </div>
);

JSOutput.propTypes = {
  jsContent: PropTypes.string.isRequired,
};

export default JSOutput;
