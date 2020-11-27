
var  g_tiltAlpha = 0;
var  g_tiltBeta = 0;
var g_tiltGamma = 0;
var touchPermissionGranted = false;
var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

function smuckers(event) {
	g_tiltAlpha = event.alpha;
    g_tiltBeta = event.beta;
    g_tiltGamma = event.gamma;

	if (!isIOS) {
		window.addEventListener("deviceorientation", smuckers, true);
	}
}

function requestDeviceOrientation () {
	alert('click');
  if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
	DeviceOrientationEvent.requestPermission().then(permissionState => {
	  if (permissionState === 'granted') {
		touchPermissionGranted = true;
		window.addEventListener("deviceorientation", smuckers, true);
	  }
	})
  .catch(console.error);
  }
}

window.addEventListener('load', function(){ 
 document.body.addEventListener('touchstart', requestDeviceOrientation, true);
});

function tilt_init() { // call resize once on gamestart
	if (!isIOS) {
		window.addEventListener("deviceorientation", smuckers, true);
	}
}

function tilt_x() {
   return g_tiltBeta;
}

function tilt_y() {
   return g_tiltGamma;
}

function tilt_z() {
   return g_tiltAlpha;
}
