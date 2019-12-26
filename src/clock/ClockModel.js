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
        this.currTime = ClockModel.fixTimeData(time, this.mode);
    }

    setAlarmTime(time) {
        this.alarmTime = ClockModel.fixTimeData(time, this.mode);
    }

    static fixTimeData(time, {hours, minutes}) {
        const [hh, mm] = time.split(":");
    
        if(hh.length === hours.length && mm.length === minutes.length) return time;
        else return `${"0".repeat(hours.length - hh.length)}${hh}:${"0".repeat(minutes.length - mm.length)}${mm}`;
    }
}