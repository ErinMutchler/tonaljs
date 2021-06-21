"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Accidental = /** @class */ (function () {
    function Accidental(accidental) {
        var _a;
        if (!Accidental.isValid(accidental)) {
            throw "Accidental is not valid";
        }
        if (typeof accidental === "string") {
            this.string = accidental;
        }
        else if (typeof accidental === "number") {
            this.string = ["♭♭", "♭", "", "♯", "♯♯"][accidental + 2];
        }
        this.value = (_a = {}, _a["♭♭"] = -2, _a["♭"] = -1, _a["♮"] = 0, _a[""] = 0, _a["♯"] = 1, _a["♯♯"] = 2, _a)[this.string];
    }
    Accidental.isValid = function (accidental) {
        if (typeof accidental === "number") {
            return [-2, -1, 0, 1, 2].indexOf(accidental) > -1;
        }
        else if (typeof accidental === "string") {
            return ["♭♭", "♭", "", "♯", "♯♯"].indexOf(accidental) > -1;
        }
        else {
            return false;
        }
    };
    return Accidental;
}());
exports.Accidental = Accidental;
//# sourceMappingURL=accidental.js.map