"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Interval = void 0;
var symbols_1 = require("./symbols");
var Interval = /** @class */ (function () {
    function Interval(quality, degree) {
        this.quality = quality;
        this.degree = degree;
        Interval.validateSymmetry(this.quality, this.degree);
        this.staffPositions = this.degree - 1;
        this.semitones = this.calculateSemitones();
    }
    Interval.prototype.calculateSemitones = function () {
        var _a;
        var compoundComponent = Math.floor(this.staffPositions / 7) * 12;
        var simpleComponent = Math.floor(((this.staffPositions % 7) * 1.71) + 0.86);
        var qualityModifier = this.isSymmetrical() ?
            (_a = {}, _a[symbols_1.symbols.intervalQualities.perfect] = 0, _a[symbols_1.symbols.intervalQualities.augmented] = 1, _a[symbols_1.symbols.intervalQualities.doubleAugmented] = 2, _a[symbols_1.symbols.intervalQualities.tripleAugmented] = 3, _a[symbols_1.symbols.intervalQualities.diminished] = -1, _a[symbols_1.symbols.intervalQualities.doubleDiminished] = -2, _a[symbols_1.symbols.intervalQualities.tripleDiminished] = -3, _a)[this.quality] :
            { "m": -1, "M": 0, "A": 1, "AA": 2, "AAA": 3, "d": -2, "dd": -3, "ddd": -4 }[this.quality];
        return compoundComponent + simpleComponent + qualityModifier;
    };
    Interval.validateSymmetry = function (quality, degree) {
        if (quality.isSymmetrical() === degree.isSymmetrical()) {
            return true;
        }
        else {
            throw "Interval symmetry is not valid";
        }
    };
    Interval.prototype.isSymmetrical = function () {
        Interval.validateSymmetry(this.quality, this.degree);
        return this.quality.isSymmetrical() && this.degree.isSymmetrical();
    };
    return Interval;
}());
exports.Interval = Interval;
var IntervalQuality = /** @class */ (function () {
    function IntervalQuality(quality) {
        this.quality = quality;
        IntervalQuality.validateQuality(this.quality);
    }
    IntervalQuality.prototype.isSymmetrical = function () {
        return !["m", "M"].includes(this.quality);
    };
    IntervalQuality.validateQuality = function (quality) {
        if (["m", "M", "P", "A", "AA", "AAA", "d", "dd", "ddd"].includes(quality)) {
            return true;
        }
        else {
            throw "Interval quality is not valid";
        }
    };
    return IntervalQuality;
}());
var IntervalDegree = /** @class */ (function () {
    function IntervalDegree(degree) {
        this.degree = degree;
        IntervalDegree.validateDegree(this.degree);
    }
    IntervalDegree.prototype.isSymmetrical = function () {
        return [0, 3, 4].includes((this.degree + 6) % 7);
    };
    IntervalDegree.validateDegree = function (degree) {
        if (degree > 0 && degree < 36) {
            return true;
        }
        else {
            throw "Interval degree is not valid";
        }
    };
    return IntervalDegree;
}());
//# sourceMappingURL=interval.js.map