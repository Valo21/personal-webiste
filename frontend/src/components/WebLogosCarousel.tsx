const webLogos = [
  // Frontend
  { name: "HTML5", url: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
  { name: "JavaScript", url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
  { name: "React", url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { name: "Bootstrap", url: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" },
  { name: "Tailwind CSS", url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },

  // Backend
  { name: "Node.js", url: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
  { name: "Express.js", url: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" },
  { name: "Spring Boot", url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg" },
  { name: "Java", url: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" },
  { name: "Python", url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },

  // Databases / DevOps
  { name: "PostgreSQL", url: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" },
  { name: "Docker", url: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg" },
  { name: "Git", url: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" },
  { name: "GitHub", url: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" }
];

export default function WebLogosCarousel() {
  return (
    <section className='d-flex gap-2 my-4 justify-content-center'>
        {webLogos.map(logo => 
            <figure>
                <img height={40} src={logo.url}/>
            </figure>)}
    </section>
  )
}
