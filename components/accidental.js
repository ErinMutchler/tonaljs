"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Accidental = /** @class */ (function () {
    /**
     * Constructs a new Accidental with a given string.
     * @param accidental
     */
    function Accidental(accidentalString) {
        Accidental.validate(accidentalString);
        this.string = accidentalString;
        this.value = Accidental.stringToValue(this.string);
    }
    /**
     * Checks to see if a given string is valid for constructing a new Accidental.
     * @param accidentalString The string to check the validity of.
     *
     * @returns boolean true if given string is a valid string for constructing a new Accidental.
     */
    Accidental.validate = function (accidentalString) {
        if (["♭♭", "♭", "", "♯", "♯♯"].indexOf(accidentalString) > -1) {
            return true;
        }
        else {
            throw "Accidental is not valid";
        }
    };
    /**
     * Converts a valid string into its corresponding value.
     * @param string The string to convert into its corresponding value.
     *
     * @returns number The corresponding value of the given string.
     */
    Accidental.stringToValue = function (string) {
        var _a;
        return (_a = {}, _a["bb"] = -2, _a["b"] = -1, _a[""] = 0, _a["#"] = 1, _a["##"] = 2, _a)[string];
    };
    /**
     * Converts a valid value into its corresponding string.
     * @param value The value to convert into its corresponding string.
     *
     * @returns number The corresponding string for the given value.
     */
    Accidental.valueToString = function (value) {
        return ["bb", "b", "", "#", "##"][value + 2];
    };
    return Accidental;
}());
exports.Accidental = Accidental;
//# sourceMappingURL=accidental.js.map