

const Collapse = () => {
    return (
      <div className="container mx-auto mb-10 ">
        <div className="text-center text-5xl font-bold mb-10">
            <h1> F & Q</h1>
            <hr />
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border-base-300 bg-base-200 border"
        >
          <div className="collapse-title text-xl font-medium">
            Focus me to see content
          </div>
          <div className="collapse-content">
            <p>tabindex={0} attribute is necessary to make the div focusable</p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border-base-300 bg-base-200 border"
        >
          <div className="collapse-title text-xl font-medium">
            Focus me to see content
          </div>
          <div className="collapse-content">
            <p>tabindex={0} attribute is necessary to make the div focusable</p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border-base-300 bg-base-200 border"
        >
          <div className="collapse-title text-xl font-medium">
            Focus me to see content
          </div>
          <div className="collapse-content">
            <p>tabindex={0} attribute is necessary to make the div focusable</p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border-base-300 bg-base-200 border"
        >
          <div className="collapse-title text-xl font-medium">
            Focus me to see content
          </div>
          <div className="collapse-content">
            <p>tabindex={0} attribute is necessary to make the div focusable</p>
          </div>
        </div>
      </div>
    );
};

export default Collapse;