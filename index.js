import mapboxgl from 'mapbox-gl';
import style from './mb-style/style';
window.mapboxgl = mapboxgl;
window.style = style;

mapboxgl.accessToken = 'pk.eyJ1IjoiamFtZXMtbGFuZS1jb25rbGluZyIsImEiOiJ3RHBOc1BZIn0.edCFqVis7qgHPRgdq0WYsA';

const layers = ['y1989-01-01', 'y1991-06-25', 'y1991-09-25', 'y1992-03-03', 'y1992-04-07', 'y1992-04-28', 'y1993-06-13', 'y1995-09-15', 'y1995-12-14', 'y1998-01-15', 'y2006-06-05', 'y2008-02-17'];

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


map.on('load', () => {
  let currentLayerIdx = layers.length - 1;
  let newLayerIdx;

  const drawLayer = () => {
    newLayerIdx = (currentLayerIdx + 1) % layers.length;
    console.log(layers[newLayerIdx]);

    map
      .setPaintProperty(layers[currentLayerIdx], 'line-opacity', 0)
      .setPaintProperty(`${layers[currentLayerIdx]}-halo`, 'line-opacity', 0)
      // .setPaintProperty(`${layers[currentLayerIdx]}-label`, 'text-opacity', 0)
      // .setLayoutProperty(`${layers[currentLayerIdx]}-label`, 'visibility', 'none')
      .setPaintProperty(layers[newLayerIdx], 'line-opacity', 1)
      .setPaintProperty(`${layers[newLayerIdx]}-halo`, 'line-opacity', 0.6)
      // .setPaintProperty(`${layers[newLayerIdx]}-label`, 'text-opacity', 1);
      // .setLayoutProperty(`${layers[newLayerIdx]}-label`, 'visibility', 'visible');

      currentLayerIdx = newLayerIdx;
  };

  setInterval(drawLayer, 3000);
  drawLayer();
});
