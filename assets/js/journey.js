/* Chapters remain readable when the third-party map is unavailable. */
(() => {
  const el = document.querySelector('.leaflet-journey-map');
  if (!el || !window.L) return;
  const zh = el.dataset.mapLang === 'zh';
  const places = {
    hefei: {coords: [31.82, 117.23], label: zh ? '合肥 · 2003–2021' : 'Hefei · 2003–2021'},
    chengdu: {coords: [30.7522, 103.9865], label: zh ? '成都 · 西南交通大学' : 'Chengdu · SWJTU'},
    hongkong: {coords: [22.3047, 114.1796], label: zh ? '香港 · 香港理工大学' : 'Hong Kong · PolyU'}
  };
  el.querySelector('.map-fallback').remove();
  const styles = getComputedStyle(document.body);
  const accent = styles.getPropertyValue('--color-accent').trim();
  const map = L.map(el, {scrollWheelZoom: false});
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  const route = Object.values(places).map(place => place.coords);
  L.polyline(route, {color: accent, weight: 2.5, dashArray: '7 8'}).addTo(map);
  const bounds = L.latLngBounds(route);
  map.fitBounds(bounds, {padding: [40, 45]});
  const buttons = document.querySelectorAll('.place-select');
  function select(id) {
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.place === id)));
    document.querySelectorAll('.journey-chapter').forEach(chapter => chapter.classList.toggle('is-selected', chapter.id === 'chapter-' + id));
    map.setView(places[id].coords, 8, {animate: false});
    places[id].marker.openPopup();
  }
  Object.entries(places).forEach(([id, place]) => {
    place.marker = L.marker(place.coords, {title: place.label, alt: place.label, icon: L.divIcon({className: 'journey-pin', html: '<span>' + place.label.split(' · ')[0] + '</span>', iconSize: [100, 36], iconAnchor: [8, 18]})}).addTo(map).bindPopup(place.label);
    place.marker.on('click', () => select(id));
  });
  buttons.forEach(button => {
    button.setAttribute('aria-pressed', 'false');
    button.addEventListener('click', () => select(button.dataset.place));
  });
  const reset = document.querySelector('.map-reset');
  reset.hidden = false;
  reset.addEventListener('click', () => {
    map.fitBounds(bounds, {padding: [40, 45], animate: false});
    map.closePopup();
    buttons.forEach(button => button.setAttribute('aria-pressed', 'false'));
    document.querySelectorAll('.journey-chapter').forEach(chapter => chapter.classList.remove('is-selected'));
  });
})();
