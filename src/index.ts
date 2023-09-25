export * from './types';
import { ALGORITHMS, Point } from "./types";
import { isPointPolygon, countPointsInPolygon } from './raycasting';
import { isWindingNumber, countWindingNumbers } from './windingnumber';

const isPointInsidePolygon = (point: Point, polygon: Point[], algorithm: ALGORITHMS): boolean => {
    switch(algorithm) {
        case ALGORITHMS.RAYCASTING:
          return isPointPolygon(point, polygon);
        case ALGORITHMS.WINDINGNUMBER:
            return isWindingNumber(point, polygon);
        default:
          return isWindingNumber(point, polygon);
      }
};

const countPointsInsidePolygon = (points: Point[], polygon: Point[], algorithm: ALGORITHMS): number => {
    switch(algorithm) {
        case ALGORITHMS.RAYCASTING:
          return countPointsInPolygon(points, polygon);
        case ALGORITHMS.WINDINGNUMBER:
            return countWindingNumbers(points, polygon);
        default:
          return countWindingNumbers(points, polygon);
      }
}

export { isPointInsidePolygon, countPointsInsidePolygon };
