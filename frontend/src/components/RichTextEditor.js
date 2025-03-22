import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const RichTextEditor = ({ onChange }) => {
  const [content, setContent] = useState("");

  const handleChange = (value) => {
    setContent(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className="p-4 border rounded-lg bg-white">
      <ReactQuill value={content} onChange={handleChange} />
    </div>
  );
};

export default RichTextEditor;
