const EventExamples = () => {
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log('form submitted');
  };

  return (
    <section className="form-section">
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={(e) => console.log(e.target.value)}
        />
        <button type="submit">Submit form</button>
        <div>
          <button onClick={() => console.log('click me')} type="button">
            Click me
          </button>
        </div>
      </form>
    </section>
  );
};

export default EventExamples;
