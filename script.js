let map, marker;

function initMap(lat = -6.200000, lng = 106.816666) {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat, lng },
    zoom: 15,
    styles: [
      { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] }
    ]
  });

  marker = new google.maps.Marker({
    position: { lat, lng },
    map: map
  });
}

function getLocation() {
  const status = document.getElementById("status");

  if (navigator.geolocation) {
    status.innerHTML = "📡 Mengambil lokasi...";
    navigator.geolocation.getCurrentPosition(pos => {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;

      map.setCenter({ lat, lng });
      marker.setPosition({ lat, lng });

      status.innerHTML = "✅ Lokasi berhasil dilacak";
    }, () => {
      status.innerHTML = "❌ Izin lokasi ditolak";
    });
  } else {
    status.innerHTML = "❌ Browser tidak mendukung GPS";
  }
}
