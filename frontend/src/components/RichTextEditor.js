import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { debounce } from "lodash";

const RichTextEditor = ({ onChange }) => {
  const [content, setContent] = useState("");

  const handleChange = debounce((value) => {
    setContent(value);
    if (onChange) {
      onChange(value);
    }
  }, 500); // Reduce llamadas innecesarias

  return (
    <div className="p-4 border rounded-lg bg-white">
      <ReactQuill value={content} onChange={handleChange} />
    </div>
  );
};

export default RichTextEditor;
