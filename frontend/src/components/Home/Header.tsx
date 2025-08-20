const skills = [
  { name: 'JavaScript' },
  { name: 'React' },
  { name: 'Node.js' },
  { name: 'Bootstrap' },
  { name: 'TypeScript' },
  { name: 'Git' },
]

export default function Header() {
  return (
    <header className="max-width">
      <article className="card m-3 mt-5 rounded-0 p-4 border-0">
        <section className="d-flex flex-column flex-md-row align-items-center">

          {/* Profile Photo & Name */}
          <figure className="mb-3 mb-md-0">
            <img
              src="Profile.jpg"
              alt="Photo of Valentín Faciano"
              className="rounded-circle d-block mx-auto"
              style={{ width: 150, height: 150, objectFit: 'cover' }}
            />
            <figcaption>
              <section className="ms-md-4 text-center">
                <h1 className="mb-1">Valentín Faciano</h1>
                <p className="h5 text-muted mb-3">Web Developer</p>
              </section>
              <section className="ms-md-4 text-center" style={{ maxWidth: 600 }}>
                <p>
                  Passionate about technology and creating innovative solutions.
                  Experienced in JavaScript, React, Node.js, and modern web development.
                </p>
              </section>
            </figcaption>
          </figure>

          {/* Skills Section */}
          <section className="ms-md-4 text-center text-md-start">
            <h2>Skills</h2>
            <ul className="list-inline">
              {skills.map(({ name }) => (
                <li key={name} className="list-inline-item mb-1">
                  <span className="badge bg-secondary">{name}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Contact Section */}
          <section className="ms-md-4 text-center text-md-start mt-3">
            <h2>Contact</h2>
            <address>
              <p className="mb-1">
                <strong>Email:</strong>{' '}
                <a href="mailto:valentin@example.com">valentin.faciano.dev@gmail.com</a>
              </p>
              <p className="mb-1">
                <strong>Location:</strong> Tucumán, Argentina
              </p>
              <p className="mb-0">
                <strong>GitHub:</strong>{' '}
                <a href="https://github.com/valo21" target="_blank" rel="noopener noreferrer">
                  github.com/valo21
                </a>
              </p>
            </address>
          </section>

        </section>
      </article>
    </header>
  )
}
