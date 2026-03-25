import { SiteData } from '@/types'

interface SkillsProps {
  data: Pick<SiteData, 'skills'>
}

export default function Skills({ data }: SkillsProps) {
  return (
    <section id="skills">
      <div className="wrapper" style={{ textAlign: 'left' }}>
        <div className="skills-intro">
          <div className="reveal">
            <p className="section-label">02 — Skills</p>
            <h2>My Technical Stack</h2>
          </div>
          <p className="skills-sub reveal">
            From languages and ML frameworks to DevOps tools — a full-spectrum background combining
            specialized expertise with hands-on project experience.
          </p>
        </div>
        <div className="skill-categories reveal">
          {(data.skills || []).map((skill, i) => (
            <div key={i} className="skill-row">
              <span className="skill-cat">{skill.category}</span>
              <div className="skill-tags">
                {skill.tags.map((tag, j) => (
                  <span key={j} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
