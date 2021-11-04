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
        if ([symbols_1.symbols.double_flat, symbols_1.symbols.flat, symbols_1.symbols.natural, symbols_1.symbols.sharp, symbols_1.symbols.double_sharp].indexOf(accidentalSymbol) > -1) {
            return true;
        }
        else {
            throw "Accidental is not valid";
        }
    };
    Accidental.symbolToValue = function (symbol) {
        var _a;
        return (_a = {},
            _a[symbols_1.symbols.double_flat] = -2,
            _a[symbols_1.symbols.flat] = -1,
            _a[symbols_1.symbols.natural] = 0,
            _a[symbols_1.symbols.sharp] = 1,
            _a[symbols_1.symbols.double_sharp] = 2,
            _a)[symbol];
    };
    Accidental.valueToSymbol = function (value) {
        return [symbols_1.symbols.double_flat, symbols_1.symbols.flat, symbols_1.symbols.natural, symbols_1.symbols.sharp, symbols_1.symbols.double_sharp][value + 2];
    };
    return Accidental;
}());
exports.Accidental = Accidental;
//# sourceMappingURL=accidental.js.map