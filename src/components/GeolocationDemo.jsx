import useGeolocation from "../hooks/useGeolocation";

 function GeolocationDemo() {
  const { latitude, longitude, error } = useGeolocation();

  return (
    <div>
      <h2>14.useGeolocation</h2>
      {error && <p>{error}</p>}
      <p>Latitude: {latitude}</p>
      <p>Longitude: {longitude}</p>
    </div>
  );
}

export default GeolocationDemo;