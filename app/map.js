/* global process */
import mapboxgl from 'mapbox-gl';
import style from './map-style';
import {
  decrementLayerIdx
} from './state';


if (process.env.NODE_ENV === 'development') {
  window.mapboxgl = mapboxgl;
  window.style = style;
}


mapboxgl.accessToken = 'pk.eyJ1IjoiamFtZXMtbGFuZS1jb25rbGluZyIsImEiOiJ3RHBOc1BZIn0.edCFqVis7qgHPRgdq0WYsA';
const map = new mapboxgl.Map({
  container: 'map',
  style: style
});

map.on('error', ({ error }) => {
  if (process.env.NODE_ENV === 'development') {
    const errors = document.getElementById('errors');
    errors.style.display = 'block';
    errors.appendChild(document.createElement('h2')).innerHTML = 'Script Evaluation Error';
    errors.appendChild(document.createElement('pre')).innerHTML = error.message;
  }
  console.error(error);
});

export const drawLayer = (state) => {
  const { id: currentLayerId } = state.layers[state.currentLayerIdx];
  const { id: previousLayerId } = state.layers[decrementLayerIdx(state)];

  map
    .setPaintProperty(previousLayerId, 'line-opacity', 0)
    .setPaintProperty(currentLayerId, 'line-opacity', 1)
    .setPaintProperty(`${previousLayerId}-halo`, 'line-opacity', 0)
    .setPaintProperty(`${currentLayerId}-halo`, 'line-opacity', 1)
    // .setPaintProperty(`${previousLayerId}-label`, 'text-opacity', 0)
    // .setPaintProperty(`${currentLayerId}-label`, 'text-opacity', 1);
    // .setLayoutProperty(`${previousLayerId}-label`, 'visibility', 'none')
    // .setLayoutProperty(`${currentLayerId}-label`, 'visibility', 'visible');
};

export default map;
