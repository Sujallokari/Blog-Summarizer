import { useState } from "react";

const TextArea = ({ value, onChange, onToneChange, onLengthChange }) => {
  const wordCount = value.trim() ? value.trim().split(/\s+/).length : 0;

  return (
    <div className="textarea-wrapper">
      <label className="textarea-label">Blog Content</label>
      <textarea
        className="custom-textarea"
        placeholder="Paste your blog content here..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <div className="textarea-stats">
        <span>Characters: {value.length}</span>
        <span>Words: {wordCount}</span>
      </div>

      <div className="textarea-options">
        <label>
          Tone:
          <select onChange={(e) => onToneChange(e.target.value)}>
            <option>Casual</option>
            <option>Professional</option>
            <option>Humorous</option>
          </select>
        </label>

        <label>
          Length:
          <select onChange={(e) => onLengthChange(e.target.value)}>
            <option>Short</option>
            <option>Medium</option>
            <option>Long</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default TextArea;
