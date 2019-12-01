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
    	this.view.onRun();
    }

    onUpdate(delta) {
    	
    }
}