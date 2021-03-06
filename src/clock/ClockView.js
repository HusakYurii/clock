export default class ClockView {
    constructor() {
        this.buttons = [];
        this.faces = [];
    }

    onInitialize({ buttons, faces }) {
        this.cacheElements(buttons, "buttons");
        this.cacheElements(faces, "faces");
    }

    onRun() { /*Can be used*/ }

    cacheElements(selectors, storageName) {
        selectors.forEach((selector) => {
            const name = ClockView.fixName(selector);
            const element = document.body.querySelector(selector);
            this[storageName].push({ name, element });
        });
    }

    toggleButtons(deactivate) {
        const [_, hours, minutes] = this.buttons;
        const method = deactivate ? "setAttribute" : "removeAttribute";

        [hours, minutes].forEach(({ element }) => {
            element[method]("disabled", deactivate);
            element.classList.toggle("deactivated");
        });
    }

    updateTime(time) {
        const [hours, minutes] = time.split(":");
        this.updateFace("hours", hours);
        this.updateFace("minutes", minutes);
    }

    updateFace(name, value) {
        const face = this.faces.find((face) => face.name === name);
        face.element.innerText = value;
    }

    static fixName(name) {
        return name.replace(/#|\./, "")
            .replace(/-\w/, (matched) => matched[1].toUpperCase());
    }
}