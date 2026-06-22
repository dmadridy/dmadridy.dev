import { projects } from "../data/projects";
import styles from "./projects.module.css";

export default function Projects() {
  return (
    <section className={styles.projectsSection}>
      <h3>Projects</h3>
      <div className={styles.projectsContainer}>
        {projects.map((project) => (
          <article key={project.name}>
            <h4>{project.name}</h4>
            <p>{project.description}</p>
          </article>
        ))}
        {!projects.length && <p>No projects found</p>}
      </div>
    </section>
  );
}
