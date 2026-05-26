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

placeRoad(startX, startY, direction, length) {
    if (direction == "horizontal") {
        for (let i = 0; i < length; i++) {
            
        }
        for (let j = 0; j < ROAD_WIDTH; j++) {
            map[startY + i][startX] = 1
        }
    }
    else if (direction == "vertical") {

    }
}