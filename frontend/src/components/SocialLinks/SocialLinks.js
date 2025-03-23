import React from "react";
import "./SocialLinks.css";

const SocialLinks = ({ links }) => {
  return (
    <div className="social-links">
      {links.map((link) => (
        <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" className="social-link">
          {link.icon && <img src={link.icon} alt={link.name} className="social-icon" />}
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;