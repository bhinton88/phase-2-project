import React from "react";
import EventsList from "./EventsList";
import EventSubmit from "./EventSubmit";

function EventsPage({ tripId, eventsData }) {

return (
  <div>
    <EventSubmit tripId={tripId} />
    <EventsList eventsData={eventsData} tripId={tripId} />
  </div>
)

}

export default EventsPage;


// -EventsPage
// --EventsList
// --EventsForm