import PropTypes from "prop-types";
import "./CSSOutput.css";

function CSSOutput({ cssContent }) {
  return (
    <div className="output-container">
      <label>
        <strong id="cssTitle">Generated CSS:</strong>
      </label>
      <textarea
        rows="10"

        value={cssContent}
        readOnly
        placeholder="Your generated CSS will appear here..."
      />
    </div>
  );
}

CSSOutput.propTypes = {
  cssContent: PropTypes.string.isRequired,
};

export default CSSOutput;
