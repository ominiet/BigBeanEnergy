let x;

if (navigator.geolocation) {
    x = navigator.geolocation.getCurrentPosition(showPosition);
}
else {
    x = "Geolocation is not supported by this browser.";
}

function showPosition(position) {
  alert( "Latitude: " + position.coords.latitude +
  "\nLongitude: " + position.coords.longitude);
}
