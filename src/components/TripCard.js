import React from "react";


function TripCard({ value }) {

  return(
    <div>
      <div className="ui card">
        <div className="content">
          <div className="header">{value.tripName}</div>
        </div>
        <div className="content">
          <h4 className="ui sub header">Details:</h4>
          <div className="ui small feed">
            <div className="event">
              <div className="content">
                <p>Countries planning to visit:</p>
                <ul>
                  {value.countries.map(value => <li key={value} >{value}</li>)}
                </ul>
              </div>
            </div>
            <div className="event">
              <div className="content">
                <p>Start date: {value.start_date}</p>
                <p>End date: {value.end_date} </p>
              </div>
            </div>
          </div>
        </div>
        <div className="extra content">
          <button className="ui button">Planned trip events</button>
        </div>
      </div>
    </div>
  )
}


export default TripCard;