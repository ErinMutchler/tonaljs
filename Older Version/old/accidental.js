"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accidental = void 0;
var symbols_1 = require("./symbols");
var Accidental = /** @class */ (function () {
    function Accidental(accidentalSymbol) {
        Accidental.validate(accidentalSymbol);
        this.symbol = accidentalSymbol;
        this.value = Accidental.symbolToValue(this.symbol);
    }
    Accidental.validate = function (accidentalSymbol) {
        if (Object.values(symbols_1.symbols.accidentals).indexOf(accidentalSymbol) > -1) {
            return true;
        }
        else {
            throw "Accidental is not valid";
        }
    };
    Accidental.symbolToValue = function (symbol) {
        return Object.keys(symbols_1.symbols.accidentals).indexOf(symbol) - 2;
    };
    Accidental.valueToSymbol = function (value) {
        return Object.values(symbols_1.symbols.accidentals)[value + 2];
    };
    return Accidental;
}());
exports.Accidental = Accidental;
//# sourceMappingURL=accidental.js.map