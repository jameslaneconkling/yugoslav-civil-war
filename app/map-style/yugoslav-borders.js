import chroma from 'chroma-js';

const rgba2String = rgba => `rgba(${rgba.join()})`

const lblue = 'hsl(227, 100%, 89%)';
// const cyan = 'hsl(176, 100%, 89%)';
const peach = 'hsl(33, 100%, 85%)'; // increase red
const dgreen = '#AEE673';
// const lgreen = 'hsl(98, 100%, 89%)';
const pink = 'hsl(335, 100%, 89%)';
const gray = 'rgba(165, 165, 165, 0.6)'; // ?

// const dred = '#DD2525';
const lorange = '#F6C75B';
// const dorange = '#F88800';
const lpurple = '#CBADDB';
// const dpurple = '#B294BB';
const yellow = '#F9FF7E'; // decrease saturation
// const brown = '#AC5E1C';

const stops = [
  // blue
  ["Yugoslavia", lblue],
  // red
  ["Slovenia", peach],
  // green
  ["Croatia", dgreen],
  // yellow
  ["Macedonia", pink],
  // blue2
  ["Montenegro", yellow],
  // gray
  ["Kosovo", gray],

  // orange
  ["Republic of Bosnia and Herzegovina", lorange],
  ["Herzeg-Bosnia", lorange],
  ["Western Bosnia", lorange],
  ["Bosnia and Herzegovina", lorange],

  // purple
  ["Serbia Krajina", lpurple],
  ["Republika Srpska", lpurple],
  ["Serbia and Montenegro", lpurple],
  ["Serbia", lpurple]
]

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
      "stops": stops
        .map(([name, color]) => ([name, rgba2String(chroma(color).alpha(0.6).rgba())]))
    }
  }
}));

export const borders = layerIds.reduce((acc, id) => ([
  ...acc,
  {
    "id": `${id}-halo`,
    "type": "line",
    "metadata": {
      "mapbox:group": "0177110e8579ac34b6a5a0ccf4dce844"
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
      "line-opacity": id === 'y1989-01-01' ? 0.6 : 0,
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
      "line-width": 1,
      "line-color": "#888",
      "line-offset": 0
    }
  }
]), []);
