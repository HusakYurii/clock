import { SettingsState, AlarmIdleState, AlarmActiveState, IdleState } from "./states/index";

export default class FSM {
  constructor(appController) {
    this.appController = appController;
    this.states = [
      new IdleState("idleState", this),
      new AlarmIdleState("alarmState", this),
      new AlarmActiveState("alarmState", this),
      new SettingsState("settingsState", this),
    ];

    this.previousState = "";
    this.currState = "";
    this.transitions = null;
  }

  setConfig({transitions}){
    this.transitions = [...transitions];
  }

  gotToIdleState(){
    this.changeStateTo('idleState');
  }

  gotToAlarmIdleState(){
    this.changeStateTo('alarmIdleState');
  }

  gotToAlarmAciveState(){
    this.changeStateTo('alarmActiveState');
  }

  gotToSettingsState(){
    this.changeStateTo('settingsState');
  }

  changeStateTo(newState){
    if(this.currState){
      const prevState =  this.getState(this.currState);
      prevState.onExit();
    }

    this.previousState = this.currState;
    this.currState = newState;

    const state = this.getState(this.currState);
    state.onEnter();
  }

  getState(name){
    return this.states.find(state => state.name === name);
  }
}