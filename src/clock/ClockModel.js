export default class ClockModel {
    constructor() {
        this.selectors = {
            buttons: ["#change-alarm", "#change-hours", "#change-minutes"],
            faces: ["#hours", "#minutes"]
        }

        this.isAlarmSet = false;
        this.isIdleState = false;
        this.alarmTime = "99:99";
        this.currTime = this.getSystemTime;

        this.mode = {
            hours: "24",
            minutes: "60"
        };

        this.counter = {
            hours: 0,
            minutes: 0
        };
    }

    get getSystemTime() {
        const [time] = new Date().toString().match(/\d\d:\d\d/);
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