import PropTypes from "prop-types";

function CSSOutput({ cssContent }) {
  return (
    <div>
      <label>
        <strong>Generated CSS:</strong>
      </label>
      <textarea
        rows="10"
        style={{ backgroundColor: "#f4f4f9" }}
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
