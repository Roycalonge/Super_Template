import React, { useState } from "react";
import "./CollapseGroup.css";

const CollapseGroup = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="collapse-group">
      {items.map((item, index) => (
        <div key={index} className="collapse-item">
          <button onClick={() => toggleItem(index)}>{item.title}</button>
          {openIndex === index && <div className="collapse-content">{item.content}</div>}
        </div>
      ))}
    </div>
  );
};

export default CollapseGroup;