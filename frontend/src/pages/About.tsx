import JoinMeSection from "../components/About/JoinMeSection";
import MusicCorner from "../components/About/MusicCorner";
import QnASection from "../components/About/QASection";
import WorkingOnNow from "../components/About/WorkingOnNow";

export default function About() {
  return (
    <>
      <section className="container mt-5">
        <h2 className="mb-3 text-center">¿¿You want to know more??</h2>
      </section>
      <WorkingOnNow/>
      <QnASection/>
        <section className="bg-dark text-white">
          <section className='container'>
            <section className="container py-5">
            <h2 className="mb-4 fw-bold">More About Me</h2>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card h-100 text-center rounded-0 shadow-sm">
                  <div className="card-body">
                    <i className="bi bi-film fs-2 text-danger"></i>
                    <h5 className="card-title mt-3">Cinema Lover</h5>
                    <p className="card-text">I enjoy analyzing stories and cinematography — it's a form of inspiration and creativity for me.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 text-center rounded-0  shadow-sm">
                  <div className="card-body">
                    <i className="bi bi-globe-americas fs-2 text-primary"></i>
                    <h5 className="card-title mt-3">World Explorer</h5>
                    <p className="card-text">I love discovering new cultures, cities, and ways of thinking through travel and language learning.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 text-center rounded-0  shadow-sm">
                  <div className="card-body">
                    <i className="bi bi-music-note-beamed fs-2 text-info"></i>
                    <h5 className="card-title mt-3">Music Explorer</h5>
                    <p className="card-text">From classical to lo-fi, music helps me focus, relax, and sometimes even code better.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <MusicCorner/>
        <section className='max-width'>
          <h2 className="mt-5 fw-bold">My Love for Cinema</h2>
            <p>
              I'm deeply inspired by storytelling, visuals, and sound. Movies have shaped how I think about design, structure, emotion, and even how I write code. Whether it's a sci-fi classic, an indie drama, or a mind-bending thriller — I always find something that sparks creativity.
           </p>
        </section>
        <div className="container-fluid p-0 bg-dark text-white">
          <div className="col-md-12 d-flex flex-column justify-content-center align-items-start p-5">
            <h1 className="display-4 fw-bold w-100 text-center">
              <span className="opacity-75">Dive into</span> <em>the Frame</em>
            </h1>
            <p className="lead mt-3 w-100 text-center">
              A personal archive of scenes that inspire my creativity and love for cinema.
            </p>
          </div>
          <div className="col-md-12 d-flex justify-content-center align-items-center p-0">
            <div id="movieFrameCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner shadow-lg">
                <div className="carousel-item active">
                  <img src="/frames/her.png" className="d-block w-100" alt="Frame 1" />
                </div>
                <div className="carousel-item">
                  <img src="/frames/her.png" className="d-block w-100" alt="Frame 2" />
                </div>
                <div className="carousel-item">
                  <img src="/frames/her.png" className="d-block w-100" alt="Frame 3" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#movieFrameCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#movieFrameCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <JoinMeSection/>
    </>
  )
}
