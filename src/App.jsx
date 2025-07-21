import { useState } from "react";


import "./styles.css";

import Header from "./Components/Header";
import Button from "./Components/Button";
import TextArea from "./Components/TextArea";
import Summary from "./Components/Summary";

function App() {
  const [blogText, setBlogText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

const handleSummarize = async () => {
  if (!blogText.trim()) {
    alert("Please paste some blog text to summarize.");
    return;
  }

  setLoading(true);
  setSummary("");

  try {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_HUGGINGFACE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: blogText,
        }),
      }
    );

    const result = await response.json();

    if (result.error) {
      alert(`Error: ${result.error}`);
    } else {
      setSummary(result[0]?.summary_text || "No summary returned.");
    }
  } catch (error) {
    console.error("Fetch failed:", error);
    alert("Something went wrong while fetching summary.");
  }

  setLoading(false);
};


  return (
    <div className="container">
      <Header />
      <TextArea value={blogText} onChange={setBlogText} />
      <Button onClick={handleSummarize} loading={loading} />
      <Summary text={summary} />
    </div>
  );
}

export default App;
