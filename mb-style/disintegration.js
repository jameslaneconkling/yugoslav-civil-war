
const lblue = '#ABCBE6';
const dblue = '#3C6DBB';
const lgreen = '#AEE673';
const dgreen = '#2EA700';
const lred = '#F69C9A';
const dred = '#DD2525';
const lorange = '#F6C75B';
const dorange = '#F88800';
const lpurple = '#CBADDB';
const dpurple = '#6F20A4';
const yellow = '#F9FF7E';
const brown = '#AC5E1C';

const stops = [
  ["Yugoslavia", lblue],
  ["Slovenia", dblue],
  ["Croatia", lgreen],
  ["Macedonia", lred],
  ["Republic of Bosnia and Herzegovina", dred],
  ["Herzeg-Bosnia", lorange],
  ["Western Bosnia", brown],
  ["Bosnia and Herzegovina", brown],
  ["Serbia Krajina", dgreen],
  ["Republika Srpska", lpurple],
  ["Serbia and Montenegro", yellow],
  ["Serbia", dpurple],
  ["Montenegro", lblue],
  ["Kosovo", dgreen],
]

const layerIds = [
  // 'y1989-01-01', 'y1991-06-25', 'y1991-09-25', 'y1992-03-03', 'y1992-04-07', 'y1992-04-28', 'y1993-06-13', 'y1995-09-15', 'y1995-12-14', 'y1998-01-15', 'y2006-06-05', 'y2008-02-17'
  'y2008-02-17'
];
export const disintegrationLabel = layerIds.map(id => ({
  "id": `${id}-label`,
  "type": "symbol",
  "source": "composite",
  "source-layer": `${id}-centroid`,
  "filter": ["==", "$type", "Point"],
  "layout": {
    "text-field": "{ADMIN}",
    "text-font": [
      "PT Sans Regular"
    ],
    "text-size": {
      "base": 1,
      "stops": [[1, 8], [6, 20]
      ]
    },
    "text-letter-spacing": 0.05,
    "text-max-width": {
      "base": 1,
      "stops": [[0, 5], [3, 6]]
    }
  },
  "paint": {
    "text-halo-width": 1.5,
    "text-color": "#888",
    // "text-halo-color": "rgba(255,255,255,0.75)",
    "text-halo-color": {
      "base": 1,
      "type": "categorical",
      "property": "ADMIN",
      "stops": stops
    }
  }
}));

export const disintegration = layerIds.reduce((acc, id) => ([
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
      "line-opacity": 0.6
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
      "line-width": 1,
      "line-color": "#888",
      "line-opacity": 1,
      "line-offset": 0
    }
  }
]), []);
