import './reset.css';
import '../node_modules/mapbox-gl/dist/mapbox-gl.css'
import './style.css'
import state, {
  incrementLayerIdx
} from './state';
import map, {
  drawLayer
} from './map';
import {
  drawTitle
} from './title';


const update = () => {
  drawLayer(state);
  drawTitle(state);
};

map.on('load', () => {
  update();

  setInterval(() => {
    state.currentLayerIdx = incrementLayerIdx(state);
    update();
  }, 3000);
});
