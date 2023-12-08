import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from "./components/App";
import Navbar from "./components/Navbar";
import data from "./components/datatravel";

const display = document.getElementById("root")

function Journal() {
  const cardList = data.map( item => {
    return (
      <App
      image = {item.imageUrl}
      country = {item.title}
      maps = {item.googleMaps}
      place = {item.title}
      startDate = {item.startDate}
      endDate = {item.endDate}
      inform = {item.description}

      />
    )
  })
  return(
    <div>
      <Navbar />
      <section className="card-list">
      {cardList}
      </section>
    </div>
  )
}

ReactDOM.render(<Journal />, display)


