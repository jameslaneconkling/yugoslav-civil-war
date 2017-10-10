import {
  disintegration,
  disintegrationLabel
} from './disintegration';
import {
  landcover,
  contour,
  hillshade,
  waterway,
  adminBoundaries,
  provinceBoundaries,
  trail,
  label
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
      "1444934295202.7542": {
        "name": "Admin boundaries",
        "collapsed": true
      },
      "1444856151690.9143": {
        "name": "State labels",
        "collapsed": true
      },
      "0177110e8579ac34b6a5a0ccf4dce844": {
        "name": "Disintegration",
        "collapsed": true
      },
      "1444933808272.805": {
        "name": "Water labels",
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
      "b252a402b40725b210859d09efd07b44": {
        "name": "Group",
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
      "cd0fbeb8e64eca7ba1b95d87c64df8a7": {
        "name": "Trail",
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
    17.35931170743993,
    44.22337867506434
  ],
  "zoom": 6,
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
  "sprite": "mapbox://sprites/james-lane-conkling/cj8djjy2997m82roa7yx5g8z4",
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
    ...adminBoundaries,
    ...provinceBoundaries,
    ...disintegration,
    ...trail,
    ...label,
    ...disintegrationLabel
  ],
  "created": "2017-10-04T21:24:40.209Z",
  "id": "cj8djjy2997m82roa7yx5g8z4",
  "modified": "2017-10-04T23:25:48.438Z",
  "owner": "james-lane-conkling",
  "visibility": "private",
  "draft": false
}