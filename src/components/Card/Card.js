import React from "react";
import { FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";
import "./card.css";

const Card = ({ description, link, technologies, title, website }) => {
  return (
    <div className="card-container">
      <h2>{title}</h2>
      <p className="card-description">{description}</p>
      <div className="card-footer">
        <p className="card-technologies">{technologies}</p>
        <div className="links">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <FiGithub />
          </a>
          {website && (
            <a href={website} target="_blank" rel="noopener noreferrer">
              <HiOutlineExternalLink />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
