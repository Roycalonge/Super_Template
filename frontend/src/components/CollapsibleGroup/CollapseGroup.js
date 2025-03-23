import React, { useState } from "react";
import PropTypes from "prop-types";
import "./CollapseGroup.css";

const CollapseGroup = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCollapse = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="collapse-group">
      {items.map((item, index) => (
        <div key={index} className="collapse-item">
          <button onClick={() => toggleCollapse(index)} className="collapse-header">
            {item.title} {openIndex === index ? "▲" : "▼"}
          </button>
          {openIndex === index && <div className="collapse-content">{item.content}</div>}
        </div>
      ))}
    </div>
  );
};

CollapseGroup.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CollapseGroup;