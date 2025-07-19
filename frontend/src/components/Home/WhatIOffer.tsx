const WhatIOffer = () => (
  <section className="bg-white">
    <section className="pt-5 bg-light">
      <section className="container pt-5">
        <h2 className="text-center fw-bold mb-5 display-6">What I Offer</h2>

        <section className="row g-4">

          <article className="col-md-6" data-aos="fade-up-right">
            <section className="position-relative p-5 text-white bg-dark rounded-0 overflow-hidden shadow-lg">
              <h3 className="display-6 fw-bold">Full-Stack Development</h3>
              <p className="mt-3">
                Build fast and responsive apps with <strong>React</strong>, <strong>Spring Boot</strong>, and <strong>NestJS</strong>.
              </p>
              <i className="bi bi-laptop fs-1"></i>
            </section>
          </article>

          <article className="col-md-6" data-aos="fade-up-left">
            <section className="position-relative p-5 bg-light text-dark rounded-0 overflow-hidden shadow-lg">
              <h3 className="display-6 fw-bold">UI Design with Clean Code</h3>
              <p className="mt-3">
                Sleek, user-friendly interfaces built with <strong>HTML</strong>, <strong>CSS</strong>, and <strong>Tailwind</strong>.
              </p>
              <i className="bi bi-palette2 fs-1"></i>
            </section>
          </article>

          <article className="col-md-6" data-aos="fade-up-right">
            <section className="position-relative p-5 text-white bg-primary rounded-0 overflow-hidden shadow-lg">
              <h3 className="display-6 fw-bold">API & Backend</h3>
              <p className="mt-3">
                Scalable and secure REST APIs using <strong>PostgreSQL</strong> and <strong>MySQL</strong>.
              </p>
              <i className="bi bi-diagram-3 fs-1"></i>
            </section>
          </article>

          <article className="col-md-6" data-aos="fade-up-left">
            <section className="position-relative p-5 text-white bg-danger rounded-0 overflow-hidden shadow-lg">
              <h3 className="display-6 fw-bold">Docker & DevOps</h3>
              <p className="mt-3">
                Containerized deployments and automation with <strong>Docker</strong> & CI/CD tools.
              </p>
              <i className="bi bi-box-seam fs-1"></i>
            </section>
          </article>

          <article className="col-12" style={{ transform: 'translateY(50px)' }}>
            <section className="position-relative p-5 bg-secondary text-white rounded-0 overflow-hidden shadow-lg">
              <h3 className="display-6 fw-bold">Problem Solving</h3>
              <p className="mt-3">
                I thrive on challenges, solving problems with <strong>creativity</strong> and <strong>curiosity</strong>.
              </p>
              <i className="bi bi-lightbulb fs-1"></i>
            </section>
          </article>

        </section>
      </section>
    </section>
  </section>
);

export default WhatIOffer;