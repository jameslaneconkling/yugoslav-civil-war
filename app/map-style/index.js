import {
  borders,
  // labels
} from './yugoslav-borders';
import {
  landcover,
  contour,
  hillshade,
  waterway,
  label as bgLabels
} from './background';


export default {
  "version": 8,
  "name": "Via Dinarica - Disintegration of Yugoslavia",
  "metadata": {
      "mapbox:autocomposite": true,
      "mapbox:type": "default",
      "mapbox:groups": {
          "494f0e870f148807f4626f0ff15f0846": {
              "name": "Landuse",
              "collapsed": true
          },
          "1444934749452.0452": {
              "name": "Wetlands",
              "collapsed": true
          },
          "21034a92f5076623a6bc315320446bd2": {
              "name": "Civil War halo",
              "collapsed": false
          },
          "1444856151690.9143": {
              "name": "State labels",
              "collapsed": true
          },
          "0177110e8579ac34b6a5a0ccf4dce844": {
              "name": "Civil War",
              "collapsed": false
          },
          "d24581424c9cbbf622ca0481f3ea6784": {
              "name": "Civil War Label",
              "collapsed": true
          },
          "1444933808272.805": {
              "name": "Labels",
              "collapsed": true
          },
          "14e9ed76f1fcd3196bd761d88e3f3adf": {
              "name": "Water",
              "collapsed": true
          },
          "1444855815295.714": {
              "name": "Hillshading",
              "collapsed": true
          },
          "1444855831248.8289": {
              "name": "Landcover",
              "collapsed": true
          },
          "1444856087950.3635": {
              "name": "Marine labels",
              "collapsed": true
          },
          "1444862510685.128": {
              "name": "City labels",
              "collapsed": true
          },
          "1444856144497.7825": {
              "name": "Country labels",
              "collapsed": true
          },
          "18ac6ee300f82f8be837f684f3fcb29b": {
              "name": "Place labels",
              "collapsed": true
          },
          "1444933837268.9458": {
              "name": "Contour lines",
              "collapsed": true
          }
      },
      "mapbox:trackposition": true
  },
  "center": [
      17.229050260105055,
      44.073008994861084
  ],
  "zoom": 5.747632710487703,
  "bearing": 0,
  "pitch": 0,
  "light": {
      "intensity": 0.44
  },
  "sources": {
      "composite": {
          "url": "mapbox://mapbox.mapbox-terrain-v2,mapbox.mapbox-streets-v7,james-lane-conkling.e0bdc6e8,james-lane-conkling.b6df218f,james-lane-conkling.cj69tfa6u0u7s2wn6id39yi4z-63fuj",
          "type": "vector"
      }
  },
  "sprite": "mapbox://sprites/james-lane-conkling/cj8mewomc6q1k2ss2max35o3m",
  "glyphs": "mapbox://fonts/james-lane-conkling/{fontstack}/{range}.pbf",
  "layers": [
    {
    "id": "background",
    "type": "background",
    "layout": {},
    "paint": {
        "background-color": "hsl(40, 80%, 98%)"
      }
    },
    ...landcover,
    ...contour,
    ...hillshade,
    ...waterway,
    ...borders,
    ...bgLabels
  ],
  "created": "2017-10-11T02:24:32.298Z",
  "id": "cj8mewomc6q1k2ss2max35o3m",
  "modified": "2017-10-15T18:55:46.191Z",
  "owner": "james-lane-conkling",
  "visibility": "private",
  "draft": false
};
