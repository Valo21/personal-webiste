import { Link } from "react-router";

export default function NotFound() {
  return (
    <section className="container text-center mt-5">
      <div className="alert alert-danger" role="alert">
        <h2>404 - Página no encontrada</h2>
        <p>La URL que buscás no existe en esta app.</p>
      </div>
      <Link to="/" className="btn btn-primary">
        Volver al inicio
      </Link>
    </section>
  )
}
