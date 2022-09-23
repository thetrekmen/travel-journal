import React from 'react';
import './Location.css'

export default function Location(props) {
  return (
    <div className="location-container" >
      <img className="location--img" src={props.img} alt="" />
      <div className="location--detail-container" >
        <div className='detail-container-location' >
          <img className='detail-img-pin' src={props.pinSrc} alt="" />
          <p className="detail-country" >{props.country}</p>
          <a className='detail-googlemaps' href={props.googleMap}>View on Google Maps</a>
        </div>
        <h1 className='location--detail-title' >{props.location}</h1>
        <p className='location--detail-date' ><strong>{`${props.startDate} - ${props.endDate}`}</strong></p>
        <p className='location--detail-detail' >{props.fact}</p>
      </div>
    </div>
  )
}