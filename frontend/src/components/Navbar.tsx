import { useEffect } from 'react';
import { NavLink } from 'react-router';
import * as bootstrap from 'bootstrap';
import { useScrollPosition } from '../hooks/useScrollPosition';

export default function Navbar() {
  const scrollPercent = useScrollPosition();

  const hidden = scrollPercent >= 0.9;
  
  useEffect(() => {
    (window).bootstrap = bootstrap;

    const tooltipTriggerList = Array.from(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
      new bootstrap.Tooltip(tooltipTriggerEl); // ya no falla
    });
  }, []);

  return (
    <nav
      className={`navbar w-75 m-auto fixed-bottom mb-3 bottom-1 navbar-light bg-light rounded-3 shadow-lg px-4 py-2 transition-opacity ${
        hidden ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ transition: 'opacity 0.4s ease-in-out' }}
    >
      <div className="container-fluid">
          <ul className="navbar-nav flex-row w-100 justify-content-between">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Página principal"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-link"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Sobre mí"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/projects"
                className="nav-link"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Proyectos"
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/labs"
                className="nav-link"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Labs"
              >
                Labs
              </NavLink>
            </li>
          </ul>
        </div>
    </nav>
  );
}