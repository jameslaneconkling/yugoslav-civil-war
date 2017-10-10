const landcover = [
  {
    "id": "landcover_crop",
    "type": "fill",
    "metadata": {
      "mapbox:group": "1444855831248.8289"
    },
    "source": "composite",
    "source-layer": "landcover",
    "maxzoom": 12,
    "filter": [
      "==",
      "class",
      "crop"
    ],
    "layout": {
      "visibility": "visible"
    },
    "paint": {
      "fill-color": "hsl(65, 62%, 83%)",
      "fill-opacity": {
        "base": 1.5,
        "stops": [
          [
            2,
            0.3
          ],
          [
            12,
            0
          ]
        ]
      },
      "fill-antialias": false
    }
  },
  {
    "id": "landcover_grass",
    "type": "fill",
    "metadata": {
      "mapbox:group": "1444855831248.8289"
    },
    "source": "composite",
    "source-layer": "landcover",
    "maxzoom": 12,
    "filter": [
      "==",
      "class",
      "grass"
    ],
    "layout": {
      "visibility": "visible"
    },
    "paint": {
      "fill-color": "hsl(75, 62%, 81%)",
      "fill-opacity": {
        "base": 1.5,
        "stops": [
          [
            2,
            0.3
          ],
          [
            12,
            0
          ]
        ]
      },
      "fill-antialias": false
    }
  },
  {
    "id": "landcover_scrub",
    "type": "fill",
    "metadata": {
      "mapbox:group": "1444855831248.8289"
    },
    "source": "composite",
    "source-layer": "landcover",
    "maxzoom": 12,
    "filter": [
      "==",
      "class",
      "scrub"
    ],
    "layout": {
      "visibility": "visible"
    },
    "paint": {
      "fill-color": "hsl(75, 62%, 81%)",
      "fill-opacity": {
        "base": 1.5,
        "stops": [
          [
            2,
            0.3
          ],
          [
            12,
            0
          ]
        ]
      },
      "fill-antialias": false
    }
  },
  {
    "id": "landcover_wood",
    "type": "fill",
    "metadata": {
      "mapbox:group": "1444855831248.8289"
    },
    "source": "composite",
    "source-layer": "landcover",
    "maxzoom": 12,
    "filter": [
      "==",
      "class",
      "wood"
    ],
    "layout": {
      "visibility": "visible"
    },
    "paint": {
      "fill-color": "hsl(70, 45%, 73%)",
      "fill-opacity": {
        "base": 1.5,
        "stops": [
          [
            2,
            0.3
          ],
          [
            12,
            0
          ]
        ]
      },
      "fill-antialias": false
    }
  },
  {
    "id": "landcover_snow",
    "type": "fill",
    "metadata": {
      "mapbox:group": "1444855831248.8289"
    },
    "source": "composite",
    "source-layer": "landcover",
    "filter": [
      "==",
      "class",
      "snow"
    ],
    "layout": {
      "visibility": "visible"
    },
    "paint": {
      "fill-color": "hsl(0, 0%, 100%)",
      "fill-opacity": 0.2,
      "fill-antialias": false
    }
  },
  {
    "id": "national_park",
    "type": "fill",
    "metadata": {
      "mapbox:group": "494f0e870f148807f4626f0ff15f0846"
    },
    "source": "composite",
    "source-layer": "landuse_overlay",
    "filter": [
      "==",
      "class",
      "national_park"
    ],
    "layout": {
      "visibility": "none"
    },
    "paint": {
      "fill-color": "hsla(89, 58%, 76%, 0.4)",
      "fill-opacity": {
        "base": 1,
        "stops": [
          [
            5,
            0
          ],
          [
            8,
            0.6
          ]
        ]
      },
      "fill-outline-color": "hsl(89, 22%, 58%)"
    }
  },
  {
    "id": "scrub",
    "type": "fill",
    "metadata": {
      "mapbox:group": "494f0e870f148807f4626f0ff15f0846"
    },
    "source": "composite",
    "source-layer": "landuse",
    "minzoom": 9,
    "filter": [
      "==",
      "class",
      "scrub"
    ],
    "layout": {},
    "paint": {
      "fill-color": "hsl(75, 41%, 74%)",
      "fill-opacity": {
        "base": 1,
        "stops": [
          [
            9,
            0
          ],
          [
            15,
            0.2
          ]
        ]
      }
    }
  },
  {
    "id": "grass",
    "type": "fill",
    "metadata": {
      "mapbox:group": "494f0e870f148807f4626f0ff15f0846"
    },
    "source": "composite",
    "source-layer": "landuse",
    "minzoom": 9,
    "filter": [
      "==",
      "class",
      "grass"
    ],
    "layout": {},
    "paint": {
      "fill-color": "hsl(75, 41%, 74%)",
      "fill-opacity": {
        "base": 1,
        "stops": [
          [
            9,
            0
          ],
          [
            15,
            0.4
          ]
        ]
      }
    }
  },
  {
    "id": "wood",
    "type": "fill",
    "metadata": {
      "mapbox:group": "494f0e870f148807f4626f0ff15f0846"
    },
    "source": "composite",
    "source-layer": "landuse",
    "minzoom": 6,
    "filter": [
      "==",
      "class",
      "wood"
    ],
    "layout": {},
    "paint": {
      "fill-color": "hsl(75, 41%, 74%)",
      "fill-opacity": {
        "base": 1,
        "stops": [
          [
            7,
            0
          ],
          [
            15,
            0.5
          ]
        ]
      }
    }
  },
  {
    "id": "agriculture",
    "type": "fill",
    "metadata": {
      "mapbox:group": "494f0e870f148807f4626f0ff15f0846"
    },
    "source": "composite",
    "source-layer": "landuse",
    "minzoom": 11,
    "filter": [
      "==",
      "class",
      "agriculture"
    ],
    "layout": {},
    "paint": {
      "fill-opacity": {
        "base": 1,
        "stops": [
          [
            11,
            0
          ],
          [
            14,
            0.75
          ]
        ]
      },
      "fill-color": "hsl(75, 37%, 81%)",
      "fill-outline-color": "hsl(75, 32%, 68%)"
    }
  },
  {
    "id": "hospital",
    "type": "fill",
    "metadata": {
      "mapbox:group": "494f0e870f148807f4626f0ff15f0846"
    },
    "source": "composite",
    "source-layer": "landuse",
    "filter": [
      "==",
      "class",
      "hospital"
    ],
    "layout": {},
    "paint": {
      "fill-color": "hsl(0, 0, 94%)"
    }
  },
  {
    "id": "school",
    "type": "fill",
    "metadata": {
      "mapbox:group": "494f0e870f148807f4626f0ff15f0846"
    },
    "source": "composite",
    "source-layer": "landuse",
    "filter": [
      "==",
      "class",
      "school"
    ],
    "layout": {},
    "paint": {
      "fill-color": "hsl(0, 0, 94%)"
    }
  },
  {
    "id": "park",
    "type": "fill",
    "metadata": {
      "mapbox:group": "494f0e870f148807f4626f0ff15f0846"
    },
    "source": "composite",
    "source-layer": "landuse",
    "filter": [
      "in",
      "class",
      "park",
      "pitch"
    ],
    "layout": {
      "visibility": "visible"
    },
    "paint": {
      "fill-color": "hsla(89, 58%, 76%, 0.4)",
      "fill-opacity": {
        "base": 1,
        "stops": [
          [
            5,
            0
          ],
          [
            6,
            1
          ]
        ]
      }
    }
  },
  {
    "id": "glacier",
    "type": "fill",
    "metadata": {
      "mapbox:group": "494f0e870f148807f4626f0ff15f0846"
    },
    "source": "composite",
    "source-layer": "landuse",
    "minzoom": 9,
    "filter": [
      "==",
      "class",
      "glacier"
    ],
    "layout": {},
    "paint": {
      "fill-color": "hsl(210, 50%, 93%)",
      "fill-opacity": {
        "base": 1,
        "stops": [
          [
            9,
            0
          ],
          [
            10,
            0.5
          ]
        ]
      }
    }
  },
  {
    "id": "cemetery",
    "type": "fill",
    "metadata": {
      "mapbox:group": "494f0e870f148807f4626f0ff15f0846"
    },
    "source": "composite",
    "source-layer": "landuse",
    "filter": [
      "==",
      "class",
      "cemetery"
    ],
    "layout": {},
    "paint": {
      "fill-color": "hsl(0, 0%, 85%)"
    }
  },
  {
    "id": "industrial",
    "type": "fill",
    "metadata": {
      "mapbox:group": "494f0e870f148807f4626f0ff15f0846"
    },
    "source": "composite",
    "source-layer": "landuse",
    "filter": [
      "==",
      "class",
      "industrial"
    ],
    "layout": {},
    "paint": {
      "fill-color": "hsl(0, 0, 91%)",
      "fill-outline-color": "hsl(0, 0, 76%)"
    }
  },
  {
    "id": "sand",
    "type": "fill",
    "metadata": {
      "mapbox:group": "494f0e870f148807f4626f0ff15f0846"
    },
    "source": "composite",
    "source-layer": "landuse",
    "filter": [
      "==",
      "class",
      "sand"
    ],
    "layout": {},
    "paint": {
      "fill-color": "hsl(52, 80%, 94%)",
      "fill-opacity": {
        "base": 1,
        "stops": [
          [
            5,
            0
          ],
          [
            7,
            1
          ]
        ]
      }
    }
  }
];

const contour = [
  {
    "id": "contour-line",
    "type": "line",
    "metadata": {
      "mapbox:group": "1444933837268.9458"
    },
    "source": "composite",
    "source-layer": "contour",
    "filter": [
      "!in",
      "index",
      10,
      5
    ],
    "layout": {},
    "paint": {
      "line-opacity": {
        "base": 1.6,
        "stops": [
          [
            12,
            0.3
          ],
          [
            14,
            0.1
          ]
        ]
      },
      "line-color": "#666",
      "line-width": 0.5,
      "line-offset": {
        "base": 1,
        "stops": [
          [
            13,
            1
          ],
          [
            16,
            1.6
          ]
        ]
      }
    }
  },
  {
    "id": "contour-line-index",
    "type": "line",
    "metadata": {
      "mapbox:group": "1444933837268.9458"
    },
    "source": "composite",
    "source-layer": "contour",
    "filter": [
      "in",
      "index",
      10,
      5
    ],
    "layout": {},
    "paint": {
      "line-opacity": {
        "base": 1.6,
        "stops": [
          [
            12,
            0.45
          ],
          [
            14,
            0.2
          ]
        ]
      },
      "line-color": "#666",
      "line-width": 0.7,
      "line-offset": {
        "base": 1,
        "stops": [
          [
            13,
            0.6
          ],
          [
            16,
            1.2
          ]
        ]
      }
    }
  }
];

const hillshade = [
  {
    "id": "hillshade_shadow_faint",
    "type": "fill",
    "metadata": {
      "mapbox:group": "1444855815295.714"
    },
    "source": "composite",
    "source-layer": "hillshade",
    "maxzoom": 17,
    "filter": [
      "==",
      "level",
      89
    ],
    "layout": {},
    "paint": {
      "fill-color": "hsl(56, 59%, 22%)",
      "fill-opacity": {
        "stops": [
          [
            15,
            0.07
          ],
          [
            17,
            0
          ]
        ]
      },
      "fill-antialias": false
    }
  },
  {
    "id": "hillshade_shadow_med",
    "type": "fill",
    "metadata": {
      "mapbox:group": "1444855815295.714"
    },
    "source": "composite",
    "source-layer": "hillshade",
    "filter": [
      "==",
      "level",
      78
    ],
    "layout": {},
    "paint": {
      "fill-color": "hsl(56, 59%, 22%)",
      "fill-opacity": {
        "stops": [
          [
            15,
            0.07
          ],
          [
            17,
            0
          ]
        ]
      },
      "fill-antialias": false
    }
  },
  {
    "id": "hillshade_shadow_dark",
    "type": "fill",
    "metadata": {
      "mapbox:group": "1444855815295.714"
    },
    "source": "composite",
    "source-layer": "hillshade",
    "filter": [
      "==",
      "level",
      67
    ],
    "layout": {},
    "paint": {
      "fill-color": "hsl(56, 59%, 22%)",
      "fill-opacity": {
        "stops": [
          [
            15,
            0.08
          ],
          [
            17,
            0
          ]
        ]
      },
      "fill-antialias": false
    }
  },
  {
    "id": "hillshade_shadow_extreme",
    "type": "fill",
    "metadata": {
      "mapbox:group": "1444855815295.714"
    },
    "source": "composite",
    "source-layer": "hillshade",
    "maxzoom": 17,
    "filter": [
      "==",
      "level",
      56
    ],
    "layout": {},
    "paint": {
      "fill-color": "hsl(56, 59%, 22%)",
      "fill-opacity": {
        "stops": [
          [
            15,
            0.08
          ],
          [
            17,
            0
          ]
        ]
      },
      "fill-antialias": false
    }
  },
];

const waterway = [
  {
    "id": "waterway-river-canal-outline",
    "type": "line",
    "metadata": {
      "mapbox:group": "14e9ed76f1fcd3196bd761d88e3f3adf"
    },
    "source": "composite",
    "source-layer": "waterway",
    "minzoom": 8,
    "filter": [
      "in",
      "class",
      "canal",
      "river"
    ],
    "layout": {
      "line-cap": {
        "base": 1,
        "stops": [
          [
            0,
            "butt"
          ],
          [
            11,
            "round"
          ]
        ]
      },
      "line-join": "round"
    },
    "paint": {
      "line-color": "hsl(203, 37%, 73%)",
      "line-width": {
        "base": 1.3,
        "stops": [
          [
            8.5,
            1
          ],
          [
            20,
            11
          ]
        ]
      },
      "line-opacity": {
        "base": 1,
        "stops": [
          [
            8,
            0
          ],
          [
            8.5,
            1
          ]
        ]
      }
    }
  },
  {
    "id": "waterway-river-canal",
    "type": "line",
    "metadata": {
      "mapbox:group": "14e9ed76f1fcd3196bd761d88e3f3adf"
    },
    "source": "composite",
    "source-layer": "waterway",
    "minzoom": 8,
    "filter": [
      "in",
      "class",
      "canal",
      "river"
    ],
    "layout": {
      "line-cap": {
        "base": 1,
        "stops": [
          [
            0,
            "butt"
          ],
          [
            11,
            "round"
          ]
        ]
      },
      "line-join": "round"
    },
    "paint": {
      "line-color": "#FCFCFC",
      "line-width": {
        "base": 1.3,
        "stops": [
          [
            8.5,
            0.4
          ],
          [
            20,
            8
          ]
        ]
      },
      "line-opacity": {
        "base": 1,
        "stops": [
          [
            8,
            0
          ],
          [
            8.5,
            1
          ]
        ]
      }
    }
  },
  {
    "id": "waterway-small",
    "type": "line",
    "metadata": {
      "mapbox:group": "14e9ed76f1fcd3196bd761d88e3f3adf"
    },
    "source": "composite",
    "source-layer": "waterway",
    "minzoom": 13,
    "filter": [
      "!in",
      "class",
      "canal",
      "river"
    ],
    "layout": {
      "line-join": "round",
      "line-cap": "round"
    },
    "paint": {
      "line-color": "#FCFCFC",
      "line-width": {
        "base": 1.35,
        "stops": [
          [
            13.5,
            0.4
          ],
          [
            20,
            3
          ]
        ]
      },
      "line-opacity": {
        "base": 1,
        "stops": [
          [
            13,
            0
          ],
          [
            13.5,
            1
          ]
        ]
      }
    }
  },
  {
    "id": "water",
    "type": "fill",
    "metadata": {
      "mapbox:group": "14e9ed76f1fcd3196bd761d88e3f3adf"
    },
    "source": "composite",
    "source-layer": "water",
    "layout": {},
    "paint": {
      "fill-color": "#FCFCFC",
      "fill-outline-color": "hsla(0, 0%, 67%, 0)"
    }
  },
  {
    "id": "water-halo",
    "type": "line",
    "metadata": {
      "mapbox:group": "14e9ed76f1fcd3196bd761d88e3f3adf"
    },
    "source": "composite",
    "source-layer": "water",
    "layout": {
      "visibility": "visible",
      "line-join": "round",
      "line-cap": "round",
      "line-round-limit": 1.05
    },
    "paint": {
      "line-color": {
        "base": 1,
        "stops": [
          [
            6,
            "hsl(0, 0%, 94%)"
          ],
          [
            12,
            "hsl(0, 0%, 97%)"
          ]
        ]
      },
      "line-width": 4,
      "line-offset": 2,
      "line-opacity": 1,
      "line-blur": 2
    }
  },
  {
    "id": "water-outline",
    "type": "line",
    "metadata": {
      "mapbox:group": "14e9ed76f1fcd3196bd761d88e3f3adf"
    },
    "source": "composite",
    "source-layer": "water",
    "layout": {
      "visibility": "visible",
      "line-join": "round"
    },
    "paint": {
      "line-color": "#aaa",
      "line-width": 0.5
    }
  },
  {
    "id": "wetlands",
    "type": "fill",
    "metadata": {
      "mapbox:group": "1444934749452.0452"
    },
    "source": "composite",
    "source-layer": "landuse_overlay",
    "filter": [
      "in",
      "class",
      "wetland",
      "wetland_noveg"
    ],
    "layout": {},
    "paint": {
      "fill-color": "hsl(185, 33%, 79%)",
      "fill-opacity": {
        "base": 1,
        "stops": [
          [
            5,
            0
          ],
          [
            8,
            0.25
          ],
          [
            10,
            0.25
          ],
          [
            10.5,
            0.15
          ]
        ]
      }
    }
  },
  {
    "id": "wetlands-pattern",
    "type": "fill",
    "metadata": {
      "mapbox:group": "1444934749452.0452"
    },
    "source": "composite",
    "source-layer": "landuse_overlay",
    "filter": [
      "in",
      "class",
      "wetland",
      "wetland_noveg"
    ],
    "layout": {},
    "paint": {
      "fill-color": "hsl(185, 43%, 74%)",
      "fill-opacity": {
        "base": 1,
        "stops": [
          [
            10,
            0
          ],
          [
            12,
            0.5
          ]
        ]
      },
      "fill-pattern": "wetland",
      "fill-translate-anchor": "viewport"
    }
  }
];

const adminBoundaries = [
  {
    "id": "admin-3-4-boundaries-bg",
    "type": "line",
    "metadata": {
      "mapbox:group": "1444934295202.7542"
    },
    "source": "composite",
    "source-layer": "admin",
    "filter": [
      "all",
      [
        "==",
        "maritime",
        0
      ],
      [
        ">=",
        "admin_level",
        3
      ]
    ],
    "layout": {
      "line-join": "round",
      "visibility": "none"
    },
    "paint": {
      "line-color": "hsl(0, 0%, 100%)",
      "line-width": {
        "base": 1,
        "stops": [
          [
            7,
            3.75
          ],
          [
            12,
            5
          ]
        ]
      },
      "line-opacity": {
        "base": 1,
        "stops": [
          [
            4,
            0
          ],
          [
            8,
            1
          ]
        ]
      },
      "line-blur": {
        "base": 1,
        "stops": [
          [
            3,
            0
          ],
          [
            8,
            3
          ]
        ]
      },
      "line-translate": [
        0,
        0
      ]
    }
  },
  {
    "id": "admin-2-boundaries-halo",
    "type": "line",
    "metadata": {
      "mapbox:group": "1444934295202.7542"
    },
    "source": "composite",
    "source-layer": "admin",
    "minzoom": 1,
    "filter": [
      "all",
      [
        "==",
        "admin_level",
        2
      ],
      [
        "==",
        "maritime",
        0
      ]
    ],
    "layout": {
      "line-join": "round",
      "visibility": "none"
    },
    "paint": {
      "line-translate": [
        0,
        0
      ],
      "line-width": {
        "base": 1,
        "stops": [
          [
            3,
            2
          ],
          [
            14,
            6
          ]
        ]
      },
      "line-color": "hsl(39, 100%, 50%)",
      "line-opacity": 0.3
    }
  },
  {
    "id": "admin-2-boundaries-bg",
    "type": "line",
    "metadata": {
      "mapbox:group": "1444934295202.7542"
    },
    "source": "composite",
    "source-layer": "admin",
    "minzoom": 1,
    "filter": [
      "all",
      [
        "==",
        "admin_level",
        2
      ],
      [
        "==",
        "maritime",
        0
      ]
    ],
    "layout": {
      "line-join": "round",
      "visibility": "none"
    },
    "paint": {
      "line-translate": [
        0,
        0
      ],
      "line-color": "#eee",
      "line-width": {
        "base": 1,
        "stops": [
          [
            6,
            4
          ],
          [
            14,
            10
          ]
        ]
      }
    }
  },
  {
    "id": "admin-3-4-boundaries",
    "type": "line",
    "metadata": {
      "mapbox:group": "1444934295202.7542"
    },
    "source": "composite",
    "source-layer": "admin",
    "filter": [
      "all",
      [
        "==",
        "maritime",
        0
      ],
      [
        ">=",
        "admin_level",
        3
      ]
    ],
    "layout": {
      "line-join": "round",
      "line-cap": "round",
      "visibility": "none"
    },
    "paint": {
      "line-dasharray": {
        "base": 1,
        "stops": [
          [
            6,
            [
              4,
              2
            ]
          ],
          [
            7,
            [
              2,
              4,
              6,
              4
            ]
          ]
        ]
      },
      "line-width": {
        "base": 1,
        "stops": [
          [
            7,
            0.75
          ],
          [
            12,
            1.5
          ]
        ]
      },
      "line-opacity": {
        "base": 1,
        "stops": [
          [
            4,
            0
          ],
          [
            4.5,
            1
          ]
        ]
      },
      "line-color": "#ccc"
    }
  },
  {
    "id": "admin-2-boundaries",
    "type": "line",
    "metadata": {
      "mapbox:group": "1444934295202.7542"
    },
    "source": "composite",
    "source-layer": "admin",
    "minzoom": 1,
    "filter": [
      "all",
      [
        "==",
        "admin_level",
        2
      ],
      [
        "==",
        "disputed",
        0
      ],
      [
        "==",
        "maritime",
        0
      ]
    ],
    "layout": {
      "line-cap": "square",
      "visibility": "none",
      "line-join": "round"
    },
    "paint": {
      "line-color": "#888",
      "line-width": {
        "base": 1,
        "stops": [
          [
            6,
            0.6
          ],
          [
            14,
            1.6
          ]
        ]
      }
    }
  },
  {
    "id": "admin-2-boundaries-dispute",
    "type": "line",
    "metadata": {
      "mapbox:group": "1444934295202.7542"
    },
    "source": "composite",
    "source-layer": "admin",
    "minzoom": 1,
    "filter": [
      "all",
      [
        "==",
        "admin_level",
        2
      ],
      [
        "==",
        "disputed",
        1
      ],
      [
        "==",
        "maritime",
        0
      ]
    ],
    "layout": {
      "line-join": "round",
      "visibility": "none"
    },
    "paint": {
      "line-dasharray": {
        "base": 1,
        "stops": [
          [
            6,
            [
              3,
              1
            ]
          ],
          [
            10,
            [
              6,
              2
            ]
          ]
        ]
      },
      "line-color": "#888",
      "line-width": {
        "base": 1,
        "stops": [
          [
            6,
            0.6
          ],
          [
            14,
            1.6
          ]
        ]
      }
    }
  }
];

const provinceBoundaries = [
  {
    "id": "province",
    "type": "fill",
    "metadata": {
      "mapbox:group": "b252a402b40725b210859d09efd07b44"
    },
    "source": "composite",
    "source-layer": "Austro_Hungarian_Empire_1910_v_1_0-dissolve",
    "layout": {
      "visibility": "none"
    },
    "paint": {
      "fill-color": "hsl(307, 100%, 69%)",
      "fill-opacity": 0.13,
      "fill-outline-color": "hsl(303, 46%, 29%)"
    }
  },
  {
    "id": "district-halo",
    "type": "line",
    "metadata": {
      "mapbox:group": "b252a402b40725b210859d09efd07b44"
    },
    "source": "composite",
    "source-layer": "Austro_Hungarian_Empire_1910_v_1_0",
    "layout": {
      "line-join": "round",
      "visibility": "none"
    },
    "paint": {
      "line-color": "#eee",
      "line-width": {
        "base": 1,
        "stops": [
          [
            6,
            4
          ],
          [
            14,
            10
          ]
        ]
      },
      "line-opacity": {
        "base": 1,
        "stops": [
          [
            4,
            0
          ],
          [
            8,
            0.3
          ]
        ]
      }
    }
  },
  {
    "id": "province-halo",
    "type": "line",
    "metadata": {
      "mapbox:group": "b252a402b40725b210859d09efd07b44"
    },
    "source": "composite",
    "source-layer": "Austro_Hungarian_Empire_1910_v_1_0-dissolve",
    "filter": [
      "in",
      "$type",
      "LineString",
      "Point",
      "Polygon"
    ],
    "layout": {
      "visibility": "none",
      "line-cap": "square",
      "line-miter-limit": 1.5
    },
    "paint": {
      "line-color": {
        "base": 1,
        "type": "categorical",
        "property": "LAND",
        "stops": [
          [
            "BOEHMEN",
            "hsl(227, 100%, 89%)"
          ],
          [
            "BOSNIEN-HERZEGOWINA",
            "hsl(33, 100%, 89%)"
          ],
          [
            "BUKOWINA",
            "hsl(176, 100%, 89%)"
          ],
          [
            "DALMATIEN",
            "hsl(227, 100%, 89%)"
          ],
          [
            "DONAU-THEISS-BECKEN",
            "hsl(176, 100%, 89%)"
          ],
          [
            "FIUME",
            "hsl(33, 100%, 89%)"
          ],
          [
            "GALIZIEN",
            "hsl(227, 100%, 89%)"
          ],
          [
            "GOERZ & GRADISCA",
            "hsl(33, 100%, 89%)"
          ],
          [
            "ISTRIEN",
            "hsl(176, 100%, 89%)"
          ],
          [
            "KAERNTEN",
            "hsl(98, 100%, 89%)"
          ],
          [
            "KRAIN",
            "hsl(335, 100%, 89%)"
          ],
          [
            "KROATIEN-SLAWONIEN",
            "hsl(98, 100%, 89%)"
          ],
          [
            "LINKES DONAUUFER",
            "hsl(335, 100%, 89%)"
          ],
          [
            "LINKES THEISSUFER",
            "hsl(33, 100%, 89%)"
          ],
          [
            "MAEHREN",
            "hsl(33, 100%, 89%)"
          ],
          [
            "NIEDEROESTERREICH",
            "hsl(98, 100%, 89%)"
          ],
          [
            "OBEROESTERREICH",
            "hsl(335, 100%, 89%)"
          ],
          [
            "RECHTES DONAUUFER",
            "hsl(227, 100%, 89%)"
          ],
          [
            "RECHTES THEISSUFER",
            "hsl(98, 100%, 89%)"
          ],
          [
            "SALZBURG",
            "hsl(33, 100%, 89%)"
          ],
          [
            "SCHLESIEN",
            "hsl(176, 100%, 89%)"
          ],
          [
            "SEA",
            "hsla(98, 100%, 89%, 0)"
          ],
          [
            "SIEBENBUERGEN",
            "hsl(98, 100%, 89%)"
          ],
          [
            "THEISS-MAROS-BECKEN",
            "hsl(335, 100%, 89%)"
          ],
          [
            "TIROL",
            "hsl(227, 100%, 89%)"
          ],
          [
            "VORARLBERG",
            "hsl(335, 100%, 89%)"
          ],
          [
            "STEIERMARK",
            "hsl(176, 100%, 89%)"
          ]
        ],
        "default": "hsl(305, 100%, 85%)"
      },
      "line-width": {
        "base": 1,
        "stops": [
          [
            4,
            4
          ],
          [
            16,
            12
          ]
        ]
      },
      "line-opacity": 0.6,
      "line-offset": {
        "base": 1,
        "stops": [
          [
            4,
            2
          ],
          [
            16,
            6
          ]
        ]
      }
    }
  },
  {
    "id": "district",
    "type": "line",
    "metadata": {
      "mapbox:group": "b252a402b40725b210859d09efd07b44"
    },
    "source": "composite",
    "source-layer": "Austro_Hungarian_Empire_1910_v_1_0",
    "layout": {
      "line-join": "round",
      "visibility": "none"
    },
    "paint": {
      "line-color": "#999",
      "line-width": {
        "base": 1,
        "stops": [
          [
            6,
            0.6
          ],
          [
            14,
            1.6
          ]
        ]
      },
      "line-opacity": {
        "base": 1,
        "stops": [
          [
            4,
            0
          ],
          [
            8,
            0.3
          ]
        ]
      }
    }
  },
  {
    "id": "province-line",
    "type": "line",
    "metadata": {
      "mapbox:group": "b252a402b40725b210859d09efd07b44"
    },
    "source": "composite",
    "source-layer": "Austro_Hungarian_Empire_1910_v_1_0-dissolve",
    "filter": [
      "in",
      "$type",
      "LineString",
      "Point",
      "Polygon"
    ],
    "layout": {
      "visibility": "none",
      "line-join": "round"
    },
    "paint": {
      "line-color": "#888",
      "line-width": 1,
      "line-opacity": 1,
      "line-offset": 0
    }
  }
];

const disintegration = [
  {
    "id": "y1989-01-01-halo",
    "type": "line",
    "metadata": {
      "mapbox:group": "0177110e8579ac34b6a5a0ccf4dce844"
    },
    "source": "composite",
    "source-layer": "y1989-01-01",
    "filter": [
      "==",
      "$type",
      "Polygon"
    ],
    "layout": {
      "visibility": "visible",
      "line-join": "bevel",
      "line-miter-limit": 2,
      "line-cap": "square"
    },
    "paint": {
      "line-offset": {
        "base": 1,
        "stops": [
          [
            4,
            2
          ],
          [
            16,
            6
          ]
        ]
      },
      "line-width": {
        "base": 1,
        "stops": [
          [
            4,
            4
          ],
          [
            16,
            12
          ]
        ]
      },
      "line-opacity": 0.6,
      "line-color": "hsl(227, 100%, 89%)"
    }
  },
  {
    "id": "y1989-01-01",
    "type": "line",
    "metadata": {
      "mapbox:group": "0177110e8579ac34b6a5a0ccf4dce844"
    },
    "source": "composite",
    "source-layer": "y1989-01-01",
    "filter": [
      "==",
      "$type",
      "Polygon"
    ],
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
  },
  {
    "id": "1991-06-25-halo",
    "type": "line",
    "metadata": {
      "mapbox:group": "0177110e8579ac34b6a5a0ccf4dce844"
    },
    "source": "composite",
    "source-layer": "y1991-06-25",
    "filter": [
      "==",
      "$type",
      "Polygon"
    ],
    "layout": {
      "visibility": "visible",
      "line-join": "bevel",
      "line-miter-limit": 2,
      "line-cap": "square"
    },
    "paint": {
      "line-offset": {
        "base": 1,
        "stops": [
          [
            4,
            2
          ],
          [
            16,
            6
          ]
        ]
      },
      "line-width": {
        "base": 1,
        "stops": [
          [
            4,
            4
          ],
          [
            16,
            12
          ]
        ]
      },
      "line-opacity": 0.6,
      "line-color": "hsl(227, 100%, 89%)"
    }
  },
  {
    "id": "1991-06-25",
    "type": "line",
    "metadata": {
      "mapbox:group": "0177110e8579ac34b6a5a0ccf4dce844"
    },
    "source": "composite",
    "source-layer": "y1991-06-25",
    "filter": [
      "==",
      "$type",
      "Polygon"
    ],
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
  },
  {
    "id": "1991-09-25-halo",
    "type": "line",
    "metadata": {
      "mapbox:group": "0177110e8579ac34b6a5a0ccf4dce844"
    },
    "source": "composite",
    "source-layer": "y1991-09-25",
    "filter": [
      "==",
      "$type",
      "Polygon"
    ],
    "layout": {
      "visibility": "visible",
      "line-join": "bevel",
      "line-miter-limit": 2,
      "line-cap": "square"
    },
    "paint": {
      "line-offset": {
        "base": 1,
        "stops": [
          [
            4,
            2
          ],
          [
            16,
            6
          ]
        ]
      },
      "line-width": {
        "base": 1,
        "stops": [
          [
            4,
            4
          ],
          [
            16,
            12
          ]
        ]
      },
      "line-opacity": 0.6,
      "line-color": "hsl(227, 100%, 89%)"
    }
  },
  {
    "id": "1991-09-25",
    "type": "line",
    "metadata": {
      "mapbox:group": "0177110e8579ac34b6a5a0ccf4dce844"
    },
    "source": "composite",
    "source-layer": "y1991-09-25",
    "filter": [
      "==",
      "$type",
      "Polygon"
    ],
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
  },
  {
    "id": "1992-03-03-halo",
    "type": "line",
    "metadata": {
      "mapbox:group": "0177110e8579ac34b6a5a0ccf4dce844"
    },
    "source": "composite",
    "source-layer": "y1992-03-03",
    "filter": [
      "==",
      "$type",
      "Polygon"
    ],
    "layout": {
      "visibility": "visible",
      "line-join": "bevel",
      "line-miter-limit": 2,
      "line-cap": "square"
    },
    "paint": {
      "line-offset": {
        "base": 1,
        "stops": [
          [
            4,
            2
          ],
          [
            16,
            6
          ]
        ]
      },
      "line-width": {
        "base": 1,
        "stops": [
          [
            4,
            4
          ],
          [
            16,
            12
          ]
        ]
      },
      "line-opacity": 0.6,
      "line-color": "hsl(227, 100%, 89%)"
    }
  },
  {
    "id": "1992-03-03",
    "type": "line",
    "metadata": {
      "mapbox:group": "0177110e8579ac34b6a5a0ccf4dce844"
    },
    "source": "composite",
    "source-layer": "y1992-03-03",
    "filter": [
      "==",
      "$type",
      "Polygon"
    ],
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
  },
  {
    "id": "1992-04-07-halo",
    "type": "line",
    "metadata": {
      "mapbox:group": "0177110e8579ac34b6a5a0ccf4dce844"
    },
    "source": "composite",
    "source-layer": "y1992-04-07",
    "filter": [
      "==",
      "$type",
      "Polygon"
    ],
    "layout": {
      "visibility": "visible",
      "line-join": "bevel",
      "line-miter-limit": 2,
      "line-cap": "square"
    },
    "paint": {
      "line-offset": {
        "base": 1,
        "stops": [
          [
            4,
            2
          ],
          [
            16,
            6
          ]
        ]
      },
      "line-width": {
        "base": 1,
        "stops": [
          [
            4,
            4
          ],
          [
            16,
            12
          ]
        ]
      },
      "line-opacity": 0.6,
      "line-color": "hsl(227, 100%, 89%)"
    }
  },
  {
    "id": "1992-04-07",
    "type": "line",
    "metadata": {
      "mapbox:group": "0177110e8579ac34b6a5a0ccf4dce844"
    },
    "source": "composite",
    "source-layer": "y1992-04-07",
    "filter": [
      "==",
      "$type",
      "Polygon"
    ],
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
  },
  {
    "id": "1992-04-28-halo",
    "type": "line",
    "metadata": {
      "mapbox:group": "0177110e8579ac34b6a5a0ccf4dce844"
    },
    "source": "composite",
    "source-layer": "y1992-04-28",
    "filter": [
      "==",
      "$type",
      "Polygon"
    ],
    "layout": {
      "visibility": "visible",
      "line-join": "bevel",
      "line-miter-limit": 2,
      "line-cap": "square"
    },
    "paint": {
      "line-offset": {
        "base": 1,
        "stops": [
          [
            4,
            2
          ],
          [
            16,
            6
          ]
        ]
      },
      "line-width": {
        "base": 1,
        "stops": [
          [
            4,
            4
          ],
          [
            16,
            12
          ]
        ]
      },
      "line-opacity": 0.6,
      "line-color": "hsl(227, 100%, 89%)"
    }
  },
  {
    "id": "1992-04-28",
    "type": "line",
    "metadata": {
      "mapbox:group": "0177110e8579ac34b6a5a0ccf4dce844"
    },
    "source": "composite",
    "source-layer": "y1992-04-28",
    "filter": [
      "==",
      "$type",
      "Polygon"
    ],
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
  },
  {
    "id": "1993-06-13-halo",
    "type": "line",
    "metadata": {
      "mapbox:group": "0177110e8579ac34b6a5a0ccf4dce844"
    },
    "source": "composite",
    "source-layer": "y1993-06-13",
    "filter": [
      "==",
      "$type",
      "Polygon"
    ],
    "layout": {
      "visibility": "visible",
      "line-join": "bevel",
      "line-miter-limit": 2,
      "line-cap": "square"
    },
    "paint": {
      "line-offset": {
        "base": 1,
        "stops": [
          [
            4,
            2
          ],
          [
            16,
            6
          ]
        ]
      },
      "line-width": {
        "base": 1,
        "stops": [
          [
            4,
            4
          ],
          [
            16,
            12
          ]
        ]
      },
      "line-opacity": 0.6,
      "line-color": "hsl(227, 100%, 89%)"
    }
  },
  {
    "id": "1993-06-13",
    "type": "line",
    "metadata": {
      "mapbox:group": "0177110e8579ac34b6a5a0ccf4dce844"
    },
    "source": "composite",
    "source-layer": "y1993-06-13",
    "filter": [
      "==",
      "$type",
      "Polygon"
    ],
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
  },
  {
    "id": "1995-09-15-halo",
    "type": "line",
    "metadata": {
      "mapbox:group": "0177110e8579ac34b6a5a0ccf4dce844"
    },
    "source": "composite",
    "source-layer": "y1995-09-15",
    "filter": [
      "==",
      "$type",
      "Polygon"
    ],
    "layout": {
      "visibility": "visible",
      "line-join": "bevel",
      "line-miter-limit": 2,
      "line-cap": "square"
    },
    "paint": {
      "line-offset": {
        "base": 1,
        "stops": [
          [
            4,
            2
          ],
          [
            16,
            6
          ]
        ]
      },
      "line-width": {
        "base": 1,
        "stops": [
          [
            4,
            4
          ],
          [
            16,
            12
          ]
        ]
      },
      "line-opacity": 0.6,
      "line-color": "hsl(227, 100%, 89%)"
    }
  },
  {
    "id": "1995-09-15",
    "type": "line",
    "metadata": {
      "mapbox:group": "0177110e8579ac34b6a5a0ccf4dce844"
    },
    "source": "composite",
    "source-layer": "y1995-09-15",
    "filter": [
      "==",
      "$type",
      "Polygon"
    ],
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
  },
  {
    "id": "1995-12-14-halo",
    "type": "line",
    "metadata": {
      "mapbox:group": "0177110e8579ac34b6a5a0ccf4dce844"
    },
    "source": "composite",
    "source-layer": "y1995-12-14",
    "filter": [
      "==",
      "$type",
      "Polygon"
    ],
    "layout": {
      "visibility": "visible",
      "line-join": "bevel",
      "line-miter-limit": 2,
      "line-cap": "square"
    },
    "paint": {
      "line-offset": {
        "base": 1,
        "stops": [
          [
            4,
            2
          ],
          [
            16,
            6
          ]
        ]
      },
      "line-width": {
        "base": 1,
        "stops": [
          [
            4,
            4
          ],
          [
            16,
            12
          ]
        ]
      },
      "line-opacity": 0.6,
      "line-color": "hsl(227, 100%, 89%)"
    }
  },
  {
    "id": "1995-12-14",
    "type": "line",
    "metadata": {
      "mapbox:group": "0177110e8579ac34b6a5a0ccf4dce844"
    },
    "source": "composite",
    "source-layer": "y1995-12-14",
    "filter": [
      "==",
      "$type",
      "Polygon"
    ],
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
  },
  {
    "id": "1998-01-15-halo",
    "type": "line",
    "metadata": {
      "mapbox:group": "0177110e8579ac34b6a5a0ccf4dce844"
    },
    "source": "composite",
    "source-layer": "y1998-01-15",
    "filter": [
      "==",
      "$type",
      "Polygon"
    ],
    "layout": {
      "visibility": "visible",
      "line-join": "bevel",
      "line-miter-limit": 2,
      "line-cap": "square"
    },
    "paint": {
      "line-offset": {
        "base": 1,
        "stops": [
          [
            4,
            2
          ],
          [
            16,
            6
          ]
        ]
      },
      "line-width": {
        "base": 1,
        "stops": [
          [
            4,
            4
          ],
          [
            16,
            12
          ]
        ]
      },
      "line-opacity": 0.6,
      "line-color": "hsl(227, 100%, 89%)"
    }
  },
  {
    "id": "1998-01-15",
    "type": "line",
    "metadata": {
      "mapbox:group": "0177110e8579ac34b6a5a0ccf4dce844"
    },
    "source": "composite",
    "source-layer": "y1998-01-15",
    "filter": [
      "==",
      "$type",
      "Polygon"
    ],
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
  },
  {
    "id": "2006-06-05-halo",
    "type": "line",
    "metadata": {
      "mapbox:group": "0177110e8579ac34b6a5a0ccf4dce844"
    },
    "source": "composite",
    "source-layer": "y2006-06-05",
    "filter": [
      "==",
      "$type",
      "Polygon"
    ],
    "layout": {
      "visibility": "visible",
      "line-join": "bevel",
      "line-miter-limit": 2,
      "line-cap": "square"
    },
    "paint": {
      "line-offset": {
        "base": 1,
        "stops": [
          [
            4,
            2
          ],
          [
            16,
            6
          ]
        ]
      },
      "line-width": {
        "base": 1,
        "stops": [
          [
            4,
            4
          ],
          [
            16,
            12
          ]
        ]
      },
      "line-opacity": 0.6,
      "line-color": "hsl(227, 100%, 89%)"
    }
  },
  {
    "id": "2006-06-05",
    "type": "line",
    "metadata": {
      "mapbox:group": "0177110e8579ac34b6a5a0ccf4dce844"
    },
    "source": "composite",
    "source-layer": "y2006-06-05",
    "filter": [
      "==",
      "$type",
      "Polygon"
    ],
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
  },
  {
    "id": "2008-02-17-halo",
    "type": "line",
    "metadata": {
      "mapbox:group": "0177110e8579ac34b6a5a0ccf4dce844"
    },
    "source": "composite",
    "source-layer": "y2008-02-17",
    "filter": [
      "==",
      "$type",
      "Polygon"
    ],
    "layout": {
      "visibility": "visible",
      "line-join": "bevel",
      "line-miter-limit": 2,
      "line-cap": "square"
    },
    "paint": {
      "line-offset": {
        "base": 1,
        "stops": [
          [
            4,
            2
          ],
          [
            16,
            6
          ]
        ]
      },
      "line-width": {
        "base": 1,
        "stops": [
          [
            4,
            4
          ],
          [
            16,
            12
          ]
        ]
      },
      "line-opacity": 0.6,
      "line-color": "hsl(227, 100%, 89%)"
    }
  },
  {
    "id": "2008-02-17",
    "type": "line",
    "metadata": {
      "mapbox:group": "0177110e8579ac34b6a5a0ccf4dce844"
    },
    "source": "composite",
    "source-layer": "y2008-02-17",
    "filter": [
      "==",
      "$type",
      "Polygon"
    ],
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
];

const trail = [
  {
    "id": "white-trail-bg",
    "type": "line",
    "metadata": {
      "mapbox:group": "cd0fbeb8e64eca7ba1b95d87c64df8a7"
    },
    "source": "composite",
    "source-layer": "white_trail",
    "layout": {
      "visibility": "none",
      "line-join": "round"
    },
    "paint": {
      "line-color": "hsl(45, 100%, 62%)",
      "line-translate": [
        0,
        0
      ],
      "line-width": {
        "base": 1,
        "stops": [
          [
            4,
            2.5
          ],
          [
            16,
            10
          ]
        ]
      },
      "line-offset": 0,
      "line-blur": 0
    }
  },
  {
    "id": "white-trail",
    "type": "line",
    "metadata": {
      "mapbox:group": "cd0fbeb8e64eca7ba1b95d87c64df8a7"
    },
    "source": "composite",
    "source-layer": "white_trail",
    "layout": {
      "visibility": "none",
      "line-join": "bevel",
      "line-cap": "round"
    },
    "paint": {
      "line-color": "hsl(0, 0%, 33%)",
      "line-width": {
        "base": 1,
        "stops": [
          [
            4,
            1.5
          ],
          [
            16,
            5
          ]
        ]
      },
      "line-offset": 0
    }
  },
  {
    "id": "white-trail-dashed",
    "type": "line",
    "metadata": {
      "mapbox:group": "cd0fbeb8e64eca7ba1b95d87c64df8a7"
    },
    "source": "composite",
    "source-layer": "white_trail",
    "layout": {
      "visibility": "none"
    },
    "paint": {
      "line-color": "hsl(0, 0%, 98%)",
      "line-dasharray": {
        "base": 1,
        "stops": [
          [
            4,
            [
              1.2,
              1
            ]
          ],
          [
            8,
            [
              3,
              2
            ]
          ]
        ]
      },
      "line-offset": 0,
      "line-width": {
        "base": 1,
        "stops": [
          [
            4,
            1.2
          ],
          [
            16,
            3.5
          ]
        ]
      }
    }
  }
];

const label = [
  {
    "id": "contour-label",
    "type": "symbol",
    "source": "composite",
    "source-layer": "contour",
    "minzoom": 11,
    "filter": [
      "in",
      "index",
      10,
      5
    ],
    "layout": {
      "text-field": "{ele} m",
      "symbol-placement": "line",
      "text-max-angle": 25,
      "text-padding": 5,
      "text-font": [
        "Arial Unicode MS Regular"
      ],
      "text-size": {
        "base": 1,
        "stops": [
          [
            15,
            9.5
          ],
          [
            20,
            12
          ]
        ]
      }
    },
    "paint": {
      "text-color": "hsl(0, 0%, 50%)",
      "text-halo-width": 1,
      "text-halo-blur": 0,
      "text-halo-color": "hsla(0, 0%, 100%, 0.5)"
    }
  },
  {
    "id": "waterway-label",
    "type": "symbol",
    "source": "composite",
    "source-layer": "waterway_label",
    "minzoom": 12,
    "filter": [
      "in",
      "class",
      "canal",
      "river"
    ],
    "layout": {
      "text-field": "{name_en}",
      "text-font": [
        "PT Sans Italic"
      ],
      "symbol-placement": "line",
      "text-max-angle": 30,
      "text-size": {
        "base": 1,
        "stops": [
          [
            13,
            12
          ],
          [
            18,
            16
          ]
        ]
      },
      "symbol-spacing": 600
    },
    "paint": {
      "text-halo-blur": 0.8,
      "text-halo-color": "#fff",
      "text-color": "hsl(203, 29%, 62%)",
      "text-halo-width": 1.2
    }
  },
  {
    "id": "mountain-peak-label",
    "type": "symbol",
    "source": "composite",
    "source-layer": "mountain_peak_label",
    "filter": [
      ">",
      "elevation_m",
      0
    ],
    "layout": {
      "text-line-height": 1.1,
      "text-size": {
        "base": 1,
        "stops": [
          [
            9,
            11
          ],
          [
            18,
            14
          ]
        ]
      },
      "text-font": [
        "Droid Serif Bold"
      ],
      "text-offset": [
        0,
        0
      ],
      "text-field": "{name_en} {elevation_m}m",
      "text-letter-spacing": 0.01,
      "text-max-width": 8
    },
    "paint": {
      "text-color": "hsl(0, 0%, 10%)",
      "text-halo-color": "hsl(0, 0%, 100%)",
      "text-halo-width": 1,
      "text-halo-blur": 0.5
    }
  },
  {
    "id": "water-label-sm",
    "type": "symbol",
    "metadata": {
      "mapbox:group": "1444933808272.805"
    },
    "source": "composite",
    "source-layer": "water_label",
    "minzoom": 15,
    "filter": [
      "<=",
      "area",
      10000
    ],
    "layout": {
      "text-field": "{name_en}",
      "text-font": [
        "Arial Unicode MS Regular"
      ],
      "text-max-width": 7,
      "text-size": {
        "base": 1,
        "stops": [
          [
            16,
            13
          ],
          [
            20,
            16
          ]
        ]
      }
    },
    "paint": {
      "text-color": "hsl(203, 29%, 62%)"
    }
  },
  {
    "id": "water-label",
    "type": "symbol",
    "metadata": {
      "mapbox:group": "1444933808272.805"
    },
    "source": "composite",
    "source-layer": "water_label",
    "minzoom": 5,
    "filter": [
      ">",
      "area",
      10000
    ],
    "layout": {
      "text-field": "{name_en}",
      "text-font": [
        "Arial Unicode MS Regular"
      ],
      "text-max-width": 7,
      "text-size": {
        "base": 1,
        "stops": [
          [
            13,
            13
          ],
          [
            18,
            18
          ]
        ]
      }
    },
    "paint": {
      "text-color": "hsl(203, 29%, 62%)"
    }
  },
  {
    "id": "place-residential",
    "type": "symbol",
    "metadata": {
      "mapbox:group": "18ac6ee300f82f8be837f684f3fcb29b"
    },
    "source": "composite",
    "source-layer": "place_label",
    "maxzoom": 18,
    "filter": [
      "all",
      [
        "all",
        [
          "<=",
          "localrank",
          10
        ],
        [
          "==",
          "type",
          "residential"
        ]
      ],
      [
        "in",
        "$type",
        "LineString",
        "Point",
        "Polygon"
      ]
    ],
    "layout": {
      "text-line-height": 1.2,
      "text-size": {
        "base": 1,
        "stops": [
          [
            10,
            10
          ],
          [
            18,
            14
          ]
        ]
      },
      "text-max-angle": 38,
      "symbol-spacing": 250,
      "text-font": [
        "Arial Unicode MS Regular"
      ],
      "text-padding": 2,
      "visibility": "visible",
      "text-offset": [
        0,
        0
      ],
      "text-rotation-alignment": "viewport",
      "text-field": "{name_en}",
      "text-max-width": 7
    },
    "paint": {
      "text-color": "#666",
      "text-halo-color": "hsl(0, 0%, 100%)",
      "text-halo-width": 1,
      "text-halo-blur": 0.5
    }
  },
  {
    "id": "place-neighbourhood",
    "type": "symbol",
    "metadata": {
      "mapbox:group": "18ac6ee300f82f8be837f684f3fcb29b"
    },
    "source": "composite",
    "source-layer": "place_label",
    "minzoom": 10,
    "maxzoom": 16,
    "filter": [
      "==",
      "type",
      "neighbourhood"
    ],
    "layout": {
      "text-field": "{name_en}",
      "text-size": {
        "base": 1,
        "stops": [
          [
            12,
            10
          ],
          [
            16,
            14
          ]
        ]
      },
      "text-padding": 3,
      "text-max-width": 7,
      "text-font": [
        "Arial Unicode MS Regular"
      ],
      "visibility": "visible"
    },
    "paint": {
      "text-halo-color": "hsl(0, 0%, 100%)",
      "text-halo-width": 1,
      "text-color": "#666",
      "text-halo-blur": 0.5,
      "text-opacity": {
        "base": 1,
        "stops": [
          [
            15,
            1
          ],
          [
            16,
            0
          ]
        ]
      }
    }
  },
  {
    "id": "place-suburb",
    "type": "symbol",
    "metadata": {
      "mapbox:group": "18ac6ee300f82f8be837f684f3fcb29b"
    },
    "source": "composite",
    "source-layer": "place_label",
    "minzoom": 10,
    "maxzoom": 16,
    "filter": [
      "==",
      "type",
      "suburb"
    ],
    "layout": {
      "text-field": "{name_en}",
      "text-size": {
        "base": 1,
        "stops": [
          [
            11,
            10
          ],
          [
            15,
            13
          ]
        ]
      },
      "text-font": [
        "Arial Unicode MS Regular"
      ],
      "text-padding": 3,
      "text-max-width": 7,
      "text-letter-spacing": 0.4,
      "visibility": "visible"
    },
    "paint": {
      "text-halo-color": "hsl(0, 0%, 100%)",
      "text-halo-width": 1,
      "text-color": "#666",
      "text-halo-blur": 0.5,
      "text-opacity": {
        "base": 1,
        "stops": [
          [
            15,
            1
          ],
          [
            16,
            0
          ]
        ]
      }
    }
  },
  {
    "id": "place-hamlet",
    "type": "symbol",
    "metadata": {
      "mapbox:group": "18ac6ee300f82f8be837f684f3fcb29b"
    },
    "source": "composite",
    "source-layer": "place_label",
    "minzoom": 10,
    "maxzoom": 16,
    "filter": [
      "==",
      "type",
      "hamlet"
    ],
    "layout": {
      "text-field": "{name_en}",
      "text-font": [
        "Arial Unicode MS Regular"
      ],
      "text-size": {
        "base": 1,
        "stops": [
          [
            12,
            8
          ],
          [
            15,
            14
          ]
        ]
      },
      "visibility": "visible"
    },
    "paint": {
      "text-halo-color": "hsl(0, 0%, 100%)",
      "text-color": "#666",
      "text-halo-width": 0.8,
      "text-opacity": {
        "base": 1,
        "stops": [
          [
            15,
            1
          ],
          [
            16,
            0
          ]
        ]
      }
    }
  },
  {
    "id": "place-village",
    "type": "symbol",
    "metadata": {
      "mapbox:group": "18ac6ee300f82f8be837f684f3fcb29b"
    },
    "source": "composite",
    "source-layer": "place_label",
    "minzoom": 8,
    "maxzoom": 15,
    "filter": [
      "==",
      "type",
      "village"
    ],
    "layout": {
      "text-field": "{name_en}",
      "text-font": [
        "Arial Unicode MS Regular"
      ],
      "text-max-width": 7,
      "text-size": {
        "base": 1,
        "stops": [
          [
            10,
            9
          ],
          [
            16,
            15
          ]
        ]
      },
      "visibility": "visible"
    },
    "paint": {
      "text-halo-color": "hsl(0, 0%, 100%)",
      "text-color": "#666",
      "text-halo-width": 0.8,
      "text-opacity": {
        "base": 1,
        "stops": [
          [
            14,
            1
          ],
          [
            15,
            0
          ]
        ]
      }
    }
  },
  {
    "id": "place-town",
    "type": "symbol",
    "metadata": {
      "mapbox:group": "18ac6ee300f82f8be837f684f3fcb29b"
    },
    "source": "composite",
    "source-layer": "place_label",
    "minzoom": 6,
    "maxzoom": 15,
    "filter": [
      "==",
      "type",
      "town"
    ],
    "layout": {
      "icon-image": "dot-9",
      "text-font": [
        "Arial Unicode MS Regular"
      ],
      "text-offset": [
        0,
        -0.15
      ],
      "text-anchor": "bottom",
      "text-field": "{name_en}",
      "text-max-width": 7,
      "text-size": {
        "base": 1,
        "stops": [
          [
            7,
            10
          ],
          [
            15,
            16
          ]
        ]
      },
      "visibility": "visible"
    },
    "paint": {
      "text-color": "#444",
      "text-halo-color": "hsl(0, 0%, 100%)",
      "text-halo-width": 1,
      "icon-opacity": {
        "base": 1,
        "stops": [
          [
            7,
            1
          ],
          [
            8,
            0
          ]
        ]
      },
      "text-opacity": {
        "base": 1,
        "stops": [
          [
            13,
            1
          ],
          [
            14,
            0
          ]
        ]
      }
    }
  },
  {
    "id": "place-island",
    "type": "symbol",
    "metadata": {
      "mapbox:group": "18ac6ee300f82f8be837f684f3fcb29b"
    },
    "source": "composite",
    "source-layer": "place_label",
    "maxzoom": 16,
    "filter": [
      "==",
      "type",
      "island"
    ],
    "layout": {
      "text-line-height": 1.2,
      "text-size": {
        "base": 1,
        "stops": [
          [
            10,
            11
          ],
          [
            18,
            16
          ]
        ]
      },
      "text-max-angle": 38,
      "symbol-spacing": 250,
      "text-font": [
        "Arial Unicode MS Regular"
      ],
      "text-padding": 2,
      "visibility": "visible",
      "text-offset": [
        0,
        0
      ],
      "text-rotation-alignment": "viewport",
      "text-field": "{name_en}",
      "text-letter-spacing": 0.01,
      "text-max-width": 7
    },
    "paint": {
      "text-color": "hsl(230, 29%, 35%)",
      "text-halo-color": "hsl(0, 0%, 100%)",
      "text-halo-width": 1
    }
  },
  {
    "id": "place-city-sm",
    "type": "symbol",
    "metadata": {
      "mapbox:group": "1444862510685.128"
    },
    "source": "composite",
    "source-layer": "place_label",
    "maxzoom": 14,
    "filter": [
      "all",
      [
        "!in",
        "scalerank",
        0,
        1,
        2,
        3,
        4,
        5
      ],
      [
        "==",
        "type",
        "city"
      ]
    ],
    "layout": {
      "text-size": {
        "base": 1,
        "stops": [
          [
            6,
            10
          ],
          [
            16,
            18
          ]
        ]
      },
      "icon-image": "dot-9",
      "text-font": [
        "Arial Unicode MS Regular"
      ],
      "text-offset": [
        0,
        -0.2
      ],
      "text-anchor": "bottom",
      "text-field": "{name_en}",
      "text-max-width": 7,
      "visibility": "visible"
    },
    "paint": {
      "text-color": {
        "base": 1,
        "stops": [
          [
            3,
            "#aaa"
          ],
          [
            8,
            "#333"
          ]
        ]
      },
      "text-halo-color": "hsl(0, 0%, 100%)",
      "text-halo-width": 1.25,
      "icon-opacity": {
        "base": 1,
        "stops": [
          [
            7,
            1
          ],
          [
            8,
            0
          ]
        ]
      },
      "text-opacity": {
        "base": 1,
        "stops": [
          [
            12,
            1
          ],
          [
            13,
            0
          ]
        ]
      }
    }
  },
  {
    "id": "place-city-md",
    "type": "symbol",
    "metadata": {
      "mapbox:group": "1444862510685.128"
    },
    "source": "composite",
    "source-layer": "place_label",
    "maxzoom": 14,
    "filter": [
      "all",
      [
        "==",
        "type",
        "city"
      ],
      [
        "in",
        "scalerank",
        3,
        4,
        5
      ]
    ],
    "layout": {
      "icon-image": "dot-9",
      "text-font": [
        "Arial Unicode MS Regular"
      ],
      "text-offset": [
        0,
        -0.25
      ],
      "text-anchor": "bottom",
      "text-field": "{name_en}",
      "text-max-width": 7,
      "text-size": {
        "base": 0.9,
        "stops": [
          [
            5,
            10
          ],
          [
            14,
            20
          ]
        ]
      },
      "visibility": "visible"
    },
    "paint": {
      "text-color": {
        "base": 1,
        "stops": [
          [
            3,
            "#aaa"
          ],
          [
            5,
            "#333"
          ]
        ]
      },
      "text-halo-color": "hsl(0, 0%, 100%)",
      "text-halo-width": 1,
      "icon-opacity": {
        "base": 1,
        "stops": [
          [
            7,
            1
          ],
          [
            8,
            0
          ]
        ]
      },
      "text-halo-blur": 1,
      "text-opacity": {
        "base": 1,
        "stops": [
          [
            11,
            1
          ],
          [
            12,
            0
          ]
        ]
      }
    }
  },
  {
    "id": "place-city-lg",
    "type": "symbol",
    "metadata": {
      "mapbox:group": "1444862510685.128"
    },
    "source": "composite",
    "source-layer": "place_label",
    "minzoom": 1,
    "maxzoom": 14,
    "filter": [
      "all",
      [
        "<=",
        "scalerank",
        2
      ],
      [
        "==",
        "type",
        "city"
      ]
    ],
    "layout": {
      "icon-image": "dot-9",
      "text-font": [
        "Arial Unicode MS Regular"
      ],
      "text-offset": [
        0,
        -0.25
      ],
      "text-anchor": "bottom",
      "text-field": "{name_en}",
      "text-max-width": 7,
      "text-size": {
        "base": 1,
        "stops": [
          [
            4,
            10
          ],
          [
            14,
            20
          ]
        ]
      },
      "visibility": "visible"
    },
    "paint": {
      "text-color": {
        "base": 1,
        "stops": [
          [
            3,
            "#aaa"
          ],
          [
            5,
            "#333"
          ]
        ]
      },
      "text-opacity": {
        "base": 1,
        "stops": [
          [
            10,
            1
          ],
          [
            11,
            0
          ]
        ]
      },
      "text-halo-color": "hsl(0, 0%, 100%)",
      "text-halo-width": 1,
      "icon-opacity": {
        "base": 1,
        "stops": [
          [
            7,
            1
          ],
          [
            8,
            0
          ]
        ]
      },
      "text-halo-blur": 1
    }
  },
  {
    "id": "marine-label-sm-ln",
    "type": "symbol",
    "metadata": {
      "mapbox:group": "1444856087950.3635"
    },
    "source": "composite",
    "source-layer": "marine_label",
    "minzoom": 3,
    "maxzoom": 10,
    "filter": [
      "all",
      [
        "==",
        "$type",
        "LineString"
      ],
      [
        ">=",
        "labelrank",
        4
      ]
    ],
    "layout": {
      "text-line-height": 1.1,
      "text-size": {
        "base": 1,
        "stops": [
          [
            3,
            12
          ],
          [
            6,
            16
          ]
        ]
      },
      "symbol-spacing": {
        "base": 1,
        "stops": [
          [
            4,
            100
          ],
          [
            6,
            600
          ]
        ]
      },
      "text-font": [
        "PT Sans Italic"
      ],
      "symbol-placement": "line",
      "text-padding": 4,
      "text-field": "{name_en}",
      "text-letter-spacing": 0.1,
      "text-max-width": 5
    },
    "paint": {
      "text-color": "hsl(0, 0%, 80%)"
    }
  },
  {
    "id": "marine-label-sm-pt",
    "type": "symbol",
    "metadata": {
      "mapbox:group": "1444856087950.3635"
    },
    "source": "composite",
    "source-layer": "marine_label",
    "minzoom": 3,
    "maxzoom": 10,
    "filter": [
      "all",
      [
        "==",
        "$type",
        "Point"
      ],
      [
        ">=",
        "labelrank",
        4
      ]
    ],
    "layout": {
      "text-field": "{name_en}",
      "text-max-width": 5,
      "text-letter-spacing": 0.1,
      "text-line-height": 1.5,
      "text-font": [
        "PT Sans Italic"
      ],
      "text-size": {
        "base": 1,
        "stops": [
          [
            3,
            12
          ],
          [
            6,
            16
          ]
        ]
      }
    },
    "paint": {
      "text-color": "hsl(0, 0%, 80%)"
    }
  },
  {
    "id": "marine-label-md-ln",
    "type": "symbol",
    "metadata": {
      "mapbox:group": "1444856087950.3635"
    },
    "source": "composite",
    "source-layer": "marine_label",
    "minzoom": 2,
    "maxzoom": 8,
    "filter": [
      "all",
      [
        "==",
        "$type",
        "LineString"
      ],
      [
        "in",
        "labelrank",
        2,
        3
      ]
    ],
    "layout": {
      "text-line-height": 1.1,
      "text-size": {
        "base": 1.1,
        "stops": [
          [
            2,
            12
          ],
          [
            5,
            20
          ]
        ]
      },
      "symbol-spacing": 250,
      "text-font": [
        "PT Sans Italic"
      ],
      "symbol-placement": "line",
      "text-field": "{name_en}",
      "text-letter-spacing": 0.15,
      "text-max-width": 5
    },
    "paint": {
      "text-color": "hsl(0, 0%, 80%)"
    }
  },
  {
    "id": "marine-label-md-pt",
    "type": "symbol",
    "metadata": {
      "mapbox:group": "1444856087950.3635"
    },
    "source": "composite",
    "source-layer": "marine_label",
    "minzoom": 2,
    "maxzoom": 8,
    "filter": [
      "all",
      [
        "==",
        "$type",
        "Point"
      ],
      [
        "in",
        "labelrank",
        2,
        3
      ]
    ],
    "layout": {
      "text-field": "{name_en}",
      "text-max-width": 5,
      "text-letter-spacing": 0.15,
      "text-line-height": 1.5,
      "text-font": [
        "PT Sans Italic"
      ],
      "text-size": {
        "base": 1.1,
        "stops": [
          [
            2,
            14
          ],
          [
            5,
            20
          ]
        ]
      }
    },
    "paint": {
      "text-color": "hsl(0, 0%, 80%)"
    }
  },
  {
    "id": "marine-label-lg-ln",
    "type": "symbol",
    "metadata": {
      "mapbox:group": "1444856087950.3635"
    },
    "source": "composite",
    "source-layer": "marine_label",
    "minzoom": 1,
    "maxzoom": 4,
    "filter": [
      "all",
      [
        "==",
        "$type",
        "LineString"
      ],
      [
        "==",
        "labelrank",
        1
      ]
    ],
    "layout": {
      "text-field": "{name_en}",
      "text-max-width": 4,
      "text-letter-spacing": 0.25,
      "text-line-height": 1.1,
      "symbol-placement": "line",
      "text-font": [
        "PT Sans Italic"
      ],
      "text-size": {
        "base": 1,
        "stops": [
          [
            1,
            14
          ],
          [
            4,
            30
          ]
        ]
      }
    },
    "paint": {
      "text-color": "hsl(0, 0%, 80%)"
    }
  },
  {
    "id": "marine-label-lg-pt",
    "type": "symbol",
    "metadata": {
      "mapbox:group": "1444856087950.3635"
    },
    "source": "composite",
    "source-layer": "marine_label",
    "minzoom": 1,
    "maxzoom": 4,
    "filter": [
      "all",
      [
        "==",
        "$type",
        "Point"
      ],
      [
        "==",
        "labelrank",
        1
      ]
    ],
    "layout": {
      "text-field": "{name_en}",
      "text-max-width": 4,
      "text-letter-spacing": 0.25,
      "text-line-height": 1.5,
      "text-font": [
        "PT Sans Italic"
      ],
      "text-size": {
        "base": 1,
        "stops": [
          [
            1,
            14
          ],
          [
            4,
            30
          ]
        ]
      }
    },
    "paint": {
      "text-color": "hsl(0, 0%, 80%)"
    }
  },
  {
    "id": "state-label-sm",
    "type": "symbol",
    "metadata": {
      "mapbox:group": "1444856151690.9143"
    },
    "source": "composite",
    "source-layer": "state_label",
    "minzoom": 3,
    "maxzoom": 9,
    "filter": [
      "<",
      "area",
      20000
    ],
    "layout": {
      "text-size": {
        "base": 1,
        "stops": [
          [
            6,
            10
          ],
          [
            9,
            14
          ]
        ]
      },
      "text-transform": "uppercase",
      "text-font": [
        "Arial Unicode MS Bold"
      ],
      "text-field": {
        "base": 1,
        "stops": [
          [
            0,
            "{abbr}"
          ],
          [
            6,
            "{name_en}"
          ]
        ]
      },
      "text-letter-spacing": 0.15,
      "text-max-width": 5,
      "visibility": "none"
    },
    "paint": {
      "text-opacity": 1,
      "text-color": "#999",
      "text-halo-color": "hsl(0, 0%, 100%)",
      "text-halo-width": 1
    }
  },
  {
    "id": "state-label-md",
    "type": "symbol",
    "metadata": {
      "mapbox:group": "1444856151690.9143"
    },
    "source": "composite",
    "source-layer": "state_label",
    "minzoom": 3,
    "maxzoom": 8,
    "filter": [
      "all",
      [
        "<",
        "area",
        80000
      ],
      [
        ">=",
        "area",
        20000
      ]
    ],
    "layout": {
      "text-size": {
        "base": 1,
        "stops": [
          [
            5,
            10
          ],
          [
            8,
            16
          ]
        ]
      },
      "text-transform": "uppercase",
      "text-font": [
        "Arial Unicode MS Bold"
      ],
      "text-field": {
        "base": 1,
        "stops": [
          [
            0,
            "{abbr}"
          ],
          [
            5,
            "{name_en}"
          ]
        ]
      },
      "text-letter-spacing": 0.15,
      "text-max-width": 6,
      "visibility": "none"
    },
    "paint": {
      "text-opacity": 1,
      "text-color": "#999",
      "text-halo-color": "hsl(0, 0%, 100%)",
      "text-halo-width": 1
    }
  },
  {
    "id": "state-label-lg",
    "type": "symbol",
    "metadata": {
      "mapbox:group": "1444856151690.9143"
    },
    "source": "composite",
    "source-layer": "state_label",
    "minzoom": 3,
    "maxzoom": 7,
    "filter": [
      ">=",
      "area",
      80000
    ],
    "layout": {
      "text-size": {
        "base": 1,
        "stops": [
          [
            4,
            10
          ],
          [
            7,
            18
          ]
        ]
      },
      "text-transform": "uppercase",
      "text-font": [
        "Arial Unicode MS Bold"
      ],
      "text-padding": 1,
      "text-field": {
        "base": 1,
        "stops": [
          [
            0,
            "{abbr}"
          ],
          [
            4,
            "{name_en}"
          ]
        ]
      },
      "text-letter-spacing": 0.15,
      "text-max-width": 6,
      "visibility": "none"
    },
    "paint": {
      "text-opacity": 1,
      "text-color": "#999",
      "text-halo-color": "hsl(0, 0%, 100%)",
      "text-halo-width": 1
    }
  },
  {
    "id": "country-label-sm",
    "type": "symbol",
    "metadata": {
      "mapbox:group": "1444856144497.7825"
    },
    "source": "composite",
    "source-layer": "country_label",
    "minzoom": 1,
    "maxzoom": 10,
    "filter": [
      ">=",
      "scalerank",
      5
    ],
    "layout": {
      "text-field": "{name_en}",
      "text-max-width": 6,
      "text-font": [
        "PT Sans Regular"
      ],
      "text-size": {
        "base": 0.9,
        "stops": [
          [
            5,
            10
          ],
          [
            9,
            18
          ]
        ]
      },
      "text-transform": "uppercase",
      "text-letter-spacing": 0.1,
      "visibility": "none"
    },
    "paint": {
      "text-color": "#888",
      "text-halo-width": 1,
      "text-halo-color": "rgba(255,255,255,0.75)"
    }
  },
  {
    "id": "country-label-md",
    "type": "symbol",
    "metadata": {
      "mapbox:group": "1444856144497.7825"
    },
    "source": "composite",
    "source-layer": "country_label",
    "minzoom": 1,
    "maxzoom": 8,
    "filter": [
      "in",
      "scalerank",
      3,
      4
    ],
    "layout": {
      "text-field": {
        "base": 1,
        "stops": [
          [
            0,
            "{code}"
          ],
          [
            2,
            "{name_en}"
          ]
        ]
      },
      "text-max-width": 6,
      "text-font": [
        "PT Sans Regular"
      ],
      "text-size": {
        "base": 1,
        "stops": [
          [
            3,
            8
          ],
          [
            8,
            20
          ]
        ]
      },
      "visibility": "none",
      "text-transform": "uppercase",
      "text-letter-spacing": 0.1
    },
    "paint": {
      "text-color": "#888",
      "text-halo-color": "rgba(255,255,255,0.75)",
      "text-halo-width": 1.25
    }
  },
  {
    "id": "country-label-lg",
    "type": "symbol",
    "metadata": {
      "mapbox:group": "1444856144497.7825"
    },
    "source": "composite",
    "source-layer": "country_label",
    "minzoom": 1,
    "maxzoom": 7,
    "filter": [
      "in",
      "scalerank",
      1,
      2
    ],
    "layout": {
      "text-field": "{name_en}",
      "text-max-width": {
        "base": 1,
        "stops": [
          [
            0,
            5
          ],
          [
            3,
            6
          ]
        ]
      },
      "text-font": [
        "PT Sans Regular"
      ],
      "text-size": {
        "base": 1,
        "stops": [
          [
            1,
            8
          ],
          [
            6,
            20
          ]
        ]
      },
      "text-transform": "uppercase",
      "text-letter-spacing": 0.1,
      "visibility": "none"
    },
    "paint": {
      "text-color": "#888",
      "text-halo-color": "rgba(255,255,255,0.75)",
      "text-halo-width": 1.5
    }
  }
];

const disintegrationLabel = [
  {
    "id": "y1991-06-25-label",
    "type": "symbol",
    "source": "composite",
    "source-layer": "y1991-06-25-centroid",
    "filter": [
      "==",
      "$type",
      "Point"
    ],
    "layout": {
      "text-field": "{ADMIN}",
      "text-font": [
        "PT Sans Regular"
      ],
      "text-size": {
        "base": 1,
        "stops": [
          [
            1,
            8
          ],
          [
            6,
            20
          ]
        ]
      },
      "text-letter-spacing": 0.05,
      "text-max-width": {
        "base": 1,
        "stops": [
          [
            0,
            5
          ],
          [
            3,
            6
          ]
        ]
      }
    },
    "paint": {
      "text-color": "#888",
      "text-halo-width": 1.5,
      "text-halo-color": "rgba(255,255,255,0.75)"
    }
  }
];

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
  "zoom": 5.225444320929647,
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