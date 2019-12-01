import { AlarmIdleState, AlarmActiveState, IdleState } from "./states/index";

export default class FSM {

    /** 
     * @param {Object} clock - controller which has access to model and view 
     */
    constructor(clock) {
        this.clock = clock;

        this.states = [
            new IdleState("idleState", this),
            new AlarmIdleState("alarmIdleState", this),
            new AlarmActiveState("alarmActiveState", this),
        ];

        this.previousState = "";
        this.currState = "";
    }

    gotToIdleState() {
        this.changeStateTo('idleState');
    }

    gotToAlarmIdleState() {
        this.changeStateTo('alarmIdleState');
    }

    gotToAlarmAciveState() {
        this.changeStateTo('alarmActiveState');
    }

    changeStateTo(newState) {
        const onExitFinished = () => {
            this.previousState = this.currState;
            this.currState = newState;

            const state = this.getState(this.currState);
            state.onEnterState();
            this.logState();
        };

        if (this.currState) {
            const prevState = this.getState(this.currState);
            prevState.onExitState(onExitFinished);
        } else {
            onExitFinished();
        }
    }

    getState(name) {
        return this.states.find(state => state.name === name);
    }

    logState() {
        console.log(`State has been changed!
            curr state: ${this.currState},
            previous state: ${this.previousState}`);
    }
}