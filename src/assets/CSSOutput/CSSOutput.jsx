
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

export default CSSOutput;
