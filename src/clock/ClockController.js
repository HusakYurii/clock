export default class ClockController {
    constructor() {
        this.model = null;
        this.view = null;
    }

    onInitialize(model, view) {
        this.model = model;
        this.view = view;
        this.view.onInitialize(this.model.selectors);
    }

    onRun() {
    	/*Can be used*/ 
    	this.view.onRun();
    }

    runClock() {
    	this.model.isIdleState = true;
    	this.model.updateTime(this.model.newTime);
    	this.view.updateTime(this.model.currTime);
    }

	desibleButtons() {
		this.view.desibleButtons();
	}

    onUpdate(delta) {
    	if(!this.model.isIdleState) return;

    	const {newTime, currTime} = this.model;

    	if(newTime !== currTime) {
    		this.model.updateTime(newTime);
    		this.view.updateTime(newTime);
    	}
    }
}