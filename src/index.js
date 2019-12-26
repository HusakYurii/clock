import Clock from "./clock/Clock";

const clock = new Clock();
clock.debuggerMode = true;

clock.initialize();
clock.run();

const tiker = function () {
	clock.update();
	window.requestAnimationFrame(tiker);	
};

tiker();