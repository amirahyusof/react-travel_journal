import React from "react";


function App(){
  return(
    <div className="card-container">
      <img src="./images/Japan.jpg" alt="Japan" className="travel-img" />
      <div className="card-description">
      <p>
        <span className="travel-icon"><i class="fa-solid fa-location-dot"></i></span>
        <span className="travel-country"> Japan </span> 
        <a href="https://maps.app.goo.gl/ewUxrJEa2RwVaP5A9" className="travel-maps">View on Google Maps</a>
      </p>
      <div className="travel-description">
      <h1 className="travel-title">Mount Fuji</h1>
      <p className="travel-date">
        <span className="start-date">12 Jan 2023</span> - <span className="end-date">24 Jan 2023</span>
        </p>
      <p className="travel-inform">Mount Fuji is an iconic symbol of Japan, an active stratovolcano and the highest peak in the country. 
        Its near-perfect conical shape, serene lakes, and surrounding landscapes make it a UNESCO World Heritage Site. 
        Visitors often hike the mountain or enjoy its stunning views from nearby attractions.
        </p>
      </div>
      
      </div>
    </div>
    
  )
}

export default App