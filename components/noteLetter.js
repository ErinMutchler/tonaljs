"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteLetter = void 0;
var NoteLetter = /** @class */ (function () {
    function NoteLetter(symbol) {
        NoteLetter.validate(symbol);
        this.symbol = symbol;
        this.ordinal = NoteLetter.symbolToOrdinal(this.symbol);
        this.value = NoteLetter.ordinalToValue(this.ordinal);
    }
    NoteLetter.prototype.addOrdinal = function (ordinal) {
        return new NoteLetter(NoteLetter.ordinalToSymbol((this.ordinal + ordinal + 7) % 7));
    };
    NoteLetter.prototype.subOrdinal = function (ordinal) {
        return this.addOrdinal(-ordinal);
    };
    NoteLetter.validate = function (symbol) {
        if (["C", "D", "E", "F", "G", "A", "B"].indexOf(symbol) > -1) {
            return true;
        }
        else {
            throw "Note Letter is not Valid";
        }
    };
    NoteLetter.symbolToOrdinal = function (symbol) {
        return (symbol.charCodeAt(0) - "C".charCodeAt(0) + 7) % 7;
    };
    NoteLetter.ordinalToValue = function (ordinal) {
        return Math.floor((ordinal * 1.79) + 0.5);
    };
    NoteLetter.ordinalToSymbol = function (ordinal) {
        return String.fromCharCode(((ordinal + 2) % 7) + "A".charCodeAt(0));
    };
    return NoteLetter;
}());
exports.NoteLetter = NoteLetter;
//# sourceMappingURL=noteLetter.js.map