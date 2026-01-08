let map, marker;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -6.2, lng: 106.8 },
    zoom: 15
  });

  marker = new google.maps.Marker({
    map,
    position: { lat: -6.2, lng: 106.8 }
  });
}

function getLocation() {
  if (!navigator.geolocation) {
    alert("GPS tidak didukung");
    return;
  }

  navigator.geolocation.getCurrentPosition(pos => {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;

    map.setCenter({ lat, lng });
    marker.setPosition({ lat, lng });
  });
}
