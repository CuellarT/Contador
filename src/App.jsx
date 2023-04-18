import { useState } from "react";

function App() {
  let [count, setcount] = useState(0);
  return (
    <div className="m-5">
      <div className="card">
        <div className="card-body">
          <h3> Contador</h3>
          <hr />
          <div className="d-flex justify-content-center">
            <h1 className="my-5">{count}</h1>
          </div>

          <button
            onClick={() => {
              setcount(count + 1);
            }}
            type="button"
            className="btn btn-primary me-1"
          >
            +1
          </button>
          <button
            onClick={() => {
              setcount(count - 1);
            }}
            type="button"
            className="btn btn-primary me-1"
          >
            -1
          </button>
          <button
            onClick={() => {
              setcount(0);
            }}
            type="button"
            className="btn btn-danger me-1"
          >
            reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
