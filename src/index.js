import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from "./components/App";

const display = document.getElementById("root")

function Journal() {
  return(
    <div>
      <section className="card-list">
      <App />
      </section>
    </div>
  )
}

ReactDOM.render(<Journal />, display)


