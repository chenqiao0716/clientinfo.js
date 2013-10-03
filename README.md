clientinfo.js
=============

A tiny script that returns all kinds of relevant data about the client device.

Returns an array like this:

```javascript
{

	aspectratio: "16:9"
	browserlang: "nl"
	browsername: "chrome"
	browserversion: "30.0.1599.66"
	colordepth: "24bit"
	daypart: "afternoon"
	devicetype: "desktop"
	java: true
	orientation: "landscape"
	osname: "macos"
	osversion: "os x 10.8.5"
	pixelratio: 1
	retina: false

}

```

Usage:

```javascript
console.log(clientinfo.browsername);
console.log(clientinfo.devicetype);
console.log(clientinfo.pixelratio);
// etc

```