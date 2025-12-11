import "./index.css";
import { useState, useEffect } from "react";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience", "education", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="page">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="container nav-inner">
          <div className="logo">
            <span className="logo-accent">R</span>achitha
            <span className="logo-accent">  A</span>charya
          </div>
          <ul className="nav-links">
            <li><a href="#home" className={activeSection === "home" ? "active" : ""}>Home</a></li>
            <li><a href="#about" className={activeSection === "about" ? "active" : ""}>About</a></li>
            <li><a href="#skills" className={activeSection === "skills" ? "active" : ""}>Skills</a></li>
            <li><a href="#projects" className={activeSection === "projects" ? "active" : ""}>Projects</a></li>
            <li><a href="#experience" className={activeSection === "experience" ? "active" : ""}>Experience</a></li>
            <li><a href="#education" className={activeSection === "education" ? "active" : ""}>Education</a></li>
            <li><a href="#contact" className={activeSection === "contact" ? "active" : ""}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="section hero">
        <div className="animated-bg">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        
        <div className="container hero-grid">
          <div className="hero-left fade-up">
            <div className="hero-pill">
              <span className="pulse-dot"></span>
              Jr Software Developer · Data Science & Machine Learning
            </div>
            
            <h1 className="hero-title">
              Hi, I'm <span className="hero-name">Rachitha Acharya</span>
            </h1>
            
            <p className="hero-subtitle">
              Motivated Software Developer specializing in Data Science and Machine Learning, 
              delivering <span className="highlight">15+ ML projects</span> with 
              <span className="highlight"> 4 end-to-end model deployments</span> across 
              healthcare, agriculture, and enterprise domains.
            </p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">ML Projects</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">4</div>
                <div className="stat-label">End-to-End Deployments</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Dedication</div>
              </div>
            </div>
            
            <div className="hero-actions">
              <a href="#projects" className="btn primary">
                <i className="fas fa-chart-bar"></i> View Projects
              </a>
              <a href="/Rachitha_CV.pdf" download className="btn secondary">
                <i className="fas fa-download"></i> Download Resume
              </a>
            </div>
            
            <div className="social-links">
              <a href="https://github.com/" target="_blank" rel="noreferrer" 
                 aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/rachitha-acharya-44233a225" target="_blank" rel="noreferrer"
                 aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="mailto:rachithaacharya18@gmail.com" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          <div className="hero-right">
            <div className="profile-card float-card">
              <img src="/src/assets/rachitha.jpg" alt="Rachitha Acharya" title="Rachitha Acharya - Data Science Professional" className="profile-img profile-img-small" />
              <div className="profile-overlay">
                <div className="profile-info">
                  <div className="info-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Mangalore, Karnataka</span>
                  </div>
                  <div className="info-item">
                    <i className="fas fa-briefcase"></i>
                    <span>Open to opportunities</span>
                  </div>
                </div>
              </div>
              <div className="availability-badge">
                <span className="status-dot"></span>
                Available for Hire
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section section-alt">
        <div className="container fade-up">
          <div className="section-header">
            <h2 className="section-title">
              <i className="fas fa-user-circle"></i> About Me
            </h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="about-content">
            <p className="about-text">
              Hi, I'm Rachitha Acharya, a passionate Software Developer from Mangalore, Karnataka. 
              Currently, I'm working as a Jr Software Developer specializing in Data Science & Machine 
              Learning at Accolade Tech Solution Private Limited, where I've been contributing to 
              innovative projects since September 2023.
            </p>
            
            <p className="about-text">
              Motivated Software Developer specializing in Data Science and Machine Learning, 
              with hands-on experience delivering 15+ ML projects, including 4 end-to-end model 
              deployments across healthcare, agriculture, and enterprise domains. Skilled in 
              Python, SQL, Pandas, NumPy, Scikit-learn, Tableau, Power BI, RAG systems, and 
              LLaMA 3.1, with strong capabilities in predictive analytics, data preprocessing, 
              visualization, and model development. Developed AI-driven solutions, automated 
              workflows, intelligent chatbots, and government systems involving appointment 
              management and reporting modules. Known for analytical thinking, problem-solving, 
              and transforming data into actionable insights.
            </p>
            
            <div className="about-highlights">
              <div className="highlight-card">
                <div className="highlight-icon">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h4>Problem Solver</h4>
                <p>Turning business questions into actionable data insights</p>
              </div>
              
              <div className="highlight-card">
                <div className="highlight-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h4>Data Storyteller</h4>
                <p>Creating compelling visualizations that drive decisions</p>
              </div>
              
              <div className="highlight-card">
                <div className="highlight-icon">
                  <i className="fas fa-rocket"></i>
                </div>
                <h4>Continuous Learner</h4>
                <p>Always exploring new tools and methodologies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <div className="container fade-up">
          <div className="section-header">
            <h2 className="section-title">
              <i className="fas fa-code"></i> Technical Skills
            </h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="skills-container">
            <div className="skill-category">
              <h3 className="category-title">
                <i className="fas fa-laptop-code"></i> Programming Languages
              </h3>
              <div className="skill-items">
                <div className="skill-badge">
                  <i className="fab fa-python"></i> Python
                </div>
                <div className="skill-badge">PHP</div>
              </div>
            </div>
            
            <div className="skill-category">
              <h3 className="category-title">
                <i className="fas fa-database"></i> Data Tools
              </h3>
              <div className="skill-items">
                <div className="skill-badge">
                  <i className="fas fa-database"></i> SQL
                </div>
                <div className="skill-badge">Excel (Advanced)</div>
                <div className="skill-badge">Power BI</div>
                <div className="skill-badge">Tableau</div>
              </div>
            </div>
            
            <div className="skill-category">
              <h3 className="category-title">
                <i className="fas fa-brain"></i> Frameworks & Libraries
              </h3>
              <div className="skill-items">
                <div className="skill-badge">Flask</div>
                <div className="skill-badge">Streamlit</div>
                <div className="skill-badge">Gradio</div>
                <div className="skill-badge">TensorFlow</div>
                <div className="skill-badge">Pandas</div>
                <div className="skill-badge">NumPy</div>
                <div className="skill-badge">Seaborn</div>
                <div className="skill-badge">Matplotlib</div>
                <div className="skill-badge">Keras</div>
                <div className="skill-badge">Scikit-learn</div>
              </div>
            </div>
            
            <div className="skill-category">
              <h3 className="category-title">
                <i className="fas fa-tools"></i> Tools & Technologies
              </h3>
              <div className="skill-items">
                <div className="skill-badge">Web Application Development</div>
                <div className="skill-badge">Databases</div>
                <div className="skill-badge">Computer Vision</div>
                <div className="skill-badge">Image Processing</div>
                <div className="skill-badge">Data Analysis</div>
                <div className="skill-badge">Data Visualization</div>
                <div className="skill-badge">Machine Learning</div>
                <div className="skill-badge">Artificial Intelligence</div>
                <div className="skill-badge">Ollama</div>
                <div className="skill-badge">LangChain</div>
                <div className="skill-badge">FAISS Vector Store</div>
              </div>
            </div>
            
            <div className="skill-category">
              <h3 className="category-title">
                <i className="fas fa-project-diagram"></i> Machine Learning Techniques
              </h3>
              <div className="skill-items">
                <div className="skill-badge">Deep Learning</div>
                <div className="skill-badge">Natural Language Processing (NLP)</div>
                <div className="skill-badge">Convolutional Neural Networks (CNN)</div>
                <div className="skill-badge">Recurrent Neural Networks (RNN)</div>
                <div className="skill-badge">Long Short-Term Memory (LSTM)</div>
                <div className="skill-badge">Random Forest</div>
                <div className="skill-badge">Decision Tree</div>
                <div className="skill-badge">Support Vector Machine (SVM)</div>
                <div className="skill-badge">XGBoost</div>
                <div className="skill-badge">Retrieval-Augmented Generation (RAG)</div>
                <div className="skill-badge">LLaMA 3.1 (Ollama)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section section-alt">
        <div className="container fade-up">
          <div className="section-header">
            <h2 className="section-title">
              <i className="fas fa-folder-open"></i> Featured Projects
            </h2>
            <div className="title-underline"></div>
            <p className="section-subtitle">
              A collection of end-to-end data science projects showcasing analysis, 
              modeling, and visualization skills
            </p>
          </div>
          
          <div className="projects-grid">
            <article className="project-card">
              <div className="project-header">
                <div className="project-icon healthcare">
                  <i className="fas fa-building"></i>
                </div>
                <span className="project-tag eda">Government System</span>
              </div>
              
              <h3 className="project-title">State-Level Dental Council Management Systems (NDA Project)</h3>
              
              <p className="project-desc">
                Developed and enhanced end-to-end council management systems, including Appointment 
                Slot Management System for practitioners and patients with automated reminders, and 
                Council Reporting System with role-based access control, analytics dashboards, and 
                Excel/PDF export functionality.
              </p>
              
              <div className="project-metrics">
                <div className="metric">
                  <span className="metric-label">Type</span>
                  <span className="metric-value">Government System</span>
                </div>
                <div className="metric">
                  <span className="metric-label">Status</span>
                  <span className="metric-value">Production</span>
                </div>
              </div>
              
              <div className="project-tech">
                <span className="tech-pill">PHP</span>
                <span className="tech-pill">MySQL</span>
                <span className="tech-pill">Role-Based Access</span>
                <span className="tech-pill">Reporting</span>
              </div>
            </article>

            <article className="project-card">
              <div className="project-header">
                <div className="project-icon nlp">
                  <i className="fas fa-robot"></i>
                </div>
                <span className="project-tag ml">AI & NLP</span>
              </div>
              
              <h3 className="project-title">Retrieval-Augmented Generation (RAG) Chatbot</h3>
              
              <p className="project-desc">
                Built a Retrieval-Augmented Generation (RAG) chatbot using LLaMA 3.1 on the Ollama 
                framework, enabling intelligent, context-aware responses powered by custom knowledge bases.
              </p>
              
              <div className="project-metrics">
                <div className="metric">
                  <span className="metric-label">Type</span>
                  <span className="metric-value">AI Chatbot</span>
                </div>
                <div className="metric">
                  <span className="metric-label">Model</span>
                  <span className="metric-value">LLaMA 3.1</span>
                </div>
              </div>
              
              <div className="project-tech">
                <span className="tech-pill">LLaMA 3.1</span>
                <span className="tech-pill">Ollama</span>
                <span className="tech-pill">LangChain</span>
                <span className="tech-pill">FAISS</span>
                <span className="tech-pill">RAG</span>
              </div>
            </article>

            <article className="project-card">
              <div className="project-header">
                <div className="project-icon healthcare">
                  <i className="fas fa-heartbeat"></i>
                </div>
                <span className="project-tag ml">ML Models</span>
              </div>
              
              <h3 className="project-title">Domain-Specific Machine Learning Implementations</h3>
              
              <p className="project-desc">
                Developed and deployed machine learning models for early disease detection, crop health 
                monitoring, and predictive analytics. Successfully supported the delivery of 15+ machine 
                learning projects, including 4 full end-to-end model implementations across healthcare, 
                agriculture, analytics, and enterprise workflow automation.
              </p>
              
              <div className="project-metrics">
                <div className="metric">
                  <span className="metric-label">Projects</span>
                  <span className="metric-value">15+</span>
                </div>
                <div className="metric">
                  <span className="metric-label">Deployments</span>
                  <span className="metric-value">4 End-to-End</span>
                </div>
              </div>
              
              <div className="project-tech">
                <span className="tech-pill">Python</span>
                <span className="tech-pill">TensorFlow</span>
                <span className="tech-pill">Scikit-learn</span>
                <span className="tech-pill">Pandas</span>
                <span className="tech-pill">ML Pipeline</span>
              </div>
            </article>

            <article className="project-card">
              <div className="project-header">
                <div className="project-icon nlp">
                  <i className="fas fa-video"></i>
                </div>
                <span className="project-tag eda">Web Development</span>
              </div>
              
              <h3 className="project-title">Clipzo.in - Videography Platform</h3>
              
              <p className="project-desc">
                Designed and implemented a videography-focused scheduling platform using PHP and 
                phpMyAdmin, enabling seamless portfolio uploads, client bookings, and project management.
              </p>
              
              <div className="project-metrics">
                <div className="metric">
                  <span className="metric-label">Type</span>
                  <span className="metric-value">Web App</span>
                </div>
                <div className="metric">
                  <span className="metric-label">Status</span>
                  <span className="metric-value">Live</span>
                </div>
              </div>
              
              <div className="project-tech">
                <span className="tech-pill">PHP</span>
                <span className="tech-pill">phpMyAdmin</span>
                <span className="tech-pill">MySQL</span>
                <span className="tech-pill">Web</span>
              </div>
              
              <div className="project-links">
                <a href="https://clipzo.in" target="_blank" rel="noreferrer" className="project-link">
                  <i className="fas fa-external-link-alt"></i> View Live Site
                </a>
              </div>
            </article>
          </div>
          
          <div className="cta-section">
            <p>Want to see more projects?</p>
            <a href="https://github.com/" className="btn primary">
              <i className="fab fa-github"></i> Visit GitHub
            </a>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL EXPERIENCE */}
      <section id="experience" className="section section-alt">
        <div className="container fade-up">
          <div className="section-header">
            <h2 className="section-title">
              <i className="fas fa-briefcase"></i> Professional Experience
            </h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Jr Software Developer – Data Science & Machine Learning · Accolade Tech Solution Private Limited</h4>
                <p className="timeline-meta">
                  <i className="fas fa-map-marker-alt"></i> Mangalore, India · 
                  <i className="fas fa-calendar-alt"></i> Sep 2023 - Present
                </p>
                <ul className="experience-list">
                  <li>Designed and implemented machine learning solutions across healthcare, agriculture, analytics, and multiple other domains.</li>
                  <li>Supported early disease detection, crop health monitoring, predictive analytics, and workflow automation.</li>
                  <li>Successfully completed 15+ machine learning projects, including 4 full end-to-end model implementations.</li>
                  <li>Built a Retrieval-Augmented Generation (RAG) chatbot using LLaMA 3.1 on the Ollama framework, enabling intelligent, context-aware responses from custom knowledge bases.</li>
                  <li>Delivered government-based council projects featuring appointment management modules, comprehensive reporting systems, Excel/PDF export functionality, and role-based access control.</li>
                  <li>Actively involved in system maintenance and enhancements.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section">
        <div className="container fade-up">
          <div className="section-header">
            <h2 className="section-title">
              <i className="fas fa-graduation-cap"></i> Education & Learning
            </h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Master of Computer Applications · Data Science</h4>
                <p className="timeline-meta">
                  <i className="fas fa-university"></i> Jain (Deemed-to-be University) | May 2024 – Present
                </p>
                <p className="timeline-desc">
                  Pursuing advanced studies in Data Science with focus on machine learning, 
                  statistical analysis, and data-driven solutions.
                </p>
                <div className="timeline-skills">
                  <span>Data Science</span>
                  <span>Machine Learning</span>
                  <span>Advanced Analytics</span>
                </div>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Bachelor of Computer Applications</h4>
                <p className="timeline-meta">
                  <i className="fas fa-university"></i> SDM College of Business Management | Sep 2020 – Jul 2023
                </p>
                <p className="timeline-desc">
                  Completed undergraduate studies in Computer Applications, building foundation 
                  in programming, databases, and software development.
                </p>
                <div className="timeline-skills">
                  <span>Computer Science</span>
                  <span>Programming</span>
                  <span>Database Systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORKSHOPS & ACTIVITIES */}
      <section id="workshops" className="section section-alt">
        <div className="container fade-up">
          <div className="section-header">
            <h2 className="section-title">
              <i className="fas fa-chalkboard-teacher"></i> Workshops & Activities
            </h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="workshops-content">
            <div className="workshop-item">
              <div className="workshop-icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="workshop-details">
                <h4>Mentored Workshops</h4>
                <p>Mentored and conducted technical workshops across multiple engineering colleges on Python, AI, and Data Science tools, helping students build real-world problem-solving skills.</p>
              </div>
            </div>
            
            <div className="workshop-item">
              <div className="workshop-icon">
                <i className="fas fa-laptop-code"></i>
              </div>
              <div className="workshop-details">
                <h4>University-Level Workshops</h4>
                <p>Organized and led university-level workshops on PHP and MySQL, delivering practical, hands-on training to large student groups.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">
        <div className="contact-bg-shapes">
          <div className="contact-shape contact-shape-1"></div>
          <div className="contact-shape contact-shape-2"></div>
          <div className="contact-shape contact-shape-3"></div>
        </div>

        <div className="container">
          <div className="section-header fade-up">
            <h2 className="section-title">
              <i className="fas fa-paper-plane"></i> Let's Connect
            </h2>
            <div className="title-underline"></div>
            <p className="section-subtitle">
              Have a project in mind or want to discuss data science opportunities? 
              I'd love to hear from you!
            </p>
          </div>

          <div className="contact-wrapper fade-up">
            {/* Left Side - Blank/Decorative */}
            <div className="contact-left-side">
              <div className="contact-decorative">
                <div className="contact-icon-large">
                  <i className="fas fa-handshake"></i>
                </div>
                <p className="contact-message">
                  Let's work together to turn your data into insights!
                </p>
              </div>
            </div>

            {/* Right Side - Contact Options */}
            <div className="contact-right-side">
              <div className="contact-options">
                <a 
                  href="mailto:rachithaacharya18@gmail.com?subject=Portfolio Inquiry&body=Hi Rachitha,%0D%0A%0D%0AI came across your portfolio and would like to connect..."
                  className="contact-option-card email-card"
                >
                  <div className="contact-option-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-option-content">
                    <h3>Email Me</h3>
                    <p>rachithaacharya18@gmail.com</p>
                    <span className="contact-action">Click to send email <i className="fas fa-arrow-right"></i></span>
                  </div>
                </a>

                <a 
                  href="https://wa.me/918792235863?text=Hi%20Rachitha,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect..."
                  target="_blank"
                  rel="noreferrer"
                  className="contact-option-card whatsapp-card"
                >
                  <div className="contact-option-icon">
                    <i className="fab fa-whatsapp"></i>
                  </div>
                  <div className="contact-option-content">
                    <h3>Connect on WhatsApp</h3>
                    {/* <p>+91 8792235863</p> */}
                    <span className="contact-action">Click to message <i className="fas fa-arrow-right"></i></span>
                  </div>
                </a>
              </div>

              <div className="social-connect-footer">
                <p>Or connect on social media</p>
                <div className="social-icons-footer">
                  <a href="https://github.com/" target="_blank" rel="noreferrer" 
                     className="social-icon-footer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://linkedin.com/in/rachitha-acharya-44233a225" target="_blank" rel="noreferrer" 
                     className="social-icon-footer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://twitter.com/" target="_blank" rel="noreferrer" 
                     className="social-icon-footer">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <footer className="footer">
        <div className="container footer-content">
          <p>© {new Date().getFullYear()} Rachitha Acharya • Built with React</p>
          <div className="footer-links">
            <a href="#home">Back to top <i className="fas fa-arrow-up"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
