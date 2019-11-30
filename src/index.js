import Clock from "./clock/Clock";
const clock = new Clock();
clock.initialize();
clock.run();

let oldTime = performance.now();
const tiker = function (newTime = performance.now()) {

	let delta = Number((newTime - oldTime).toFixed(2));
	oldTime = newTime;

	clock.update(delta);
	window.requestAnimationFrame(tiker);	
};

tiker();