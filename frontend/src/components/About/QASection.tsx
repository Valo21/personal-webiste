const QnASection = () => (
  <>
    <section className="container py-5" id="qna">
      <h2 className="mb-4">Q&amp;A About Me</h2>

      <section className="accordion" id="qnaAccordion">

        <article className="accordion-item">
          <header className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#answer1"
              aria-expanded="true"
              aria-controls="answer1"
            >
              What inspired you to keep learning code?
            </button>
          </header>
          <section
            id="answer1"
            className="accordion-collapse collapse show"
            data-bs-parent="#qnaAccordion"
            aria-labelledby="headingOne"
          >
            <p className="accordion-body">
              Having fun and relaxing with friends while building things kept
              me curious and motivated.
            </p>
          </section>
        </article>

        <article className="accordion-item">
          <header className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#answer2"
              aria-expanded="false"
              aria-controls="answer2"
            >
              What’s a moment you’re proud of?
            </button>
          </header>
          <section
            id="answer2"
            className="accordion-collapse collapse"
            data-bs-parent="#qnaAccordion"
            aria-labelledby="headingTwo"
          >
            <p className="accordion-body">
              When I started diving into JavaScript seriously and realized I
              could actually build real, useful things.
            </p>
          </section>
        </article>

        <article className="accordion-item">
          <header className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#answer3"
              aria-expanded="false"
              aria-controls="answer3"
            >
              How do you deal with frustration?
            </button>
          </header>
          <section
            id="answer3"
            className="accordion-collapse collapse"
            data-bs-parent="#qnaAccordion"
            aria-labelledby="headingThree"
          >
            <p className="accordion-body">
              I pause, check the docs, watch a video, ask a friend — and remind
              myself it's all part of the process.
            </p>
          </section>
        </article>

      </section>
    </section>
  </>
);

export default QnASection;