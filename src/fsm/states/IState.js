/**
 * @interface IState
 */
export default class IState {

    /** 
     * @param {String} name - state's name 
     * @param {FSM} fsm 
     */
    constructor(name = "noName", fsm) {
        this._name = name;
        this._fsm = fsm;
    }

    /** @abstract */
    onEnterState() { }

    /** @abstract */
    onExitState(cb) { }

    get name() {
        return this._name;
    }

    get fsm() {
        return this._fsm;
    }
}