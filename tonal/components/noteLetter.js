"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NoteLetter = /** @class */ (function () {
    function NoteLetter(letter) {
        if (!NoteLetter.isValid(letter)) {
            throw "Note Letter is not Valid";
        }
        this.string = letter;
        this.ordinal = NoteLetter.letterToOrdinal(this.string);
        this.value = NoteLetter.ordinalToValue(this.ordinal);
    }
    NoteLetter.prototype.addOrdinal = function (ordinal) {
        return new NoteLetter(NoteLetter.ordinalToLetter((this.ordinal + ordinal + 7) % 7));
    };
    NoteLetter.prototype.subOrdinal = function (ordinal) {
        return this.addOrdinal(-ordinal);
    };
    NoteLetter.isValid = function (letter) {
        return ["C", "D", "E", "F", "G", "A", "B"].indexOf(letter) > -1;
    };
    NoteLetter.letterToOrdinal = function (letter) {
        return (letter.charCodeAt(0) - "C".charCodeAt(0) + 7) % 7;
    };
    NoteLetter.ordinalToValue = function (ordinal) {
        return Math.floor((ordinal * 1.79) + 0.5);
    };
    NoteLetter.ordinalToLetter = function (ordinal) {
        return String.fromCharCode(((ordinal + 2) % 7) + "A".charCodeAt(0));
    };
    return NoteLetter;
}());
exports.NoteLetter = NoteLetter;
//# sourceMappingURL=noteLetter.js.map