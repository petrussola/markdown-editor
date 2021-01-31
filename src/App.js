import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';

export default function App() {
  const [markdown, setMarkdown] = useState('Type your text here');

  function handleChange(e) {
    setMarkdown(e.target.value);
  }
  return (
    <div className="app">
      <textarea value={markdown} onChange={handleChange} />
      <ReactMarkdown className="preview" source={markdown}></ReactMarkdown>
    </div>
  );
}
