import React, { useState, useEffect } from "react";
import "../index.css"
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import TripPage from "./TripPage";

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
        <Route path="/trips">
           <TripPage 
            tripData={tripData} 
            eventsData={eventsData}
          />
        </Route>
        <Route path="/budget">
          {/* enter budget component here */}
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
// -----Events list (each list is unique to each trip/only pulls up that trips events)
// ------submit event
// --budget page 
// ---budget list (each card with trip name on it and button to)
// ---budget pie graph


// for each trip, we want to route to a page where we can see that trips events, we want our code
// to pull in ONLY events for that trip.. 

// should be able to do this by comparing the trip ID from our trips data and the trip_id that is 
// saved to our events entry when a new event is created. 

// ** can create a select with each trip name in it that updates and when the form is submitted
// we can use some logic to 


// want to be able to click on a trip and it take you to events related to that trip

// want to click on the budget tab and it takes you to a page where each event is 
// listed under each category