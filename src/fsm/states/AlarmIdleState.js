import IState from "./IState";

export default class AlarmIdleState extends IState {

    onEnterState() {
        const { controller } = this.fsm.clock;
        const { view: { buttons } } = controller;

        controller.enableButtons();
        controller.showAlarmTime();

        buttons.forEach(({ name, element }) => {
            element.onclick = (event) => this.onButtonClick(event, name);
        });
    }

    onButtonClick(event, name) {
        console.log(name);
        switch (name) {
            case "changeHours":
                this.fsm.clock.controller.changeHours();
                break;
            case "changeMinutes":
                this.fsm.clock.controller.changeMinutes();
                break;
            default:
                this.fsm.gotToIdleState();
                break;
        }
    }

    onExitState(cb) {
        const { controller } = this.fsm.clock;
        const { view: { buttons } } = controller;

        buttons.forEach(({ _, element }) => element.onclick = null);
        cb();
    }
}