import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createScriptLoadMap } from './MapService';

import './Map.scss';

const Map = ({ data }) => {
  // const [data, setdata] = useState([]);

  const loaderMarkerToMap = (map) => {
    const google = window.google;
    const markersData = data.filter(d => d.latlng);

    const infowindow = new google.maps.InfoWindow();

    markersData.forEach((markerData, index) => {
      const marker = new google.maps.Marker({
        position: {
          lat: markerData.latlng.latitude,
          lng: markerData.latlng.longitude,
        },
        map,
        class: 'hello',
        iconSize: (100, 100),
      });
      google.maps.event.addListener(marker, 'click', (function (mapMarker, i) {
        return function () {
          infowindow.setContent(markerData.locations);
          infowindow.open(map, mapMarker);
        };
      }(marker, index)));
    });
  };

  useEffect(() => {
    if (data.length !== 0) {
      createScriptLoadMap().then(() => {
        window.globalMap.setCenter({
          lat: data[0].latlng ? data[0].latlng.latitude : 37.7749,
          lng: data[0].latlng ? data[0].latlng.longitude : -122.4194,
        });
        loaderMarkerToMap(window.globalMap);
      });
    }
  }, [data.length]);

  return (
    <div id="map" />
  );
};

Map.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default Map;
