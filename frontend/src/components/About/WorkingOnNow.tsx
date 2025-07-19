export default function WorkingOnNow() {
  return (
    <section className="container py-5" id="working-on-now">
      <h2 className="mb-4">What I’m Working On Now</h2>

      <div className="row g-4">
        <div className="col-md-6">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title d-flex align-items-center">
                <i className="bi bi-lightning-charge-fill text-primary me-2"></i>
                React & Spring Boot
              </h5>
              <p className="card-text">
                Building efficient, responsive websites by combining my favorite frontend and backend tools.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title d-flex align-items-center">
                <i className="bi bi-rocket-takeoff-fill text-success me-2"></i>
                Speed & Efficiency
              </h5>
              <p className="card-text">
                Improving how fast I can go from an idea to a working product, using best practices and clean design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}