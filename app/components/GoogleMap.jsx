"use client";
import React from "react";
import GoogleMapReact from "google-map-react";

function GoogleMap(props) {
  // TODO::define and declare variables and state.
  const defaultProps = {
    center: [59.9988, 0.0024],
    zoom: 15,
  };

  // console.log("process.env.GoogleMapApiKey",pr)
  // TODO::define and declare helper methods
  function renderMarkers(map, maps) {
    let marker = new maps.Marker({
      position: props.coOrdinates,
      map,
      title: "Hello World!",
    });
  }

  return (
    // Important! Always set the container height explicitly
    <div className="h-full w-full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        center={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
      ></GoogleMapReact>
    </div>
  );
}

export default GoogleMap;
