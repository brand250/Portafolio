import './App.css'

const expertise = [
  { number: '01', title: 'Backend & APIs', text: 'Diseño de lógica de negocio y APIs RESTful con C# y .NET Core.' },
  { number: '02', title: 'Microservicios', text: 'Sistemas modulares preparados para crecer con alta disponibilidad.' },
  { number: '03', title: 'Datos & calidad', text: 'Consultas optimizadas, pruebas y validación para entregas confiables.' },
]

const skills = ['C#', '.NET Core', 'Python', 'SQL', 'React.js', 'JavaScript', 'MSSQL', 'PostgreSQL', 'GitLab CI/CD', 'Docker', 'Git', 'Postman', 'APIs REST', 'SOAP', 'Scrum']

function ArrowUpRight() {
  return <span className="arrow" aria-hidden="true">↗</span>
}

function App() {
  return (
    <main>
      <nav className="nav-wrap" aria-label="Navegación principal">
        <a className="brand" href="#inicio" aria-label="Inicio">BR<span>.</span></a>
        <div className="nav-links"><a href="#perfil">Perfil</a><a href="#experiencia">Experiencia</a><a href="#proyectos">Proyectos</a></div>
        <a className="nav-contact" href="mailto:brandon.espinoza23j@gmail.com">Hablemos <ArrowUpRight /></a>
      </nav>

      <section className="hero-section" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Disponible para nuevos retos</p>
          <h1>Ingeniería que<br /><em>mueve ideas.</em></h1>
          <p className="hero-description">Soy Brandon Espinoza, ingeniero en computación especializado en construir productos digitales sólidos desde el backend.</p>
          <div className="hero-actions"><a className="button button-primary" href="#experiencia">Conoce mi experiencia <ArrowUpRight /></a><a className="button button-quiet" href="mailto:brandon.espinoza23j@gmail.com">brandon.espinoza23j@gmail.com</a></div>
        </div>
        <div className="hero-aside"><div className="portrait-mark">BR</div><p>MASAYA, NICARAGUA<br /><span>12.13° N, 86.25° O</span></p><div className="aside-line" /><p className="aside-role">Backend engineer<br />&amp; systems thinker</p></div>
        <div className="hero-index">01 <span>/</span> 04</div>
      </section>

      <section className="intro-section section-grid" id="perfil"><div className="section-label">/ 01 — PERFIL</div><div className="intro-content"><h2>Construyo sistemas<br /><span>que hacen avanzar</span><br />los negocios.</h2><p>Ingeniero en Computación con más de 3 años de experiencia profesional en desarrollo de software. Me especializo en el ecosistema .NET, arquitecturas de microservicios y la integración de soluciones que conectan tecnología con objetivos reales de negocio.</p><p>Trabajo con curiosidad, precisión y una mentalidad de mejora continua. Desde una API hasta un pipeline de despliegue, me importa que cada pieza sea clara, mantenible y esté lista para producción.</p></div></section>

      <section className="expertise-section section-grid"><div className="section-label">/ ÁREAS DE ENFOQUE</div><div className="expertise-list">{expertise.map((item) => <article className="expertise-item" key={item.number}><span className="item-number">{item.number}</span><div><h3>{item.title}</h3><p>{item.text}</p></div><ArrowUpRight /></article>)}</div></section>

      <section className="experience-section section-grid" id="experiencia"><div className="section-label">/ 02 — EXPERIENCIA</div><div className="experience-content"><div className="experience-heading"><span className="date-tag">2022 — PRESENTE</span><h2>CESCO <span>(Airpak)</span></h2><p>Ingeniero de Desarrollo de Software Backend y Mantenimiento de Aplicaciones</p></div><div className="experience-body"><div className="experience-meta"><span>Managua, Nicaragua</span><span>+ 03 años</span></div><ul><li>Construcción, soporte y evolución de sistemas críticos utilizando C# .NET y React.js.</li><li>Diseño e integración de APIs RESTful y mantenimiento de módulos basados en microservicios.</li><li>Diseño y optimización de esquemas, vistas, consultas y procedimientos en MSSQL y PostgreSQL.</li><li>Ejecución de pruebas unitarias, smoke tests y validación en ambientes pre-productivos.</li><li>Control de versiones con Git y ejecución de pipelines de despliegue en GitLab CI/CD.</li><li>Uso estratégico de GitHub Copilot, ChatGPT y Gemini para acelerar entregas y refactorizar.</li></ul></div></div></section>

      <section className="project-section section-grid" id="proyectos"><div className="section-label">/ 03 — PROYECTO DESTACADO</div><div className="project-card"><div className="project-number">01</div><div className="project-main"><span className="date-tag">MONOGRAFÍA / TESIS · UNI · 2023</span><h2>IA para<br /><em>análisis legal.</em></h2><p>Solución de Inteligencia Artificial desarrollada en Python para procesar, consultar y responder inquietudes sobre el Digesto Jurídico de Nicaragua.</p><a href="mailto:brandon.espinoza23j@gmail.com?subject=Proyecto%20de%20IA" className="text-link">Conocer el proyecto <ArrowUpRight /></a></div><div className="project-visual"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="visual-core">AI<span>↗</span></div><span className="visual-caption">NLP / RETRIEVAL<br />PYTHON SYSTEM</span></div></div></section>

      <section className="skills-section section-grid"><div className="section-label">/ 04 — HERRAMIENTAS</div><div className="skills-content"><h2>Un stack pensado<br /><span>para entregar.</span></h2><div className="skill-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div></section>

      <section className="closing-section" id="contacto"><p className="eyebrow">¿Tienes un reto interesante?</p><h2>Hagamos algo<br /><em>que importe.</em></h2><a className="button button-primary" href="mailto:brandon.espinoza23j@gmail.com">Escribir a Brandon <ArrowUpRight /></a></section>
      <footer><span>BR<span className="footer-dot">.</span> / 2026</span><span>Ingeniero en Computación · Nicaragua</span><a href="#inicio">Volver arriba ↑</a></footer>
    </main>
  )
}

export default App
