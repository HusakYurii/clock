export default class ClockView {
    constructor() {
        this.buttons = [];
        this.faces = [];
    }

    onInitialize({ buttons, faces }) {
        this.cacheElements(buttons, "buttons");
        this.cacheElements(faces, "faces");
    }

    onRun() {

    }

    cacheElements(selectors, storageName) {
        selectors.forEach((selector) => {
            const name = ClockView.fixName(selector);
            const element = document.body.querySelector(selector);
            this[storageName].push({ name, element });
        });
    }

    static fixName(name) {
        return name.replace(/#|\./, "")
            .replace(/-\w/, (matched) => matched[1].toUpperCase());
    }
}