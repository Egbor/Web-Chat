export class FormChecker {
    constructor() {
        this.checkEvents = new Map();
        this.callbackEventsOfSuccessed = new Array();
        this.callbackEventsOfFailed = new Array();
    }

    add(id, checkEvent) {
        let checkEvents = this.checkEvents;
        let callbackEventsOfSuccessed = this.callbackEventsOfSuccessed;
        let callbackEventsOfFailed = this.callbackEventsOfFailed;

        checkEvents.set(id, checkEvent);
        document.getElementById(id).addEventListener("input", function() {
            let isSubmit = true;
            checkEvents.forEach((event, id) => {
                isSubmit &= event(document.getElementById(id))
            });

            if (isSubmit) {
                callbackEventsOfSuccessed.forEach(event => {
                    event();
                })
            } else {
                callbackEventsOfFailed.forEach(event => {
                    event();
                })
            }
        });
    }

    addOnCheckSuccessedCallBack(event) {
        this.callbackEventsOfSuccessed.push(event);
    }

    addOnCheckFailedCallBack(event) {
        this.callbackEventsOfFailed.push(event);
    }
};