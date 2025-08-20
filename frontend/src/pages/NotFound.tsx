import { Link } from "react-router";

export default function NotFound() {
  return (
    <section className="container text-center my-5">
      <div className="alert alert-danger" role="alert">
        <h2>404 - Page not found</h2>
        <p>The url you are looking for doesn't exists or is under construction</p>
      </div>
      <Link to="/" className="btn btn-primary">
        Back to home
      </Link>
    </section>
  )
}
