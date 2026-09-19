/* Hallmark · component: journey map · P4 H4 E4 S5 R5 V4 */
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
  // Gentle schematic arcs connect life stages, rather than physical travel routes.
  route.slice(1).forEach((destination, index) => {
    const start = map.project(route[index], 0);
    const end = map.project(destination, 0);
    const control = L.point(
      (start.x + end.x) / 2 - (end.y - start.y) * 0.26,
      (start.y + end.y) / 2 + (end.x - start.x) * 0.26
    );
    const points = Array.from({length: 33}, (_, step) => {
      const t = step / 32;
      return L.point(
        (1 - t) ** 2 * start.x + 2 * (1 - t) * t * control.x + t ** 2 * end.x,
        (1 - t) ** 2 * start.y + 2 * (1 - t) * t * control.y + t ** 2 * end.y
      );
    });
    L.polyline(points.map(point => map.unproject(point, 0)), {
      color: accent, weight: 1.6, opacity: 0.8, smoothFactor: 0, interactive: false
    }).addTo(map);
    const angle = Math.atan2(points[19].y - points[17].y, points[19].x - points[17].x) * 180 / Math.PI;
    L.marker(map.unproject(points[18], 0), {
      interactive: false, keyboard: false,
      icon: L.divIcon({className: 'journey-direction', html: '<span aria-hidden="true" style="transform:rotate(' + (angle + 45) + 'deg)"></span>', iconSize: [8, 8], iconAnchor: [4, 4]})
    }).addTo(map);
  });
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
    place.marker = L.marker(place.coords, {title: place.label, alt: place.label, icon: L.divIcon({className: 'journey-pin' + (id === 'hongkong' ? ' journey-pin--current' : ''), html: '<i aria-hidden="true"></i><span>' + place.label.split(' · ')[0] + '</span>', iconSize: [12, 12], iconAnchor: [6, 6]})}).addTo(map).bindPopup(place.label);
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
