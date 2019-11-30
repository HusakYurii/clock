import Controller from "./ClockController";
import Model from "./ClockModel";
import View from "./ClockView";
import FSM from "../fsm";

export default class Clock {
    constructor() {
        this._controller = null;
        this._fsm = null;
    }

    initialize() {
        this._controller = new Controller();
        this._controller.onInitialize(new Model, new View);

        this._fsm = new FSM(this.controller);
    }

    run() {
    	this.controller.onRun();
    }

    update(delta) {
    
    }

    get controller() {
        return this._controller;
    }

    get fsm() {
        return this._fsm;
    }
}