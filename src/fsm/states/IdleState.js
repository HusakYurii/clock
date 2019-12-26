import IState from "./IState";

export default class IdleState extends IState {

    onEnterState() {
        const { controller } = this.fsm.clock;
        const { view: { buttons } } = controller;

        controller.desibleButtons();
        controller.runClock();

        buttons.forEach(({ _, element }) => element.onclick = (event) => this.onButtonClick(event));
    }

    onButtonClick(event) {
        this.fsm.gotToAlarmIdleState();
    }

    onExitState(cb) {
        const { controller } = this.fsm.clock;
        const { view: { buttons } } = controller;

        controller.stopClock();

        buttons.forEach(({ _, element }) => element.onclick = null);
        cb();
    }
}