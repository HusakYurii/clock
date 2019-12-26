export default class ClockController {
    constructor() {
        this.model = null;
        this.view = null;
    }

    onInitialize(model, view) {
        this.model = model;
        this.view = view;
        this.view.onInitialize(this.model.selectors);
    }

    onRun() {
        /*Can be used*/
        this.view.onRun();
    }

    runClock() {
        this.model.isIdleState = true;
        this.model.updateTime(this.model.newTime);
        this.view.updateTime(this.model.currTime);
    }

    stopClock() {
        this.model.isIdleState = false;
    }

    desibleButtons() {
        this.view.toggleButtons(true);
    }

    enableButtons() {
        this.view.toggleButtons(false);
    }

    showAlarmTime() {
        this.view.updateTime(this.model.alarmTime);
    }

    changeHours() {
        this.incrimentFace("hours");
    }

    changeMinutes() {
        this.incrimentFace("minutes");
    }

    incrimentFace(name) {
        const { mode } = this.model;
        let [hh, mm] = this.model.alarmTime.split(":");

        if(name === "hours") hh = (parseInt(hh) + 1) % mode[name];
        else mm = (parseInt(mm) + 1) % mode[name];

        this.model.setAlarmTime(`${hh}:${mm}`);
        this.showAlarmTime();
    }
}