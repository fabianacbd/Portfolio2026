import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./index.css";

function Header() {
  const toggleTheme = () => {
    document.body.classList.toggle("dark");
  };

  return (
    <header className="header">
      <div className="container nav">
        <h1 className="logo">Portfolio profesional</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">Sobre mí</Link>
          <Link to="/education">Educación</Link>
          <Link to="/experience">Experiencia</Link>
          <Link to="/projects">Proyectos</Link>
          <button className="theme-btn" onClick={toggleTheme}>🌙</button>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <motion.img
        src="/img.png"
        alt="Avatar"
        className="avatar"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Desarrolladora Full Stack
      </motion.h2>
      <h3>JavaScript · Java · SQL · React · </h3>
    </section>
  );
}

function Section({ title, children }) {
  return (
    <section className="section container">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <Section title="Educacion">
        <div className="grid">
          <div className="card4">
            <h3>Grado Superior</h3>
            <p>Desarrollo de Aplicaciones Multiplataformas</p>
            <p><b>Escuela: </b>The Power MBA</p>
            <p><b>Año: </b>2024 - 2026</p>
          </div>
          <div className="card4">
            <h3>Master</h3>
            <p>Desarrollo de Aplicaciones Web</p>
            <p><b>Escuela: </b>The Power MBA</p>
            <p><b>Año: </b>2024 - 2026</p></div>
          <div className="card4">
            <h3>Derecho (Venezuela) </h3>
            <p><b>Escuela: </b>Universidad de Carabobo</p>
            <p><b>Año: </b>2014 - 2019</p>
          </div>
        </div>
      </Section>
      <Projects preview />
      
    </>
  );
}

function About({ preview }) {
  const about = [
    { title: "Nombre: ", nombre: "Fabiana Barbati",
      edad: "Edad: ", edad1: "27", country: "Nacionalidad: ", pais: "Venezuela", description: "Descripcion:", hobbies: "Hobbies: ", hobbies1: "Cine, series, restaurantes, viajes, ejercicio y conocer cosas nuevas.",
      desc: "Soy estudiante de desarrollo de software con interés en la creación de aplicaciones web modernas y bien estructuradas. Me enfoco en aprender y aplicar buenas prácticas de programación, tanto en frontend como en backend, trabajando con tecnologías como React, Java, SQL y MySQL. Me considero una persona responsable, con buena capacidad de aprendizaje y orientada a la resolución de problemas. Busco seguir creciendo profesionalmente, participar en proyectos desafiantes y consolidar mis conocimientos a través de la práctica constante." },
  ];

  const shown = preview ? about.slice(0, 2) : about;

  return (
    <Section title="Sobre mi">
      <div className="grid">
        {shown.map((p, i) => (
          <motion.div key={i} whileHover={{ scale: 1.05 }} className="card">
            <h3>{p.title}</h3><p>{p.nombre}</p>
            <h3>{p.edad}</h3><p>{p.edad1}</p>
            <h3>{p.country}</h3><p>{p.pais}</p>
            <h3>{p.description}</h3><p>{p.desc}</p>
            <h3>{p.hobbies}</h3><p>{p.hobbies1}</p>
          </motion.div>
        ))}
      </div>
      {preview && <Link className="more" to="/about">Ver todos →</Link>}
    </Section>
  );
}

function Education({ preview }) {
  const education = [
    { title: "Grado Superior", 
      desc: "Desarollo de Aplicaciones Multiplataformas", 
      desc1: "Habilidades: Java + PostgreSQl + Figma + SQL + Angular + Docker",
      year: "Año: 2024 - 2026"},
    { title: "Master", desc: "Desarrollo de Aplicaciones Web", 
      desc1: "Habilidades: Javascript + MongoDB + React + Vite",
      year: "Año: 2024 - 2026" },
    { title: "Derecho", desc: "Universidad de Carabobo (Venezuela)", 
      year: "Año: 2014 - 2019"},
  ];

  const shown = preview ? education.slice(0, 2) : education;

  return (
    <Section title="Educacion">
      <div className="grid">
        {shown.map((p, i) => (
          <motion.div key={i} whileHover={{ scale: 1.05 }} className="card4">
            <h3>{p.title}</h3>
            <p><b>{p.desc}</b></p>
            <p>{p.desc1}</p>
            <p>{p.year}</p>

          </motion.div>
        ))}
      </div>
      {preview && <Link className="more" to="/education">Ver todos →</Link>}
    </Section>
  );
}

function Experience({ preview }) {
  const experiences = [
    { title: "Practicas primer año - 2 semanas", desc: "The Power MBA - Departamento de Inteligencia Artificial", desc1: "Aportes a proyectos con Python, traduccion de videos con IA y ejercicios con Jupyter Notebook", url: "https://www.thepowermba.com/" },
  ];

  const shown = preview ? experiences.slice(0, 2) : experiences;

  return (
    <Section title="Experiencias">
      <div className="grid">
        {shown.map((p, i) => (
          <motion.a key={i} href={p.url}  target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }}  className="card3">
            <h3>{p.title}</h3>
            <p><b>{p.desc}</b></p>
            <p>{p.desc1}</p>

          </motion.a>
        ))}
      </div>
      {preview && <Link className="more" to="/experience">Ver todos →</Link>}
    </Section>
  );
}

function Projects({ preview }) {
  const projects = [
    { title: "Instagram for dummies", 
      desc: "Astro + TypeScript" , 
      image: "/image.png",
      url: "https://astroship-chi-sand.vercel.app/"},
    { title: "Pinterest remake", 
      desc: "HTML + CSS + JavaScript + API", 
      image: "/pinterest.png",
      url: "https://pinterest-remake.netlify.app/" },
    { title: "Bershka remake", 
      desc: "HTML + CSS + JavaScript + JSON",
      image: "/bianca.png",
      url: "https://bershka-fakeproyect.netlify.app/#" },
    { title: "Wish list", 
      desc: "HTML + CSS + JavaScript",
      image: "/wishlist.png",
      url: "https://wishlist-f.netlify.app/"},
  ];

  const shown = preview ? projects.slice(0, 2) : projects;

  return (
    <Section title="Proyectos">
      <div className="grid">
        {shown.map((p, i) => (
          <motion.a key={i} href={p.url}  target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }}  className="card2">
            {p.image && (
        <img src={p.image} alt={p.title} className="project-img" />
      )}
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </motion.a>
        ))}
      </div>
      {preview && <Link className="more" to="/projects">Ver todos →</Link>}
    </Section>
  );
}



export default function App() {
  return (
    <Router>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </Router>
  );
}
