
const initMap = () => {
  const googleMap = new window.google.maps.Map(document.getElementById('map'), {
    center: { lat: 37.7749, lng: -122.4194 },
    zoom: 11,
    mapTypeControl: false,
    streetViewControl: false,
  });
  window.globalMap = googleMap;
};

const createScriptLoadMap = () => new Promise((resolve, reject) => {
  if (!window.initMap) {
    const index = window.document.getElementsByTagName('script')[0];
    window.initMap = initMap;
    const script = window.document.createElement('script');
    script.src =
              `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAP_KEY}&callback=initMap`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve(window.globalMap);
    index.parentNode.insertBefore(script, index);
    // initMap()
  } else {
    initMap();
    return resolve(window.globalMap);
  }
});


export { initMap, createScriptLoadMap };
