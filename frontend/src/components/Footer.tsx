import { Children, isValidElement, PropsWithChildren, useState } from "react";
import { Link, NavLink } from "react-router";

interface NavLinkProps {
  title: string;
  to: string;
}

interface LinksAccordionItemProps {
  title: string;
  children: React.ReactNode
}

const ListLink = (links: NavLinkProps[]) => links.map((link, i) =>
    <li key={i}>
      <NavLink className="text-decoration-none text-muted" to={link.to}>{link.title}</NavLink>
    </li>
); 


function LinksAccordionItem({title, children}: LinksAccordionItemProps) {
  const [collapsed, setCollapsed] = useState<boolean>(true);

  return (
    <article className="border-0 col-md-4 col-lg-3 my-2">
      <button 
        className="bg-transparent d-flex border-0 border-bottom w-100 justify-content-between"
        onClick={() => setCollapsed(prev => !prev)}
        >
        <h4>
            {title}
        </h4>
        <section className='d-md-none'>
          {!collapsed && <i className="bi bi-chevron-up fs-3"></i>}
          {collapsed && <i className="bi bi-chevron-down fs-3"></i>}
        </section>
      </button>
      <section className={`fs-5 pt-3 ${collapsed ? 'd-none' : 'd-block'} d-md-block`}>
        <ul className="list-unstyled d-flex flex-column gap-2">
          {children}
        </ul>
      </section>
    </article>
  )
}


export default function Footer() {

  return (
    <footer className="bg-white text-dark pt-5 border-top p-4 max-width">
      <section className="container">
        <section className="row">
          <article className="col-md-3 mb-4">
            <h5 className="fw-bold">Valentin Faciano</h5>
            <p className="text-muted">
               I'm a passionate developer who loves building things that help
              people. I enjoy learning, experimenting with tech, and sharing my
              journey with the world.
            </p>
          </article>

          <article className='col-md-9'>
            <section className="row">
              <LinksAccordionItem title='About me'>
                {
                  ListLink([
                    { title: "My story", to: "/about" },
                    { title: "Projects", to: "/projects" },
                    { title: "What am i learning", to: "/learning" },
                  ])
                }
              </LinksAccordionItem>
              <LinksAccordionItem title='Explore'>
                {
                  ListLink([
                    { title: "QA", to: "/about/#qna" },
                  ])
                }
              </LinksAccordionItem>
              <LinksAccordionItem title='Contact'>
                {
                  ListLink([
                    { title: "valentin.faciano.dev@gmail.com", to: "mailto:valentin.faciano.dev@gmail.com" },
                    { title: "LinkedIn", to: "https://www.linkedin.com/in/valentinfaciano" },
                    { title: "GitHub", to: "https://github.com/Valo21" },
                  ])
                }
              </LinksAccordionItem>
            </section>
          </article>

          <article className="row align-items-center mt-5 pt-3 border-top">
            <section className="col-md-6 d-flex flex-wrap align-items-center w-100 justify-content-center gap-3 py-3">
              <a href="https://github.com/Valo21"><i className="bi bi-github text-black fs-3"></i></a>
              <a href="https://www.instagram.com/valentin.faciano"><i className="bi bi-instagram text-black fs-3"></i></a>
              <a href="https://www.linkedin.com/in/valentinfaciano"><i className="bi bi-linkedin text-black fs-3"></i></a>
            </section>
            <div className="col-12 text-center text-muted pb-3">
              Copyright © 2025 Valentin Faciano. Todos lo derechos reservados
            </div>
          </article>
        </section>
      </section>
    </footer>
  )
}
