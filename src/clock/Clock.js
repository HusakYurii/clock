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
        this.fsm.gotToIdleState();
    }

    update(delta) {
        if (!this.controller.model.isIdleState) return;

        const { newTime, currTime } = this.controller.model;

        if (newTime !== currTime) {
            this.controller.model.updateTime(newTime);
            this.controller.view.updateTime(newTime);
        }

        if (this.controller.model.isAlarmTime) {
            this.fsm.gotToAlarmAciveState();
        }
    }
}