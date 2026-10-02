import React, { useState } from 'react';
import './App.css';

interface Project {
  id: number;
  title: string;
  tagline: string;
  icon: string;
  tech: string[];
  link: string;
}

export default function App() {
  const [currentVibe, setCurrentVibe] = useState('🎀 Matcha & Code');
  const [hasLiked, setHasLiked] = useState(false);
  const [formSent, setFormSent] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      title: 'BloodConnect',
      tagline: 'Life-saving blood request & real-time donor matching network with secure JWT authentication.',
      icon: '🩸✨',
      tech: ['React.js', 'Node.js', 'MySQL'],
      link: 'https://bloodconnect-zeta-neon.vercel.app/',
    },
    {
      id: 2,
      title: 'TransitLive',
      tagline: 'Live smart transit tracker designed in Figma with real-time route updates & arrival estimates.',
      icon: '🌸🚏',
      tech: ['Next.js', 'TypeScript', 'Node.js', 'Figma'],
      link: 'https://transit-live-six.vercel.app/',
    },
  ];

  const handleLike = () => {
    if (!hasLiked) {
      setHasLiked(true);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => setFormSent(false), 4000);
  };

  return (
    <div className="portfolio-wrapper">
      {/* Background ambient lighting */}
      <div className="ambient-glow glow-pink"></div>
      <div className="ambient-glow glow-blue"></div>
      <div className="ambient-glow glow-orange"></div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-brand">
          <span>🌸</span>
          <span>Anushka's space</span>
        </div>
        <div className="nav-links">
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
        <button 
          className="nav-cta"
          onClick={handleLike}
        >
          {hasLiked ? '💖 Liked!' : `💖 Give Love `}
        </button>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="sparkle-badge">
          ✨ Currently building sweet digital experiences
        </div>
        <h1 className="hero-title">
          Designing with <span className="highlight-pink">passion</span><br />
          developing with <span className="highlight-orange">precision</span>
        </h1>
        <p className="hero-subtitle">
          Hi there! I build clean, aesthetic user interfaces and robust web applications with TypeScript, React, and modern UI engineering.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">Explore My Work 🎀</a>
          <a href="#contact" className="btn-secondary">Let's Connect 💌</a>
        </div>

        {/* Interactive Vibe Switcher */}
        <div className="vibe-box">
          <span className="vibe-label">Current Coding Vibe:</span>
          <div className="vibe-options">
            {['🎀 Matcha & Code', '🍊 Sunset Beats', '🫐 Cozy Lo-Fi'].map((vibe) => (
              <button
                key={vibe}
                className={`vibe-btn ${currentVibe === vibe ? 'active' : ''}`}
                onClick={() => setCurrentVibe(vibe)}
              >
                {vibe}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="section-header">
          <span className="section-tag">PORTFOLIO</span>
          <h2 className="section-title">Featured Creations 🍓</h2>
        </div>

        <div className="projects-grid">
          {projects.map((proj) => (
            <div key={proj.id} className="project-card">
              <div>
                <div className="project-icon">{proj.icon}</div>
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-desc">{proj.tagline}</p>
                <div className="tech-pills">
                  {proj.tech.map((t, idx) => (
                    <span key={idx} className="pill">{t}</span>
                  ))}
                </div>
              </div>
              <button 
                className="card-button"
                onClick={() => alert(`Opening ${proj.title} !`)}
              >
                 <a href={proj.link} target="_blank" rel="noopener noreferrer" className="card-link">View Project ➔</a>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="section-header">
          <span className="section-tag">TOOLBOX</span>
          <h2 className="section-title">Skills & Technologies 🧁</h2>
        </div>

        <div className="skills-container">
          <div className="skill-category">
            <h4>✨ Frontend Craft</h4>
            <div className="skill-list">
              {['React.js', 'TypeScript', 'Next.js', 'HTML5 / CSS3', 'JavaScript (ES6+)'].map(s => (
                <span key={s} className="skill-chip">{s}</span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h4>🍊 Backend & Data</h4>
            <div className="skill-list">
              {['Node.js', 'Express.js', 'MySQL', 'PostgreSQL', 'REST APIs'].map(s => (
                <span key={s} className="skill-chip">{s}</span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h4>🫐 Design & Tools</h4>
            <div className="skill-list">
              {['Figma', 'Git / GitHub', 'VS Code', 'UI/UX Prototyping', 'Responsive Design'].map(s => (
                <span key={s} className="skill-chip">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="contact-card">
          <h3>Say Hello! 💌</h3>
          <p>Have an exciting opportunity, project collaboration, or just want to chat? Connect with me directly!</p>
         {/* Social Links Row */}
          <div className="social-links-grid">
            
           
              <svg className="social-svg-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/>
              </svg>
              <span className="social-text"><a href="mailto:anushkamishra3108@gmail.com" className="social-pill" target="_blank" rel="noreferrer">Email Me</a></span>
            

            
              <svg className="social-svg-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"/>
              </svg>
              <span className="social-text"><a href="https://linkedin.com/in/anushka-mishra-" className="social-pill" target="_blank" rel="noreferrer">LinkedIn</a></span>
            

           
            
              <svg className="social-svg-icon" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017C2 16.442 4.87 20.191 8.84 21.517C9.34 21.609 9.52 21.301 9.52 21.036C9.52 20.801 9.51 20.009 9.51 19.183C6.73 19.787 6.14 17.844 6.14 17.844C5.68 16.677 5.03 16.366 5.03 16.366C4.12 15.744 5.1 15.758 5.1 15.758C6.1 15.828 6.63 16.788 6.63 16.788C7.52 18.318 8.97 17.876 9.54 17.62C9.63 16.974 9.89 16.533 10.17 16.286C7.95 16.035 5.62 15.176 5.62 11.353C5.62 10.264 6.01 9.373 6.65 8.675C6.55 8.423 6.21 7.408 6.75 6.046C6.75 6.046 7.59 5.776 9.5 7.07C10.3 6.848 11.15 6.737 12 6.733C12.85 6.737 13.7 6.848 14.5 7.07C16.41 5.776 17.25 6.046 17.25 6.046C17.79 7.408 17.45 8.423 17.35 8.675C17.99 9.373 18.38 10.264 18.38 11.353C18.38 15.186 16.04 16.032 13.81 16.278C14.17 16.588 14.49 17.202 14.49 18.146C14.49 19.501 14.48 20.595 14.48 21.036C14.48 21.304 14.66 21.615 15.17 21.515C19.14 20.186 22.01 16.44 22.01 12.017C22.01 6.484 17.522 2 12 2Z"/>
              </svg>
              <span className="social-text"><a href="https://github.com/nushka08" className="social-pill" target="_blank" rel="noreferrer">GitHub</a></span>
            
          </div>

          <div className="contact-divider">
            <span>or send a sweet note</span>
          </div> 
          {formSent ? (
            <div style={{ color: 'var(--candy-pink)', fontWeight: 700, padding: '20px' }}>
              🌸 Thanks for reaching out! I will get back to you soon.
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleFormSubmit}>
              <input 
                type="text" 
                placeholder="Your Name 🌸" 
                required 
                className="contact-input" 
              />
              <input 
                type="email" 
                placeholder="Your Email ✉️" 
                required 
                className="contact-input" 
              />
              <textarea 
                rows={4} 
                placeholder="Write your note here..." 
                required 
                className="contact-textarea"
              ></textarea>
              <button type="submit" className="send-btn">
                Send Note ✨
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-response-badge">
          <span className="response-title">RESPONSE TIME</span>
          <div className="response-metric">
            <span className="live-dot"></span>
            &lt;3 hours
          </div>
          <p className="response-subtext">You'll hear back from me quickly!</p>
        </div>

        <p>🌸  © 2026 Anushka Mishra. All rights reserved.  🌸</p>
        <p>Crafted with 💖</p>
      </footer>
    </div>
  );
}
