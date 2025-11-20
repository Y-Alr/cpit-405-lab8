import React, { useState } from "react";

function Shortener() {
  const [longURL, setLongURL] = useState("");
  const [customID, setCustomID] = useState("");
  const [shortURL, setShortURL] = useState("");

  // Random ID generator
  const generateShortID = () => {
    return Math.random().toString(36).substring(2, 8);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!longURL.trim()) {
      alert("Please enter a valid URL.");
      return;
    }

    const id = customID.trim() !== "" ? customID : generateShortID();
    const finalShortURL = `https://short.ly/${id}`;

    setShortURL(finalShortURL);
  };

  return (
    <div className="shortener-box">
      <h2>Shorten Your URL</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter long URL"
          value={longURL}
          onChange={(e) => setLongURL(e.target.value)}
        />

        <input
          type="text"
          placeholder="Custom short name (optional)"
          value={customID}
          onChange={(e) => setCustomID(e.target.value)}
        />

        <button type="submit">Shorten</button>
      </form>

      {shortURL && (
        <div className="result">
          <p><strong>Your short link:</strong></p>
          <a href={longURL} target="_blank" rel="noreferrer">
            {shortURL}
          </a>
        </div>
      )}
    </div>
  );
}

export default Shortener;
