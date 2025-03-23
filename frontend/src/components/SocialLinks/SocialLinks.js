import React from 'react';
import React from "react";
import PropTypes from "prop-types";
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

SocialLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      icon: PropTypes.string,
    })
  ).isRequired,
};

export default SocialLinks;