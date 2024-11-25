import React from 'react';
import Card from '../Card/Card';
import TeamProject from '../../img/team-project.png';
import TaskProject from '../../img/tasks.png';
import './projects.css';

const Projects = () => {
    return (
        <section className="projects-container">
            <h1>Featured Projects</h1>
            <div className="projects-list">
                <Card
                    img={TeamProject}
                    description="The main functionality is to replace in-person scheduling appointments with a digital system. I contributed as a backend developer, ensuring the smooth functionality of the server-side logic."
                    link="https://github.com/Timski-Proekt/TP"
                    technologies="React, Java Spring, PostgreSQL"
                />
                <Card
                    img={TaskProject}
                    description="A React-based task management application that allows users to create, edit, delete, and drag-and-drop tasks between columns. The app features persistent data storage using localStorage. "
                    link="https://github.com/krstevskap/kanban-board"
                    technologies="React"
                />
            </div>
        </section>
    );
};

export default Projects;
