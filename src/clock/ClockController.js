export default class ClockController {
    constructor() {
        this._model = null;
        this._view = null;
    }

    onInitialize(model, view) {
        this._model = model;
        this._view = view;
    }

    onRun() {
    	this.view.onRun();
    }

    onUpdate(delta) {
    	
    }
    
    get model() {
        return this._model;
    }

    get view() {
        return this._view;
    }
}