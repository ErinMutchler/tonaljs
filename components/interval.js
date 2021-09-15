"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Interval = void 0;
var symbols_1 = require("./symbols");
var Interval = /** @class */ (function () {
    function Interval(quality, degree) {
        this.quality = quality;
        Interval.validateQuality(this.quality);
        this.degree = degree;
        Interval.validateDegree(this.degree);
        this.isSymmetric = Interval.qualityIsSymmetrical(this.quality) && Interval.degreeIsSymmetrical(this.degree);
        Interval.validateSymmetry(this.quality, this.degree);
        this.staffPositions = this.degree - 1;
        this.semitones = this.calculateSemitones();
    }
    Interval.prototype.calculateSemitones = function () {
        var _a;
        var compoundComponent = Math.floor(this.staffPositions / 7) * 12;
        var simpleComponent = Math.floor(((this.staffPositions % 7) * 1.71) + 0.86);
        var qualityModifier = this.isSymmetric ?
            (_a = {}, _a[symbols_1.symbols.intervalQualities.perfect] = 0, _a[symbols_1.symbols.intervalQualities.augmented] = 1, _a[symbols_1.symbols.intervalQualities.doubleAugmented] = 2, _a[symbols_1.symbols.intervalQualities.tripleAugmented] = 3, _a[symbols_1.symbols.intervalQualities.diminished] = -1, _a[symbols_1.symbols.intervalQualities.doubleDiminished] = -2, _a[symbols_1.symbols.intervalQualities.tripleDiminished] = -3, _a)[this.quality] :
            { "m": -1, "M": 0, "A": 1, "AA": 2, "AAA": 3, "d": -2, "dd": -3, "ddd": -4 }[this.quality];
        return compoundComponent + simpleComponent + qualityModifier;
    };
    Interval.validateQuality = function (quality) {
        if (["m", "M", "P", "A", "AA", "AAA", "d", "dd", "ddd"].includes(quality)) {
            return true;
        }
        else {
            throw "Interval quality is not valid";
        }
    };
    Interval.validateDegree = function (degree) {
        if (degree > 0 && degree < 36) {
            return true;
        }
        else {
            throw "Interval degree is not valid";
        }
    };
    Interval.validateSymmetry = function (quality, degree) {
        if (Interval.qualityIsSymmetrical(quality) === Interval.degreeIsSymmetrical(degree)) {
            return true;
        }
        else {
            throw "Interval symmetry is not valid";
        }
    };
    Interval.qualityIsSymmetrical = function (quality) {
        return !["m", "M"].includes(quality);
    };
    Interval.degreeIsSymmetrical = function (degree) {
        return [0, 3, 4].includes((degree + 6) % 7);
    };
    return Interval;
}());
exports.Interval = Interval;
//# sourceMappingURL=interval.js.map