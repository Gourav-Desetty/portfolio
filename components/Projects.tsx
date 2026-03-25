import { SiteData } from '@/types'

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[13px] h-[13px]">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.31-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.87.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

interface ProjectsProps {
  data: Pick<SiteData, 'projects'>
}

export default function Projects({ data }: ProjectsProps) {
  return (
    <section id="projects">
      <div className="wrapper" style={{ textAlign: 'left' }}>
        <p className="section-label reveal">03 — Projects</p>
        <h2 className="reveal">Selected Work</h2>
        <p className="sub reveal">End-to-end ML systems built with real-world constraints in mind.</p>
        <div className="projects-grid">
          {(data.projects || []).map((project, i) => (
            <div key={i} className="project-card reveal">
              <div className="project-num">{project.number}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-highlights">
                {project.highlights.map((h, j) => (
                  <span key={j} className="highlight">{h}</span>
                ))}
              </div>
              <div className="project-footer">
                <div className="project-tags">
                  {project.tags?.map((tag, j) => (
                    <span key={j} className="tag">{tag}</span>
                  ))}
                </div>
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener" className="project-link">
                    <GithubIcon />GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
