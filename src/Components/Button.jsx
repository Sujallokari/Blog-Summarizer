const Button = ({ onClick, loading }) => {
  return (
    <button onClick={onClick} disabled={loading} className="btn">
      <div className="btn-content">
        {loading && <div className="spinner"></div>}
        <span>{loading ? "Summarizing..." : "✨ Summarize"}</span>
      </div>
      <div className="btn-glow"></div>
    </button>
  );
};

export default Button;
