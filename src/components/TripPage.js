import React, { useEffect, useState } from "react";
import TripForm from "./TripForm"
import TripList from "./TripList";

function TripsPage() {
  const [tripData,setTripData] = useState([])

  useEffect(()=> {
    fetch("http://localhost:3000/trips")
    .then(response => response.json()
    .then(data=> setTripData(data)))
  }, [])

  return (
    <div>
      Check out my trips!
      <TripForm />
      <TripList tripData={tripData} /> 
    </div>
  )
}

export default TripsPage;