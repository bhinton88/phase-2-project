import React, { useState } from "react";
import EventsPage from "./EventsPage";


function TripCard({ trip, eventsData }) {

  const [toggleEvents, setToggleEvents] = useState(false)

  function handleClick (event) {
    setToggleEvents( toggleEvents => !toggleEvents)
    console.log(event.target)
  }


  return(
    <div id="tripCard">
      <div className="ui card">
        <div className="content">
          <div className="header">{trip.tripName}</div>
        </div>
        <div className="content">
          <h4 className="ui sub header">Details:</h4>
          <div className="ui small feed">
            <div className="event">
              <div className="content">
                <p>Countries planning to visit:</p>
                <ul>
                  {trip.countries.map(value => <li key={value} >{value}</li>)}
                </ul>
              </div>
            </div>
            <div className="event">
              <div className="content">
                <p>Start date: {trip.start_date}</p>
                <p>End date: {trip.end_date} </p>
              </div>
            </div>
          </div>
        </div>
        <div className="extra content">
          <button className="ui button">Take me to the budget</button>
        </div>
        <div className="extra content">
          <button 
            className="ui button"
            onClick={handleClick}
          >
          {toggleEvents ? "Hide Trip Events" : "Show Trip Events"}
          </button>
        </div>
        <div>
          {toggleEvents ? <EventsPage /> : null}
        </div>
      </div>
    </div>
  )
}


export default TripCard;

// when the button is clicked, the events will show below the trip, use a toggle state variable 