import React from "react";
import Card from "../Card/Card";
import "./projects.css";

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="card-list">
        <div className="card">
          <Card
            description="The main functionality is to replace in-person scheduling appointments with a digital system. I contributed as a backend developer, ensuring the smooth functionality of the server-side logic."
            link="https://github.com/Timski-Proekt/TP"
            technologies="React, Java Spring, PostgreSQL"
            title="Digital Driver’s License Appointment Scheduler"
          />
        </div>

        <div className="card">
          <Card
            description="A React-based task management application that allows users to create, edit, delete, and drag-and-drop tasks between columns. The app features persistent data storage using localStorage. "
            link="https://github.com/krstevskap/kanban-board"
            technologies="React"
            title="Kanban Board"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
