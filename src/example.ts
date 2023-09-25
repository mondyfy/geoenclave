import { isPointInsidePolygon, countPointsInsidePolygon, ALGORITHMS, Point } from '../src';

const kathmanduRingRoadPolygon: Point[] = [
    [
        27.72766858385793,
        85.30444243773503
    ],
    [
        27.73517829739761,
        85.30549163862372
    ],
    [
        27.735093921220887,
        85.31560211372258
    ],
    [
        27.73568455134787,
        85.32027582534324
    ],
    [
        27.739481382740536,
        85.32695255398438
    ],
    [
        27.742417571012687,
        85.33200779415357
    ],
    [
        27.740055177866815,
        85.33706302908323
    ],
    [
        27.736342740875475,
        85.34145060215174
    ],
    [
        27.729761292929318,
        85.34536125667536
    ],
    [
        27.724023297456096,
        85.34478895861308
    ],
    [
        27.718622554009244,
        85.34688736039044
    ],
    [
        27.707567070095383,
        85.34354899345013
    ],
    [
        27.705879116033017,
        85.34621969328974
    ],
    [
        27.706554299864546,
        85.35032110684816
    ],
    [
        27.704613128712317,
        85.35251488814289
    ],
    [
        27.701068288851545,
        85.35222874959072
    ],
    [
        27.698873810000922,
        85.3550901979862
    ],
    [
        27.69507556479407,
        85.35518558798255
    ],
    [
        27.684777431536556,
        85.34927191119894
    ],
    [
        27.677601930027333,
        85.34936729071633
    ],
    [
        27.669919398598278,
        85.33801684521507
    ],
    [
        27.664600408339666,
        85.32981400761929
    ],
    [
        27.659112289409926,
        85.32599873261309
    ],
    [
        27.658099065096362,
        85.3225649861554
    ],
    [
        27.666035718989683,
        85.31121454589359
    ],
    [
        27.66730215363662,
        85.30787617895328
    ],
    [
        27.6746471731087,
        85.30215327168344
    ],
    [
        27.68393327690198,
        85.30196250740914
    ],
    [
        27.685199504088306,
        85.2948088654626
    ],
    [
        27.688407210514445,
        85.2871783180699
    ],
    [
        27.689926617266245,
        85.2832676635463
    ],
    [
        27.693809447504254,
        85.28155079031747
    ],
    [
        27.705457118800823,
        85.28202769838335
    ],
    [
        27.717694270341777,
        85.28364918947506
    ],
    [
        27.718875715959076,
        85.28507991891227
    ],
    [
        27.72385452544807,
        85.29557192255967
    ]];

const coordThamel: Point = [27.717028, 85.311256];
const coordCharikot: Point = [27.666664, 86.0333332];

// Bounding coordinates of kathmandu ringroad
/* polygon coordinates(clipping boundry geojson) can be easily exported from https://export.hotosm.org/
in Geopackage .gpkg format or ypu case use any polygon drawing tool on top of any map */


console.log(isPointInsidePolygon(coordThamel, kathmanduRingRoadPolygon, ALGORITHMS.RAYCASTING));
// returns true as thamel is inside the kathmandu ring road

console.log(isPointInsidePolygon(coordCharikot, kathmanduRingRoadPolygon, ALGORITHMS.RAYCASTING));
// returns false as charikot is outside the kathmandu ring road

console.log(countPointsInsidePolygon([coordThamel], kathmanduRingRoadPolygon, ALGORITHMS.RAYCASTING));
// returns 1 as thamel is inside the kathmandu ring road

console.log(countPointsInsidePolygon([coordCharikot], kathmanduRingRoadPolygon, ALGORITHMS.RAYCASTING));
// returns 0 as charikot is outside the kathmandu ring road