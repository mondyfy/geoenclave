type Point = [number, number];

const isPointInsidePolygon = (point: Point, polygon: Point[]): boolean => {
    const x = point[0], y = point[1];

    let isInside = false;
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        const xi = polygon[i][0], yi = polygon[i][1];
        const xj = polygon[j][0], yj = polygon[j][1];

        const isIntersect = ((yi > y) !== (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (isIntersect) isInside = !isInside;
    }
    return isInside;
};

const countPointsInsidePolygon = (points: Point[], polygon: Point[]): number => {
    let count = 0;

    for (const point of points) {
        if (isPointInsidePolygon(point, polygon)) {
            count++;
        }
    }

    return count;
}

export { isPointInsidePolygon, countPointsInsidePolygon };
