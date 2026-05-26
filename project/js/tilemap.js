let tilemap = [
    baseRoad = [

        // Vertical Road

        roadVerticalCrosswalk1 = {
            x: 64,
            y: 0,
            size: 16
        },
        roadVerticalCrosswalk2 = {
            x: 80,
            y: 0,
            size: 16
        },
        roadVerticalCrosswalk3 = {
            x: 96,
            y: 0,
            size: 16
        },
        roadVerticalCenterLineHardLeft = {
            x: 64,
            y: 16,
            size: 16
        },
        roadVerticalDoubleYellowLine = {
            x: 80,
            y: 16,
            size: 16
        },
        roadVerticalCenterLineHardRight = {
            x: 96,
            y: 16,
            size: 16
        },
        roadVerticalCenterLineSoftRight = {
            x: 64,
            y: 32,
            size: 16
        },
        roadVerticalSingleYellowLine = {
            x: 80,
            y: 32,
            size: 16
        },
        roadVerticalCenterLineSoftLeft = {
            x: 96,
            y: 32,
            size: 16
        },

        // Horizontal Road

        roadHorizontalCrosswalk1 = {
            x: 112,
            y: 0,
            size: 16
        },
        roadHorizontalCenterLineHardRight = {
            x: 128,
            y: 0,
            size: 16
        },
        roadHorizontalCenterLineSoftLeft = {
            x: 144,
            y: 0,
            size: 16
        },
        roadHorizontalCrosswalk2 = {
            x: 112,
            y: 16,
            size: 16
        },
        roadHorizontalDoubleYellowLine = {
            x: 128,
            y: 16,
            size: 16
        },
        roadHorizontalSingleYellowLine = {
            x: 144,
            y: 16,
            size: 16
        },
        roadHorizontalCrosswalk3 = {
            x: 112,
            y: 32,
            size: 16
        },
        roadHorizontalCenterLineHardLeft = {
            x: 128,
            y: 32,
            size: 16
        },
        roadHorizontalCenterLineSoftRight = {
            x: 144,
            y: 32,
            size: 16
        },

        // Base Tile

        roadBaseTile = {
            x: 0,
            y: 0,
            size: 16
        }
    ],
    overlayRoad = [

        // Cracks small

        crackStreetSmall1 = {
            x: 16,
            y: 0,
            size: 16
        },
        crackStreetSmall2 = {
            x: 32,
            y: 0,
            size: 16
        },
        crackStreetSmall3 = {
            x: 48,
            y: 0,
            size: 16
        },

        // Cracks big

        crackStreetBigTopLeft = {
            x: 64,
            y: 48,
            size: 16
        },
        crackStreetBigTopCenter = {
            x: 80,
            y: 48,
            size: 16
        },
        crackStreetBigTopRight = {
            x: 96,
            y: 48,
            size: 16
        },
        crackStreetBigCenterLeft = {
            x: 64,
            y: 64,
            size: 16
        },
        crackStreetBigCenterCenter = {
            x: 80,
            y: 64,
            size: 16
        },
        crackStreetBigCenterRight = {
            x: 96,
            y: 64,
            size: 16
        },
        crackStreetBigBottomLeft = {
            x: 64,
            y: 80,
            size: 16
        },
        crackStreetBigBottomCenter = {
            x: 80,
            y: 80,
            size: 16
        },
        crackStreetBigBottomRight = {
            x: 96,
            y: 80,
            size: 16
        },

        // Bushes small

        bushStreetSmall1 = {
            x: 48,
            y: 16,
            size: 16
        },
        bushStreetSmall2 = {
            x: 0,
            y: 32,
            size: 16
        },
        bushStreetSmall3 = {
            x: 16,
            y: 32,
            size: 16
        },
        bushStreetSmall4 = {
            x: 32,
            y: 32,
            size: 16
        },
        bushStreetSmall5 = {
            x: 48,
            y: 32,
            size: 16
        },

        // Bushes big

        bushStreetBigTopLeft = {
            x: 0,
            y: 48,
            size: 16
        },
        bushStreetBigTopCenter1 = {
            x: 16,
            y: 48,
            size: 16
        },
        bushStreetBigTopCenter2 = {
            x: 32,
            y: 48,
            size: 16
        },
        bushStreetBigTopRight = {
            x: 48,
            y: 48,
            size: 16
        },
        bushStreetBigCenterLeft = {
            x: 0,
            y: 64,
            size: 16
        },
        bushStreetBigCenterRight = {
            x: 48,
            y: 64,
            size: 16
        },
        bushStreetBigBottomLeft = {
            x: 0,
            y: 80,
            size: 16
        },
        bushStreetBigBottomCenter1 = {
            x: 16,
            y: 80,
            size: 16
        },
        bushStreetBigBottomCenter2 = {
            x: 32,
            y: 80,
            size: 16
        },
        bushStreetBigBottomRight = {
            x: 48,
            y: 80,
            size: 16
        },
        bushStreetBigCenterCenter1 = {
            x: 0,
            y: 16,
            size: 16
        },
        bushStreetBigCenterCenter2 = {
            x: 16,
            y: 16,
            size: 16
        },
        bushStreetBigCenterCenter3 = {
            x: 32,
            y: 16,
            size: 16
        },

        // Manhole cover

        manholeCover = {
            x: 112,
            y: 48,
            size: 16
        }
    ],
    baseSidewalk = [

        // Sidewalk center

        sidewalkCenterTopLeft = {
            x: 0,
            y: 80,
            size: 16
        },
        sidewalkCenterTopRight = {
            x: 16,
            y: 80,
            size: 16
        },
        sidewalkCenterBottomLeft = {
            x: 0,
            y: 112,
            size: 16
        },
        sidewalkCenterBottomRight = {
            x: 16,
            y: 112,
            size: 16
        },
        sidewalkCenterEdgeLeftRight = {
            x: 0,
            y: 96,
            size: 16
        },
        sidewalkCenterEdgeLeft = {
            x: 16,
            y: 96,
            size: 16
        },
        sidewalkCenterEdgeTop = {
            x: 32,
            y: 80,
            size: 16
        },
        sidewalkCenterEdgeOnlyLeft = {
            x: 64,
            y: 80,
            size: 16
        },
        sidewalkCenterEdgeOnlyTop = {
            x: 48,
            y: 96,
            size: 16
        },
        
        // Sidewalk Edge normal

        sidewalkEdgeNormalTopLeft = {
            x: 0,
            y: 0,
            size: 16
        },
        sidewalkEdgeNormalTopCenter = {
            x: 16,
            y: 0,
            size: 16
        },
        sidewalkEdgeNormalTopRight = {
            x: 32,
            y: 0,
            size: 16
        },
        sidewalkEdgeNormalCenterLeft = {
            x: 0,
            y: 16,
            size: 16
        },
        sidewalkEdgeNormalCenterRight = {
            x: 32,
            y: 16,
            size: 16
        },
        sidewalkEdgeNormalBottomLeft = {
            x: 0,
            y: 32,
            size: 16
        },
        sidewalkEdgeNormalBottomCenter = {
            x: 16,
            y: 32,
            size: 16
        },
        sidewalkEdgeNormalBottomRight = {
            x: 32,
            y: 32,
            size: 16
        },

        // Sidewalk cracks

        sidewalkEdgeCracksTopLeft = {
            x: 48,
            y: 0,
            size: 16
        },
        sidewalkEdgeCracksTopCenter1 = {
            x: 64,
            y: 0,
            size: 16
        },
        sidewalkEdgeCracksTopCenter2 = {
            x: 80,
            y: 0,
            size: 16
        },
        sidewalkEdgeCracksTopRight = {
            x: 96,
            y: 0,
            size: 16
        },
        sidewalkEdgeCracksCenterLeft1 = {
            x: 48,
            y: 16,
            size: 16
        },
        sidewalkEdgeCracksCenterLeft2 = {
            x: 48,
            y: 32,
            size: 16
        },
        sidewalkEdgeCracksCenterRight1 = {
            x: 96,
            y: 16,
            size: 16
        },
        sidewalkEdgeCracksCenterRight2 = {
            x: 96,
            y: 32,
            size: 16
        },
        sidewalkEdgeCracksBottomLeft = {
            x: 48,
            y: 48,
            size: 16
        },
        sidewalkEdgeCracksBottomCenter1 = {
            x: 64,
            y: 48,
            size: 16
        },
        sidewalkEdgeCracksBottomCenter2 = {
            x: 80,
            y: 48,
            size: 16
        },
        sidewalkEdgeCracksBottomRight = {
            x: 96,
            y: 48,
            size: 16
        },

        // Sidewalk mossy

        sidewalkEdgeMossyTopLeft = {
            x: 112,
            y: 0,
            size: 16
        },
        sidewalkEdgeMossyTopCenter = {
            x: 128,
            y: 0,
            size: 16
        },
        sidewalkEdgeMossyTopRight = {
            x: 144,
            y: 0,
            size: 16
        },
        sidewalkEdgeMossyCenterLeft = {
            x: 112,
            y: 16,
            size: 16
        },
        sidewalkEdgeMossyCenterRight = {
            x: 144,
            y: 16,
            size: 16
        },
        sidewalkEdgeMossyBottomLeft = {
            x: 112,
            y: 32,
            size: 16
        },
        sidewalkEdgeMossyBottomCenter = {
            x: 128,
            y: 32,
            size: 16
        },
        sidewalkEdgeMossyBottomRight = {
            x: 144,
            y: 32,
            size: 16
        },

        // Sidewalk drains

        sidewalkDrainNormal = {
            x: 16,
            y: 48,
            size: 16
        },
        sidewalkDrainCracks = {
            x: 32,
            y: 48,
            size: 16
        },
        sidewalkDrainMossy = {
            x: 0,
            y: 48,
            size: 16
        },
    ]
]