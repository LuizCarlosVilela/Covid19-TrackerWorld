import React from "react";
import "./styles.css";

import { showDataOnMap } from "../../util";

import { Map as LeafletMap, TileLayer } from "react-leaflet";

function Map({ countries, center, zoom, casesType }) {
  return (
    <div className="map">
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.linkedin.com/in/luiz-carlos-vilela/">Luiz C. Vilela Developer</a>'
        />

        {showDataOnMap(countries, casesType)}
      </LeafletMap>
    </div>
  );
}

export default Map;
