import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../components/Home/Header";
import WhatIOffer from "../components/Home/WhatIOffer";
import WebLogosCarousel from "../components/WebLogosCarousel";

const projects = [
  {
    img: '/projects/AWS_CAPTURE.jpeg',
    title: 'AWS E-commerce',
    description: 'Full-stack e-commerce architecture in TypeScript, with separated frontend and backend modules. Implemented user authentication and management with AWS, along with purchase flow orchestration, prioritizing scalability and data integrity.',
    href: 'http://aws-app-bucker.s3-website.us-east-2.amazonaws.com/'
  },
  {
    img: '/projects/PORTFOLIO_CAPTURE.png',
    title: 'Old portfolio',
    description: 'Built an interactive portfolio using Next.js 14 and Tailwind CSS, featuring animations with Framer Motion, data visualizations with Chart.js, and 3D elements powered by Three.js and React Three Fiber. Integrated Prisma for data management and custom components to showcase projects and links in an engaging way.',
    href: 'https://portfolio-valo.vercel.app/'
  },
  {
    img: '/projects/TETRIS_CAPTURE.png',
    title: 'Tetris game',
    description: 'Built a Tetris game using Angular 17, focused on game logic and matrix operations to manage piece placement and rotation. Features modular components, smooth animations, and a clean architecture for scalability and maintainability.',
    href: 'https://ng-tetris-latest.onrender.com/'
  },
  {
    img: '/projects/PANEL_CAPTURE.png',
    title: 'Login Panel',
    description: 'Built an authentication panel using Next.js 14 and NextAuth, integrating Prisma for user management and Bcrypt for secure password hashing. The interface is modern with Tailwind CSS, supporting login, registration, and secure session management.',
    href: 'https://auth-panel-valo234.vercel.app/'
  }
]

function ProjectsSection() {
  return (
    <article className='bg-black' id="projects">
       <section className="my-4">
        <h2 className="text-center text-white pt-5">PROJECTS</h2>
       </section>
       <section className="container-fluid max-width p-5">
          <section className="row p-2">
            {
              projects.map(p => 
                <article className="col-12 col-md-6 p-2">
                  <figure className="card rounded-0">
                    <img src={p.img} className="card-img-top" alt="..."/>
                    <figcaption className="card-body">
                      <h5 className="card-title">{p.title}</h5>
                      <p className="card-text">{p.description}</p>
                      <a href={p.href} className="btn btn-primary">Check this one</a>
                    </figcaption>
                  </figure>
                </article>
              )
            }
          </section>
       </section>
    </article>
  )
}

/* function ExperienceSection() {
  return (
    <article className='bg-dark pt-5'>
      
    </article>
  )
} */

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // only once when scrolled into view
    });
  }, []);
  
  return (
    <>
      <Header/>
      <section className="bg-black text-white">
        <section className="container max-width py-5 row" data-aos="fade-up" data-aos-delay="100">
            <article className='col-12 col-md-8'>
              <section>
                <h2 className='display-5 opacity-75'>
                  Who i am
                </h2>
                <p className='lead'>
                  I'm a passionate web developer who started coding through game modding at 16.
                  What began as a curiosity became a journey of constant learning — from Lua scripting to full-stack web development.

                  I love building meaningful web experiences with React and Spring Boot, and I'm on a mission to keep growing — not just as a developer, but as a person.

                  Whether it's exploring the world, diving into astrophysics, or learning new skills, I believe in using code to connect ideas, people, and possibilities.
                </p>
              </section>
            </article>
            {/* <article className='col-12 col-md-4'>
              <section>
                <figure>
                  <img src="https://dummyimage.com/200x200/000/fff&text=Headphones" alt="Headphones" className="img-fluid mt-3"/>
                </figure>
              </section>
            </article> */}
        </section>
      </section>

      <section className="bg-black text-white">
        <section className="container max-width py-5 row" data-aos="fade-up" data-aos-delay="100">
          <article className='col-12 col-md-6 d-flex align-items-center'>
            <section>
              <figure>
                <img src="https://i.imgur.com/55TN8K1.png" alt="Headphones" className="img-fluid mt-3"/>
              </figure>
            </section>
          </article>
          <article className='col-12 col-md-6'>
            <section>
              <h2 className='display-5 opacity-75'>
                My journey as a developer
              </h2>
              <p className='lead'>
                I first started coding at 16 — and honestly, I didn’t even know it was coding. It began as a game.

                I was playing a multiplayer mod for GTA: San Andreas called MTA:SA, and I discovered that I could modify the game using Lua. I learned from YouTube videos and the official Lua documentation.

                What started as just tweaking some features turned into a real passion. Eventually, I enjoyed building systems more than playing the game. I explored client-server architecture, used HTML inside the game, managed databases for player data, and even played around with shaders and 3D models — all inside a video game.

                A friend introduced me to this world, and I’m incredibly grateful.
              </p>
            </section>
          </article>
          <article className='col-12 col-md-12'>
              <section>
                <figure>
                  <img src="mta-captura.png" alt="Headphones" className="img-fluid mt-3"/>
                </figure>
              </section>
            </article>
        </section>
      </section>

      <section className="bg-black text-white">
        <section className="container max-width py-5 row">
            <article className='col-12 col-md-12'>
              <section>
                <h2 className='display-5 opacity-75'>
                  And my goals?
                </h2>
                <p className='lead'>
                   Ever since I started exploring web development, my goal has been to create experiences that connect people and ideas. I aim to keep learning new technologies, build projects that challenge me, and contribute to the global developer community. Every line of code is a step toward turning curiosity into impact and turning passion into practical solutions.
                </p>
              </section>
            </article>
            {/**<article className='col-12 col-md-4'>
              <section>
                <figure>
                  <img src="https://dummyimage.com/200x200/000/fff&text=Headphones" alt="Headphones" className="img-fluid mt-3"/>
                </figure>
              </section>
            </article>**/}
        </section>
      </section>
      
      <section className="bg-black text-white">
        {/*
        <section className="container max-width py-5 row">
          <article className='col-12 col-md-4 p-1 float-up'>
            <section>
              <figure>
                <img src="https://live.staticflickr.com/7359/11383924094_b99e640b95_b.jpg" alt="Headphones" className="img-fluid mt-3"/>
              </figure>
            </section>
          </article>
          <article className='col-12 col-md-4 p-1 d-flex flex-column justify-content-center overflow-hidden'>
            <section className='scroll-up-infinite-late'>
              <section>
                <figure>
                  <img src="https://live.staticflickr.com/7359/11383924094_b99e640b95_b.jpg" alt="Headphones" className="img-fluid mt-3"/>
                </figure>
              </section>
              <section>
                <figure>
                  <img src="https://live.staticflickr.com/7359/11383924094_b99e640b95_b.jpg" alt="Headphones" className="img-fluid mt-3"/>
                </figure>
              </section>
            </section>
          </article>
          <article className='col-12 col-md-4 p-1 overflow-hidden'>
            <section className='scroll-up-infinite'>
              <article className='col-12'>
                <section>
                  <figure>
                    <img src="https://live.staticflickr.com/7359/11383924094_b99e640b95_b.jpg" alt="Headphones" className="img-fluid mt-3"/>
                  </figure>
                </section>
              </article>
              <article className='col-12'>
                <section>
                  <figure>
                    <img src="https://live.staticflickr.com/7359/11383924094_b99e640b95_b.jpg" alt="Headphones" className="img-fluid mt-3"/>
                  </figure>
                </section>
              </article>
              <article className='col-12'>
                <section>
                  <figure>
                    <img src="https://live.staticflickr.com/7359/11383924094_b99e640b95_b.jpg" alt="Headphones" className="img-fluid mt-3"/>
                  </figure>
                </section>
              </article>
            </section>
          </article>
        </section>
        */}
      </section>

      <section className="bg-black text-white">
        <section className="container max-width py-5 row">
          <article className='col-12 col-md-12'>
            <h2 className='text-center display-5 opacity-75'>
              ¿Why Web Development?
            </h2>
          </article>
          <article className='col-12 col-md-12'>
            <section>
              <p className='lead'>
                I want to work in web development not just because I love the tech — but because it connects me with people around the world.

                I see the web as a bridge between disciplines. You can build an e-commerce store, a system for lawyers, or even tools for NASA. The possibilities are endless.

                For me, it’s not just about getting a job. It’s about building things, learning, and evolving as a person.
              </p>
            </section>
          </article>
          {/* <article className='col-12 row'>
            <figure className="col-md-4">
              <img src="/db-architecture.webp" alt="Headphones" className="img-fluid mt-3"/>
            </figure>
            <figure className="col-md-4">
              <img src="/db-architecture.webp" alt="Headphones" className="img-fluid mt-3"/>
            </figure>
            <figure className="col-md-4">
              <img src="/db-architecture.webp" alt="Headphones" className="img-fluid mt-3"/>
            </figure>
          </article> */}
        </section>
      </section>
      <WhatIOffer/>
      {/* <ExperienceSection/> */}
      <ProjectsSection/>
      <WebLogosCarousel/>
    </>
  );
}