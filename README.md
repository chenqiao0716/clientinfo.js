clientinfo.js
=============

A tiny script that returns all kinds of relevant data about the client device.
The goal is to add any type of information that can be useful when developing a client-centered website. 
This means that in addition to numerical data like the OS and browser version, things like the part of the day and devicetype are also available.

## Usage:

```javascript
console.log(clientinfo);
```

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
	orientation: "landscape"
	osname: "macos"
	osversion: "os x 10.8.5"
	pixelratio: 1
	retina: false

}
```

You can also access individual values like this:

```javascript
console.log(clientinfo.browsername);
console.log(clientinfo.devicetype);
console.log(clientinfo.pixelratio);
// etcetera.
```

To do:

* [ ] include device and viewport dimensions
* [ ] include function to add relevant classes to the body of the document, so that it's easy to style based on these values.