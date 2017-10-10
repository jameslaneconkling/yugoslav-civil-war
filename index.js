import mapboxgl from 'mapbox-gl';
import style from './mb-style/style';
window.mapboxgl = mapboxgl;
window.style = style;

mapboxgl.accessToken = 'pk.eyJ1IjoiamFtZXMtbGFuZS1jb25rbGluZyIsImEiOiJ3RHBOc1BZIn0.edCFqVis7qgHPRgdq0WYsA';

const map = new mapboxgl.Map({
  container: 'map',
  style: style
});

map.on('error', ({ error }) => {
  const errors = document.getElementById('errors');
  errors.style.display = 'block';
  errors.appendChild(document.createElement('h2')).innerHTML = 'Script Evaluation Error';
  errors.appendChild(document.createElement('pre')).innerHTML = error.message;
  console.error(error);
});
