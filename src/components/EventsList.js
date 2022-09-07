import React from "react";

function EventsList({ tripId, eventsData }) {


  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Event</th>
            <th>Category</th>
            <th>Date of Event</th>
          </tr>
        </thead>
        <tbody>
          {eventsData
          .filter(value => tripId === value.trip_id)
          .map(value => 
                <tr key={value.id}>
                  <td>{value.event}</td>
                  <td>{value.category}</td>
                  <td>{value.date}</td>
                </tr>
              )
          }
        </tbody>
      </table>
    </div>
  )

}

export default EventsList;