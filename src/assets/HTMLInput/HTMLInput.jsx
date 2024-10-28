import PropTypes from "prop-types";

function HTMLInput({ htmlContent, setHtmlContent }) {
  return (
    <div>
      <label>
        <strong>HTML Content:</strong>
      </label>
      <textarea
        rows="10"
        value={htmlContent}
        onChange={(e) => setHtmlContent(e.target.value)}
        placeholder="Paste your HTML content here..."
      />
    </div>
  );
}

HTMLInput.propTypes = {
  htmlContent: PropTypes.string.isRequired,
  setHtmlContent: PropTypes.func.isRequired,
};

export default HTMLInput;
