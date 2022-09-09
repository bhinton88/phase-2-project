import React, { useState } from "react";
import EventsPage from "./EventsPage";


function TripCard({ trip, eventsData }) {

  const [toggleEvents, setToggleEvents] = useState(false)

  function handleClick (event) {
    setToggleEvents( toggleEvents => !toggleEvents)
    console.log(event.target.id)
  }


  return(
    <div id="tripCard">
      <div className="ui card">
        <div className="content">
          <div className="header">{trip.tripName}</div>
        </div>
        <div className="content">
          <h4 className="ui sub header">Countries Visited:</h4>
            <div className="ui small feed">
              <div className="event">
                <div className="content">
                  <div className="summary">
                    <ul>
                    {trip.countries.map(value => <li key={value} >{value}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="event">
                <div className="content">
                  <div className="summary">
                    <p>Trip Start Date: {trip.start_date}</p>
                    <p>Trip End Date: {trip.end_date}</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div className="content">
          <button id={trip.id} className="ui button" onClick={handleClick}>{toggleEvents ? "Hide Trip Events" : "Show Trip Events"}</button>
          {toggleEvents ? <EventsPage eventsData={eventsData} tripId={trip.id} /> : null}
        </div>
   </div>
</div>


  )
}


export default TripCard;

// when the button is clicked, the events will show below the trip, use a toggle state variable 