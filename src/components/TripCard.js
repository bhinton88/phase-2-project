import React, { useState } from "react";
import EventsPage from "./EventsPage";


function TripCard({ trip, eventsData }) {

  const [toggleEvents, setToggleEvents] = useState(false)

  function handleClick (event) {
    setToggleEvents( toggleEvents => !toggleEvents)
    console.log(toggleEvents)
  }


  return(
    <div id="tripCard">
      <div id="tripInfo">
        <h3>{trip.tripName}</h3>
        <p>Countries planning to visit:</p>
        <ul>
          {trip.countries.map(value => <li key={value} >{value}</li>)}
        </ul>
        <p>Start date: {trip.start_date}</p>
        <p>End date: {trip.end_date} </p>
      </div>
      <div id="infoButtons">
        <button>Take me to the budget</button>

        <button onClick={handleClick}>
        {toggleEvents ? "Hide Trip Events" : "Show Trip Events"}
        </button>
      </div>
      {toggleEvents ? <EventsPage tripId={trip.id} eventsData={eventsData} /> : null}
    </div>
  )
}


export default TripCard;

// when the button is clicked, the events will show below the trip, use a toggle state variable 