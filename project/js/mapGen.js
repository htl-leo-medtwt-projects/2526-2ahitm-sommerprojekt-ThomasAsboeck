const MAP_WIDTH = 128;
const MAP_HEIGHT = 128;
const ROAD_WIDTH = 5;
let map = [];

function initMap() {
    for (let y = 0; y < MAP_HEIGHT; y++) {
        map[y] = [];
        for (let x = 0; x < MAP_WIDTH; x++) {
            map[y][x] = 0;
        }
    }
}

function placeRoad(startX, startY, direction, length) {
    if (direction == "horizontal") {
        if (startX + length <= MAP_WIDTH && startY + ROAD_WIDTH <= MAP_HEIGHT) {
            for (let i = 0; i < length; i++) {
                for (let j = 0; j < ROAD_WIDTH; j++) {
                    map[startY + j][startX + i] = 1;
                }
            }
        }
    }
    else if (direction == "vertical") {
        if (startY + length <= MAP_HEIGHT && startX + ROAD_WIDTH <= MAP_WIDTH) {
            for (let i = 0; i < length; i++) {
                for (let j = 0; j < ROAD_WIDTH; j++) {
                    map[startY + i][startX + j] = 1;
                }
            }
        }
    }
}

function generateRoadNetwork() {
    placeRoad(64, 0, "vertical", MAP_HEIGHT);
    placeRoad(0, 64, "horizontal", MAP_WIDTH);
}

function generateBranchHorizontally(startX, startY) {
    let randomLength = Math.floor(rng()*(MAP_WIDTH-startX));
    placeRoad(startX, startY, "horizontal", randomLength);
}

function generateBranches() {
    for (let y = )
}

function debugMap() {
    let output = "";
    for (let y = 0; y < MAP_HEIGHT; y++) {
        for (let x = 0; x < MAP_WIDTH; x++) {
            output += map[y][x] + " ";
        }
        output += "\n";
    }
    console.log(output);
}

initMap();
generateRoadNetwork();