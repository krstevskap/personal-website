import React from "react";
import { FiGithub } from "react-icons/fi";
import "./card.css";

const Card = ({ description, link, technologies, title }) => {
  return (
    <div className="card-container">
      <h2>{title}</h2>
      <p className="card-description">{description}</p>
      <div className="card-footer">
        <p className="card-technologies">{technologies}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <FiGithub />
        </a>
      </div>
    </div>
  );
};

export default Card;
