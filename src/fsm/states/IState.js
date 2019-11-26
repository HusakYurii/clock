export default class IState {
  constructor(name = "noName", fsm) {
    this._name = name;
    this._fsm = fsm;
  }

  get name() {
    return this._name;
  }

  get fsm() {
    return this._fsm;
  }
}