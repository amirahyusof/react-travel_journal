import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from "./components/App";
import Navbar from "./components/Navbar";

const display = document.getElementById("root")

function Journal() {
  return(
    <div>
      <Navbar />
      <section className="card-list">
      <App />
      </section>
    </div>
  )
}

ReactDOM.render(<Journal />, display)


