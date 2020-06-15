# loc-bind

June. 15, 2020
<br />

Ever had the urge to validate location on a services like region based services? And wanted to validate geolocation in some sane, easy and cheapest way? Don't want to use third party apis, for whatever reason? Then loc-bind is what you're looking for!

## Description

loc-bind is a tiny npm package that takes the bounded area in th form of polygon coordinates and checks if the point/location lat, long lies inside the bounded region or not.

## Install

```
$ npm i loc-bind
or
$ yarn add loc-bind
```

## Usage

```javascript
const locBind = require('loc-bind');
// Load core loc-bind.

const polygonCoordinates = [
    [85.27268661724837, 27.703490979573274], 
    [85.27749313580306, 27.725070434748005], 
    [85.29328598248274, 27.73540274623595], 
    [85.30324234234602, 27.743607119292363], 
    [85.31854215362551, 27.745555735266393], 
    [85.3360138263724, 27.738878392849898], 
    [85.34474966274584, 27.738175490892473], 
    [85.35785341730602, 27.74204139554027], 
    [85.37702933059592, 27.740436376090585], 
    [85.38020666589044, 27.73418697607903], 
    [85.3664382129475, 27.725437213950002], 
    [85.37208680902667, 27.72324966367269], 
    [85.36369018833157, 27.71617064338767], 
    [85.35809244120152, 27.709445148471318], 
    [85.35369421131361, 27.701303205095897], 
    [85.36209083200872, 27.696346942112896], 
    [85.37288648718811, 27.698471082380422], 
    [85.35755476849451, 27.67997373762509], 
    [85.33590205625748, 27.666213135028443], 
    [85.32868376564718, 27.657939519996958], 
    [85.31382257909662, 27.66170033173455], 
    [85.30065981386609, 27.673358025817663], 
    [85.29046928594569, 27.68539046996179], 
    [85.2802787580253, 27.688022390418126], 
    [85.27136204609495, 27.69441393311658], 
    [85.27268661724837, 27.703490979573274]];

// Bounding coordinates of kathmandu valley
/* polygon coordinates(clipping boundry geojson) can be easily exported from https://export.hotosm.org/en/v3/exports/newformats
in Geopackage .gpkg format */

const coordThamel = [85.3061304421, 27.709090497];
const coordCharikot = [86.0333332, 27.666664];

console.log(locBind.inside(coordThamel, polygonCoordinates));
// returns true as thamel lies inside kathmandu valley

console.log(locBind.inside(coordCharikot, polygonCoordinates));
// returns false as charikot doesn't lie inside kathmandu valley

```

## Contribution ✨

Any kinds of contributions are entertained.


## Inspiration
[Ray Casting Algorithm ](https://rosettacode.org/wiki/Ray-casting_algorithm#JavaScript)

[Point In Polygon](https://github.com/substack/point-in-polygon)

[Robust Point In Polygon](https://github.com/mikolalysenko/robust-point-in-polygon)
