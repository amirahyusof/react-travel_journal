import React from "react";


function App(props){
  return(
    <div className="card-container">
      <img src={props.image} alt="place-visiting" className="travel-img" />
      <div className="card-description">
      <p>
        <span className="travel-icon"><i class="fa-solid fa-location-dot"></i></span>
        <span className="travel-country"> {props.country} </span> 
        <a href={props.maps} className="travel-maps">View on Google Maps</a>
      </p>
      <div className="travel-description">
      <h1 className="travel-title">{props.place}</h1>
      <p className="travel-date">
        <span className="start-date">{props.startDate}</span> - <span className="end-date">{props.endDate}</span>
        </p>
      <p className="travel-inform">{props.inform}</p>
      </div>
      
      </div>
    </div>
    
  )
}

export default App