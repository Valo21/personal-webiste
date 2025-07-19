import { useEffect } from "react";
import AOS from 'aos';

const JoinMeSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // only once when scrolled into view
    });
  }, []);

  const interests = [
    "React",
    "Spring Boot",
    "Creative Coding",
    "Tech & People",
    "Remote Work",
    "Startups",
    "Movies",
    "Learning English"
  ];

  return (
    <section
      className="text-white text-center position-relative"
      style={{
        height: '100vh',
        backgroundImage: 'url(https://images3.alphacoders.com/641/641397.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <article
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        aria-hidden="true"
      />

      <article className="position-relative d-flex flex-column justify-content-center align-items-center h-100 p-4">
        <section>
          <h1 className="display-1 fw-bold text-uppercase" style={{ letterSpacing: '-4px' }} data-aos="fade-down">
            Join<br />Me
          </h1>
          <p className="fw-semibold mt-3">I'M ALWAYS INTERESTED ABOUT</p>
        </section>

        <ul className="d-flex flex-wrap justify-content-center gap-2 mt-3 list-unstyled">
          {interests.map((interest, index) => (
            <li key={index}>
              <span className="badge rounded-pill bg-white text-dark px-3 py-2 animate__animated animate__pulse animate__infinite">
                {interest}
              </span>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default JoinMeSection;
