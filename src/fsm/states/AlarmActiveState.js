import IState from "./IState";

export default class AlarmActiveState extends IState {

    onEnterState() { 
        const { controller } = this.fsm.clock;
        const { view: { buttons } } = controller;

        controller.enableButtons();
        buttons.forEach(({ _, element }) =>   element.onclick = (event) => this.onButtonClick(event));
    }

    onButtonClick(event) {
        this.fsm.gotToIdleState();
    }

    onExitState(cb) { 
        const { controller } = this.fsm.clock;
        const { view: { buttons } } = controller;

        controller.disableAlarm();

        buttons.forEach(({ _, element }) => element.onclick = null);
        cb();
    }
}