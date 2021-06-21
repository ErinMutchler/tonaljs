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
        console.log(this.semitones);
    }
    Interval.prototype.calculateSemitones = function () {
        var compoundComponent = Math.floor(this.staffPositions / 7) * 12;
        var simpleComponent = Math.floor(((this.staffPositions % 7) * 1.71) + 0.86);
        simpleComponent = simpleComponent + (this.isSymmetric
            ? { "P": 0, "A": 1, "AA": 2, "AAA": 3, "d": -1, "dd": -2, "ddd": -3 }[this.quality]
            : { "m": -1, "M": 0, "A": 1, "AA": 2, "AAA": 3, "d": -2, "dd": -3, "ddd": -4 }[this.quality]);
        return simpleComponent + compoundComponent;
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
    Interval.prototype.qualityIsSymmetrical = function () {
        console.log(!["m", "M"].includes(this.quality));
        return !["m", "M"].includes(this.quality);
    };
    Interval.prototype.degreeIsSymmetrical = function () {
        console.log([0, 3, 4].includes((this.degree + 6) % 7));
        return [0, 3, 4].includes((this.degree + 6) % 7);
    };
    Interval.prototype.validateSymmetry = function () {
        if (this.qualityIsSymmetrical() !== this.degreeIsSymmetrical()) {
            throw "Interval symmetry is not valid";
        }
    };
    return Interval;
}());
// export class Interval2 {
//     readonly notation: string;
//     readonly semitones: number;
//     readonly staffPositions: number;
//
//     static notationType: string = "shorthand";
//
//     constructor(intervalString: string) {
//         if (!Interval2.isValid(intervalString)) {
//             throw "Interval is not valid";
//         }
//
//         this.notation = intervalString;
//         this.semitones = Interval2.DEFINITIONS[Interval2.NOTATIONS[Interval2.notationType][this.notation]].semitones;
//         this.staffPositions = Interval2.DEFINITIONS[Interval2.NOTATIONS[Interval2.notationType][this.notation]].staffPositions;
//     }
//
//
//
//
//     static isValid(intervalString: string) {
//         return intervalString in Interval2.NOTATIONS[Interval2.notationType];
//     }
//
//     static readonly NOTATIONS = {
//         shorthand: {
//             "P1": "P1",     "A1": "A1",
//             "d2": "d2",     "m2": "m2",     "M2": "M2",     "A2": "A2",
//             "d3": "d3",     "m3": "m3",     "M3": "M3",     "A3": "A3",
//             "d4": "d4",     "P4": "P4",     "A4": "A4",
//             "d5": "d5",     "P5": "P5",     "A5": "A5",
//             "d6": "d6",     "m6": "m6",     "M6": "M6",     "A6": "A6",
//             "d7": "d7",     "m7": "m7",     "M7": "M7",     "A7": "A7",
//             "d8": "d8",     "P8": "P8",
//         },
//         abbreviated: {
//             "perf1": "P1",  "aug1": "A1",
//             "dim2": "d2",   "min2": "m2",   "maj2": "M2",   "aug2": "A2",
//             "dim3": "d3",   "min3": "m3",   "maj3": "M3",   "aug3": "A3",
//             "dim4": "d4",   "perf4": "P4",  "aug4": "A4",
//             "dim5": "d5",   "perf5": "P5",  "aug5": "A5",
//             "dim6": "d6",   "min6": "m6",   "maj6": "M6",   "aug6": "A6",
//             "dim7": "d7",   "min7": "m7",   "maj7": "M7",   "aug7": "A7",
//             "dim8": "d8",   "perf8": "P8",
//         },
//         expanded: {
//             "perfect unison": "P1",         "augmented unison": "A1",
//             "diminished second": "d2",      "minor second": "m2",       "major second": "M2",       "augmented second": "A2",
//             "diminished third": "d3",       "minor third": "m3",        "major third": "M3",        "augmented third": "A3",
//             "diminished fourth": "d4",      "perfect fourth": "P4",     "augmented fourth": "A4",
//             "diminished fifth": "d5",       "perfect fifth": "P5",      "augmented fifth": "A5",
//             "diminished sixth": "d6",       "minor sixth": "m6",        "major sixth": "M6",        "augmented sixth": "A6",
//             "diminished seventh": "d7",     "minor seventh": "m7",      "major seventh": "M7",      "augmented seventh": "A7",
//             "diminished octave": "d8",      "perfect octave": "P8",
//         },
//     }
//
//     static readonly DEFINITIONS = {
//         P1: { semitones: 0,  staffPositions: 0 }, A1: { semitones: 1,  staffPositions: 0 },
//         d2: { semitones: 0,  staffPositions: 1 }, m2: { semitones: 1,  staffPositions: 1 }, M2: { semitones: 2,  staffPositions: 1 }, A2: { semitones: 3,  staffPositions: 1 },
//         d3: { semitones: 2,  staffPositions: 2 }, m3: { semitones: 3,  staffPositions: 2 }, M3: { semitones: 4,  staffPositions: 2 }, A3: { semitones: 5,  staffPositions: 2 },
//         d4: { semitones: 4,  staffPositions: 3 }, P4: { semitones: 5,  staffPositions: 3 }, A4: { semitones: 6,  staffPositions: 3 },
//         d5: { semitones: 6,  staffPositions: 4 }, P5: { semitones: 7,  staffPositions: 4 }, A5: { semitones: 8,  staffPositions: 4 },
//         d6: { semitones: 7,  staffPositions: 5 }, m6: { semitones: 8,  staffPositions: 5 }, M6: { semitones: 9,  staffPositions: 5 }, A6: { semitones: 10, staffPositions: 5 },
//         d7: { semitones: 9,  staffPositions: 6 }, m7: { semitones: 10, staffPositions: 6 }, M7: { semitones: 11, staffPositions: 6 }, A7: { semitones: 12, staffPositions: 6 },
//         d8: { semitones: 11, staffPositions: 7 }, P8: { semitones: 12, staffPositions: 7 },
//     }
// }
//
//
//
//# sourceMappingURL=interval.js.map