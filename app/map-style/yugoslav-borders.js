import chroma from 'chroma-js';
import {
  yugoslavia,
  slovenia,
  croatia,
  herzegBosnia,
  macedonia,
  montenegro,
  kosovo,
  republicOfBosniaAndHerzegovina,
  westernBosnia,
  bosniaAndHerzegovina,
  serbiaKrajina,
  republikaSrpska,
  serbiaAndMontenegro,
  serbia
} from './palette';

const stops = [
  ["Yugoslavia",  yugoslavia],
  ["Slovenia", slovenia],
  ["Croatia", croatia],
  ["Herzeg-Bosnia", herzegBosnia],
  ["Macedonia", macedonia],
  ["Montenegro", montenegro],
  ["Kosovo", kosovo],
  ["Republic of Bosnia and Herzegovina", republicOfBosniaAndHerzegovina],
  ["Western Bosnia", westernBosnia],
  ["Bosnia and Herzegovina", bosniaAndHerzegovina],
  ["Serbia Krajina", serbiaKrajina],
  ["Republika Srpska", republikaSrpska],
  ["Serbia and Montenegro", serbiaAndMontenegro],
  ["Serbia", serbia]
];

const layerIds = [
  'y1989-01-01', 'y1991-06-25', 'y1991-09-25', 'y1992-03-03', 'y1992-04-07', 'y1992-04-28', 'y1993-06-13', 'y1995-09-15', 'y1995-12-14', 'y1998-01-15', 'y2006-06-05', 'y2008-02-17'
  // 'y2008-02-17'
];
export const labels = layerIds.map(id => ({
  "id": `${id}-label`,
  "type": "symbol",
  "source": "composite",
  "source-layer": `${id}-centroid`,
  "filter": ["==", "$type", "Point"],
  "layout": {
    // "visibility": "visible",
    "visibility": "none",
    "text-field": "{ADMIN}",
    "text-ignore-placement": true,
    "text-font": [
      "PT Sans Regular"
    ],
    "text-size": {
      "base": 1,
      "stops": [[1, 8], [6, 16]
      ]
    },
    "text-letter-spacing": 0.05,
    "text-max-width": {
      "base": 1,
      "stops": [[0, 5], [3, 6]]
    }
  },
  "paint": {
    // "text-opacity": id === 'y1989-01-01' ? 1 : 0,
    "text-opacity": 1,
    "text-color": "#888",
    "text-halo-width": 2,
    "text-halo-color": {
      "base": 1,
      "type": "categorical",
      "property": "ADMIN",
      "stops": stops,
        // .map(([name, color]) => ([name, rgba2String(chroma(color).alpha(0.6).rgba())]))
      "default": "black"
    }
  }
}));

export const borders = layerIds.reduce((acc, id) => ([
  ...acc,
  {
    "id": `${id}-halo`,
    "type": "line",
    "metadata": {
      "mapbox:group": "21034a92f5076623a6bc315320446bd2"
    },
    "source": "composite",
    "source-layer": id,
    "filter": ["==", "$type", "Polygon"],
    "layout": {
      "visibility": "visible",
      "line-join": "bevel",
      "line-miter-limit": 2,
      "line-cap": "square"
    },
    "paint": {
      "line-opacity": id === 'y1989-01-01' ? 1 : 0,
      "line-offset": {
        "base": 1,
        "stops": [[4, 2], [16, 6]]
      },
      "line-width": {
        "base": 1,
        "stops": [[4, 4], [16, 12]]
      },
      "line-color": {
        "base": 1,
        "type": "categorical",
        "property": "ADMIN",
        "stops": stops,
        "default": "black"
      },
      "line-opacity-transition": {
        "duration": 0
      },
    }
  },
  {
    "id": id,
    "type": "line",
    "metadata": {
      "mapbox:group": "0177110e8579ac34b6a5a0ccf4dce844"
    },
    "source": "composite",
    "source-layer": id,
    "filter": ["==", "$type", "Polygon"],
    "layout": {
      "visibility": "visible",
      "line-cap": "square",
      "line-miter-limit": 1.5
    },
    "paint": {
      "line-opacity": id === 'y1989-01-01' ? 1 : 0,
      "line-opacity-transition": {
        "duration": 0
      },
      "line-width": 1,
      "line-color": "#888",
      "line-offset": 0
    }
  }
]), []);
