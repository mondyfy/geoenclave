import { Point } from "./types";

const isLeft = (p1: Point, p2: Point, point: Point): number => {
    return (p2[1] - p1[1]) * (point[0] - p1[0]) - (point[1] - p1[1]) * (p2[0] - p1[0]);
}

const windingNumber = (lat:number, lng: number, polygon: Point[]): number => {
    const polygonLength = polygon.length;
    let wn = 0;

    for (let i = 0; i < polygonLength; i++) {
        const p1 = polygon[i];
        const p2 = polygon[(i + 1) % polygonLength];

        if (p1[0] <= lat) {
            if (p2[0] > lat && isLeft(p1, p2, [lat, lng]) > 0) {
                wn++;
            }
        } else {
            if (p2[0] <= lat && isLeft(p1, p2, [lat, lng]) < 0) {
                wn--;
            }
        }
    }

    return wn;
}

const isWindingNumber = (point, polygon): boolean => {
    const wn = windingNumber(point[0], point[1], polygon);
    let isWindingNumber = false;
    if (Math.abs(wn) > 0) {
        isWindingNumber = true;
    } else {
        isWindingNumber = false;
    }
    return isWindingNumber;
}

const countWindingNumbers = (points: Point[], polygon: Point[]): number => {
    let count = 0;

    for (const point of points) {
        if (isWindingNumber(point, polygon)) {
            count++;
        }
    }

    return count;
}

export { isWindingNumber, countWindingNumbers };