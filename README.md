# loc-bind

June. 15, 2020
<br />

Ever had the urge to validate location on a services like region based services? And wanted to validate geolocation in some sane, easy and cheapest way? Don't want to user third party apis, for whatever reason? Then loc-bind is what you're looking for!

## Description

loc-bind is a tiny npm package that takes the bounded area in th form of polygon coordinates and checks if the point/location lat, long lies inside the bounded region or not.

## Install

```
$ npm i loc-bind
or
$ yarn add loc-bind
```

## Usage

```js
const locBind = require('loc-bind');
or
import locBind from "loc-bind";
// Load core loc-bind.

```

## Contribution ✨

Any kinds of contributions are entertained.



## Inspiration
[Point In Polygon](https://github.com/substack/point-in-polygon)
[Robust Point in Polygon](https://github.com/mikolalysenko/robust-point-in-polygon)