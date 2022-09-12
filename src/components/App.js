import React, { useState, useEffect } from "react";
import "../index.css"
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import TripPage from "./TripPage";
import EventSubmit from "./EventSubmit";
import BudgetPage from "./BudgetPage";

function App() {

  const [tripData,setTripData] = useState([])
  const [eventsData, setEventsData] = useState([])

  useEffect(()=> {
    fetch("http://localhost:3000/trips")
    .then(response => response.json()
    .then(data=> setTripData(data)))
  }, [])

  useEffect(() => {
    fetch("http://localhost:3000/events")
    .then(response => response.json())
    .then(data =>  setEventsData(data))
  },[] )

  return (
    <div>
      <NavBar />
      <Switch>
        <Route  path="/" exact>
          <Home />
        </Route>
        <Route path="/Trips">
           <TripPage 
            tripData={tripData} 
            eventsData={eventsData}
          />
        </Route>
        <Route path="/Event_Form">
          <EventSubmit eventsData={eventsData} />
        </Route>
        <Route path="/Budget">
          <BudgetPage tripData={tripData} />
        </Route>
      </Switch>
    </div>
  )

}

export default App; 


// - App
// --NavBar
// --Home
// --TripsPage
// ---New Trip Form
// ---Trip List
// ----Trip card

// -----Events Page
// --Submit event
// --budget page 
// ---budget list
// ---budget pie graph


// for each trip, we want to route to a page where we can see that trips events, we want our code
// to pull in ONLY events for that trip.. 

// should be able to do this by comparing the trip ID from our trips data and the trip_id that is 
// saved to our events entry when a new event is created. 