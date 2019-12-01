import Controller from "./ClockController";
import Model from "./ClockModel";
import View from "./ClockView";
import FSM from "../fsm";

export default class Clock {
    constructor() {
        this.controller = null;
        this.fsm = null;
    }

    initialize() {
        this.controller = new Controller();
        this.controller.onInitialize(new Model, new View);

        this.fsm = new FSM(this);
    }

    run() {
    	this.controller.onRun();
        this.fsm.gotToIdleState();
    }

    update(delta) {
        this.controller.onUpdate(delta);
    }
}