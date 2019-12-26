export default class ClockModel {
    constructor() {
        this.selectors = {
            buttons: ["#change-alarm", "#change-hours", "#change-minutes"],
            faces: ["#hours", "#minutes"]
        }

        this.isAlarmSet = false;
        this.isIdleState = false;
        this.alarmTime = "00:00";
        this.currTime = "00:00";

        this.mode = {
            hours: "24",
            minutes: "60"
        };
    }

    get newTime() {
        const [time] = new Date().toString().match(/\d\d:\d\d/);
        return time;
    }

    get isAlarmTime() {
        return (
            !!this.currTime.match(this.alarmTime) && this.isAlarmSet
        );
    }

    updateTime(time) {
        this.currTime = time;
    }

    setAlarmTime(time) {
        this.alarmTime = time;
        this.isAlarmSet = this.isCorrectTime(time);
    }

    isCorrectTime(time) {
        const [hours, minutes] = time.split(":");
        return (hours < this.mode.hours && minutes < this.mode.minutes);
    }
}