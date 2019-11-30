import { SettingsState, AlarmIdleState, AlarmActiveState, IdleState } from "./states/index";

export default class FSM {

    /** 
     * @param {Object} clock - controller which has access to model and view 
     */
    constructor(clock) {
        this._clock = clock;

        this._states = [
            new IdleState("idleState", this),
            new AlarmIdleState("alarmState", this),
            new AlarmActiveState("alarmState", this),
            new SettingsState("settingsState", this),
        ];

        this._previousState = "";
        this._currState = "";
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

    gotToSettingsState() {
        this.changeStateTo('settingsState');
    }

    changeStateTo(newState) {
        const onExitFinished = () => {
            this.previousState = this.currState;
            this.currState = newState;

            const state = this.getState(this.currState);
            state.onEnterState();
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

    get clock() {
        return this._clock;
    }

    get states() {
        return this._states;
    }

    get previousState() {
        return this._previousState;
    }

    get currState() {
        return this._currState;
    }
}