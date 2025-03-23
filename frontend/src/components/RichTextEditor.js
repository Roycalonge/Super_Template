import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { debounce } from "lodash";
import PropTypes from "prop-types";

const RichTextEditor = ({ onChange, value = "", modules, formats }) => {
  const [content, setContent] = useState(value);

  const handleChange = debounce((value) => {
    setContent(value);
    if (onChange) {
      onChange(value);
    }
  }, 500); // Reduce llamadas innecesarias

  return (
    <div className="p-4 border rounded-lg bg-white">
      <ReactQuill value={content} onChange={handleChange} modules={modules} formats={formats} />
    </div>
  );
};

RichTextEditor.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  modules: PropTypes.object,
  formats: PropTypes.arrayOf(PropTypes.string),
};

export default React.memo(RichTextEditor);
