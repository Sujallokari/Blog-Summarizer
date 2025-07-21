const Summary = ({ text, loading }) => {
  if (loading) {
    return (
      <div className="summary loading">
        <div className="spinner"></div>
        <p>Generating summary...</p>
      </div>
    );
  }

  if (!text) return null;

  return (
    <div className="summary">
      <h3 className="summary-title">Summary</h3>
      <p className="summary-text">{text}</p>
    </div>
  );
};

export default Summary;
