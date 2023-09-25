import { Point } from "./types";

const isPointPolygon = (point: Point, polygon: Point[]): boolean => {
    const x = point[0], y = point[1];

    let isInside = false;
    const polygonLength = polygon.length;
    for (let i = 0, j = polygonLength - 1; i < polygonLength; j = i++) {
        const xi = polygon[i][0], yi = polygon[i][1];
        const xj = polygon[j][0], yj = polygon[j][1];

        const isIntersect = ((yi > y) !== (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (isIntersect) isInside = !isInside;
    }
    return isInside;
};

const countPointsInPolygon = (points: Point[], polygon: Point[]): number => {
    let count = 0;

    for (const point of points) {
        if (isPointPolygon(point, polygon)) {
            count++;
        }
    }

    return count;
}

export { isPointPolygon, countPointsInPolygon };
