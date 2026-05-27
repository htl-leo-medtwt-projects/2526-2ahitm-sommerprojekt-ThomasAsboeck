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
            if (length < 0) {
                for (let i = 0; i < length * -1; i++) {
                    for (let j = 0; j < ROAD_WIDTH; j++) {
                        map[startY + j][startX - i] = 2;
                    }
                }
            }
            else {
                for (let i = 0; i < length; i++) {
                    for (let j = 0; j < ROAD_WIDTH; j++) {
                        map[startY + j][startX + i] = 2;
                    }
                }
            }

        }
    }
    else if (direction == "vertical") {
        if (startY + length <= MAP_HEIGHT && startX + ROAD_WIDTH <= MAP_WIDTH) {
            if (length < 0) {
                for (let i = 0; i < length * -1; i++) {
                    for (let j = 0; j < ROAD_WIDTH; j++) {
                        map[startY - i][startX + j] = 1;
                    }
                }
            }
            else {
                for (let i = 0; i < length; i++) {
                    for (let j = 0; j < ROAD_WIDTH; j++) {
                        map[startY + i][startX + j] = 1;
                    }
                }
            }
        }
    }
}

function generateRoadNetwork() {
    placeRoad(64, 0, "vertical", MAP_HEIGHT);
    placeRoad(0, 64, "horizontal", MAP_WIDTH);
}

function canPlaceHorizontal(startX, startY, length) {
    for (let i = 0; i < Math.abs(length); i++) {
        let checkX = startX + (length < 0 ? -i : i);
        for (let check = -ROAD_WIDTH * 2; check < ROAD_WIDTH * 2; check++) {
            let checkY = startY + check;
            if (checkY >= 0 && checkY < MAP_HEIGHT) {
                if (map[checkY][checkX] == 2) return false;
            }
        }
    }
    return true;
}

function canPlaceVertical(startX, startY, length) {
    for (let i = 0; i < Math.abs(length); i++) {
        let checkY = startY + (length < 0 ? -i : i);
        for (let check = -ROAD_WIDTH * 2; check < ROAD_WIDTH * 2; check++) {
            let checkX = startX + check;
            if (checkX >= 0 && checkX < MAP_WIDTH) {
                if (map[checkY][checkX] == 1) return false;
            }
        }
    }
    return true;
}

function generateBranchHorizontally(startX, startY, goLeft) {
    if (goLeft) {
        let randomLength = Math.floor(rng() * startX);
        if (canPlaceHorizontal(startX - 1, startY, -randomLength)) {
            placeRoad(startX - 1, startY, "horizontal", -randomLength);
        }
    } else {
        let randomLength = Math.floor(rng() * (MAP_WIDTH - startX));
        if (canPlaceHorizontal(startX + 1, startY, randomLength)) {
            placeRoad(startX + 1, startY, "horizontal", randomLength);
        }
    }
}

function generateBranchVertically(startX, startY, goUp) {
    if (goUp) {
        let randomLength = Math.floor(rng() * startY);
        if (canPlaceVertical(startX, startY - 1, -randomLength)) {
            placeRoad(startX, startY - 1, "vertical", -randomLength);
        }
    } else {
        let randomLength = Math.floor(rng() * (MAP_HEIGHT - startY));
        if (canPlaceVertical(startX, startY + 1, randomLength)) {
            placeRoad(startX, startY + 1, "vertical", randomLength);
        }
    }
}

function generateBranches() {
    for (let y = 1; y < MAP_HEIGHT - ROAD_WIDTH; y++) {
        for (let x = 0; x < MAP_WIDTH; x++) {

            let leftEdge = map[y][x] == 1 && map[y][x - 1] == 0;
            let rightEdge = map[y][x] == 1 && map[y][x + 1] == 0;
            let tooClose;

            if (leftEdge) {
                tooClose = false;
                for (let check = 1; check < ROAD_WIDTH * 2; check++) {
                    if (y - check >= 0 && map[y - check][x - 1] == 2) tooClose = true;
                    if (y + check + ROAD_WIDTH < MAP_HEIGHT && map[y + check][x - 1] == 2) tooClose = true;
                }
            }
            else if (rightEdge) {
                tooClose = false;
                for (let check = 1; check < ROAD_WIDTH * 2; check++) {
                    if (y - check >= 0 && map[y - check][x + 1] == 2) tooClose = true;
                    if (y + check + ROAD_WIDTH < MAP_HEIGHT && map[y + check][x + 1] == 2) tooClose = true;
                }
            }
            if ((leftEdge || rightEdge) && !tooClose && rng() < 0.3) {
                generateBranchHorizontally(x, y, leftEdge);
            }
        }
    }

    for (let y = 1; y < MAP_HEIGHT - ROAD_WIDTH; y++) {
        for (let x = 0; x < MAP_WIDTH; x++) {

            let UpEdge = map[y][x] == 2 && map[y - 1][x] == 0;
            let BottomEdge = map[y][x] == 2 && map[y + 1][x] == 0;
            let tooClose;

            if (UpEdge) {
                tooClose = false;
                for (let check = 1; check < ROAD_WIDTH * 2; check++) {
                    if (x - check >= 0 && map[y - 1][x - check] == 1) tooClose = true;
                    if (x + check + ROAD_WIDTH < MAP_WIDTH && map[y - 1][x + check] == 1) tooClose = true;
                }
            }
            else if (BottomEdge) {
                tooClose = false;
                for (let check = 1; check < ROAD_WIDTH * 2; check++) {
                    if (x - check >= 0 && map[y + 1][x - check] == 1) tooClose = true;
                    if (x + check + ROAD_WIDTH < MAP_WIDTH && map[y + 1][x + check] == 1) tooClose = true;
                }
            }
            if ((UpEdge || BottomEdge) && !tooClose && rng() < 0.3) {
                generateBranchVertically(x, y, UpEdge);
            }
        }
    }
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
generateBranches();