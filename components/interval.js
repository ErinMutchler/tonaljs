"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Interval = /** @class */ (function () {
    /**
     * Constructs a new Interval with a given quality and degree.
     * @param quality: the musical quality of the interval
     * @param degree: the musical degree of the interval
     */
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
    /**
     * Calculates the number of semitones in this Interval.
     * @returns number: the number of semitones in this Interval.
     */
    Interval.prototype.calculateSemitones = function () {
        var compoundComponent = Math.floor(this.staffPositions / 7) * 12;
        var simpleComponent = Math.floor(((this.staffPositions % 7) * 1.71) + 0.86);
        var qualityModifier = this.isSymmetric ?
            { "P": 0, "A": 1, "AA": 2, "AAA": 3, "d": -1, "dd": -2, "ddd": -3 }[this.quality] :
            { "m": -1, "M": 0, "A": 1, "AA": 2, "AAA": 3, "d": -2, "dd": -3, "ddd": -4 }[this.quality];
        return compoundComponent + simpleComponent + qualityModifier;
    };
    /**
     * Checks to see if a given string is a valid interval quality.
     * @param quality: the string to check the validity of.
     *
     * @returns boolean: true if given string is a valid string.
     */
    Interval.validateQuality = function (quality) {
        if (["m", "M", "P", "A", "AA", "AAA", "d", "dd", "ddd"].includes(quality)) {
            return true;
        }
        else {
            throw "Interval quality is not valid";
        }
    };
    /**
     * Checks to see if a given number is a valid interval degree.
     * @param degree: the number to check the validity of.
     *
     * @returns boolean: true if given number is a valid degree.
     */
    Interval.validateDegree = function (degree) {
        if (degree > 0 && degree < 36) {
            return true;
        }
        else {
            throw "Interval degree is not valid";
        }
    };
    /**
     * Checks to see if a given string and number are both symmetrical.
     * @param quality: the musical quality of the interval.
     * @param degree: the musical degree of the interval.
     *
     * @returns boolean true if interval is symmetrical.
     */
    Interval.validateSymmetry = function (quality, degree) {
        if (Interval.qualityIsSymmetrical(quality) === Interval.degreeIsSymmetrical(degree)) {
            return true;
        }
        else {
            throw "Interval symmetry is not valid";
        }
    };
    /**
     * Checks to see if a given interval quality is symmetrical.
     * @param quality: the quality to check the symmetry of.
     *
     * @returns boolean: true if given quality is symmetrical.
     */
    Interval.qualityIsSymmetrical = function (quality) {
        return !["m", "M"].includes(quality);
    };
    /**
     * Checks to see if a given interval degree is symmetrical.
     * @param degree: the degree to check the symmetry of.
     *
     * @returns boolean: true if given degree is symmetrical.
     */
    Interval.degreeIsSymmetrical = function (degree) {
        return [0, 3, 4].includes((degree + 6) % 7);
    };
    return Interval;
}());
exports.Interval = Interval;
//# sourceMappingURL=interval.js.map