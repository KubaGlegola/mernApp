import React, { useRef } from "react";
// import { default as MapOL } from "ol/Map.js";
// import OSM from "ol/source/OSM.js";
// import TileLayer from "ol/layer/Tile.js";
// import View from "ol/View.js";

import "./Map.css";

const Map = (props) => {
  const mapRef = useRef();

  // const { center, zoom } = props;

  // useEffect(() => {
  //   new MapOL({
  //     target: mapRef.current.id,
  //     layers: [
  //       new TileLayer({
  //         source: new OSM(),
  //       }),
  //     ],
  //     view: new View({
  //       center: [center.lng, center.lat],
  //       zoom: zoom,
  //     }),
  //   });
  // }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
      id="map"
    ></div>
  );
};

export default Map;
