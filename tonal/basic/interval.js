var Interval = /** @class */ (function () {
    function Interval(quality, degree) {
        this.quality = quality;
        this.validateQuality();
        this.degree = degree;
        this.validateDegree();
        this.isSymmetric = this.qualityIsSymmetrical() && this.degreeIsSymmetrical();
        this.validateSymmetry();
        this.staffPositions = this.degree - 1;
        this.semitones = this.calculateSemitones();
    }
    Interval.prototype.calculateSemitones = function () {
        var compoundComponent = Math.floor(this.staffPositions / 7) * 12;
        var simpleComponent = Math.floor(((this.staffPositions % 7) * 1.71) + 0.86);
        var qualityModifier = this.isSymmetric ? { "P": 0, "A": 1, "AA": 2, "AAA": 3, "d": -1, "dd": -2, "ddd": -3 }[this.quality] : { "m": -1, "M": 0, "A": 1, "AA": 2, "AAA": 3, "d": -2, "dd": -3, "ddd": -4 }[this.quality];
        return compoundComponent + simpleComponent + qualityModifier;
    };
    Interval.prototype.validateQuality = function () {
        if (!["m", "M", "P", "A", "AA", "AAA", "d", "dd", "ddd"].includes(this.quality)) {
            throw "Interval quality is not valid";
        }
    };
    Interval.prototype.validateDegree = function () {
        if (this.degree < 1) {
            throw "Interval degree is not valid";
        }
    };
    Interval.prototype.validateSymmetry = function () {
        if (this.qualityIsSymmetrical() !== this.degreeIsSymmetrical()) {
            throw "Interval symmetry is not valid";
        }
    };
    Interval.prototype.qualityIsSymmetrical = function () {
        return !["m", "M"].includes(this.quality);
    };
    Interval.prototype.degreeIsSymmetrical = function () {
        return [0, 3, 4].includes((this.degree + 6) % 7);
    };
    Interval.notationType = "shorthand";
    return Interval;
}());
//# sourceMappingURL=interval.js.map