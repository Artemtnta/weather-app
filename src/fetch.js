export function fetchPlace() {
  navigator.geolocation.getCurrentPosition((pos) => {
    const { latitude, longitude } = pos.coords;
    const urlPlace = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
    fetch(urlPlace)
      .then((r) => r.json())
      .then((d) => {
        console.log(d.address.city);
      });
  });
}
