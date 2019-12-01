export default class ClockModel {
    constructor() {
        this.selectors = {
            buttons: ["#change-alarm", "#change-hours", "#change-minutes"],
            faces: ["#hours", "#minutes"]
        }

        this.isAlarmSet = false;
        this.isIdleState = false;
        this.alarmTime = "99:99";
        this.currTime = "99:99";

        this.mode = {
            hours: "24",
            minutes: "60"
        };

        this.counter = {
            hours: 0,
            minutes: 0
        };
    }

    get newTime() {
        const [time] = new Date().toString().match(/\d\d:\d\d/);
        return time;
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