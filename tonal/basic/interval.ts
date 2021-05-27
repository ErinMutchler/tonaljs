export class Interval {
    readonly quality: string;
    readonly degree: number;
    readonly notation: string;
    autoSimplify: boolean;
    notationType: string = "shorthand";

    constructor(intervalString: string, autoSimplify: boolean) {
        if (!Interval.isValid(intervalString)) {
            throw "Interval is not valid";
        }
        this.quality = intervalString;
        this.semitoneSteps = Interval.validIntervalStrings[this.string][0];
        this.ordinalSteps = Interval.validIntervalStrings[this.string][1];
    }

    static isValid(param1: any, param2?: any) {
        return intervalString in Interval.validIntervalStrings;

        if (typeof param1 === "number") {
            return [-2, -1, 0, 1, 2].indexOf(accidental) > -1;
        } else if (typeof accidental === "string") {
            return ["♭♭", "♭", "", "♯", "♯♯"].indexOf(accidental) > -1;
        } else {
            return false;
        }
    }
}

const IntervalNotations = {
    shorthand: {
        "P1": "P1",     "A1": "A1",
        "d2": "d2",     "m2": "m2",     "M2": "M2",     "A2": "A2",
        "d3": "d3",     "m3": "m3",     "M3": "M3",     "A3": "A3",
        "d4": "d4",     "P4": "P4",     "A4": "A4",
        "d5": "d5",     "P5": "P5",     "A5": "A5",
        "d6": "d6",     "m6": "m6",     "M6": "M6",     "A6": "A6",
        "d7": "d7",     "m7": "m7",     "M7": "M7",     "A7": "A7",
        "d8": "d8",     "P8": "P8",
    },
    abbreviated: {
        "perf1": "P1",  "aug1": "A1",
        "dim2": "d2",   "min2": "m2",   "maj2": "M2",   "aug2": "A2",
        "dim3": "d3",   "min3": "m3",   "maj3": "M3",   "aug3": "A3",
        "dim4": "d4",   "perf4": "P4",  "aug4": "A4",
        "dim5": "d5",   "perf5": "P5",  "aug5": "A5",
        "dim6": "d6",   "min6": "m6",   "maj6": "M6",   "aug6": "A6",
        "dim7": "d7",   "min7": "m7",   "maj7": "M7",   "aug7": "A7",
        "dim8": "d8",   "perf8": "P8",
    },
    expanded: {
        "perfect unison": "P1",         "augmented unison": "A1",
        "diminished second": "d2",      "minor second": "m2",       "major second": "M2",       "augmented second": "A2",
        "diminished third": "d3",       "minor third": "m3",        "major third": "M3",        "augmented third": "A3",
        "diminished fourth": "d4",      "perfect fourth": "P4",     "augmented fourth": "A4",
        "diminished fifth": "d5",       "perfect fifth": "P5",      "augmented fifth": "A5",
        "diminished sixth": "d6",       "minor sixth": "m6",        "major sixth": "M6",        "augmented sixth": "A6",
        "diminished seventh": "d7",     "minor seventh": "m7",      "major seventh": "M7",      "augmented seventh": "A7",
        "diminished octave": "d8",      "perfect octave": "P8",
    },
}

const IntervalDefinitions = {
    P1: { semitones: 0, staffPositions: 0 }, A1: { semitones: 0, staffPositions: 0 },
    d2: { semitones: 0, staffPositions: 1 }, m2: { semitones: 0, staffPositions: 1 }, M2: { semitones: 0, staffPositions: 1 }, A2: { semitones: 0, staffPositions: 1 },
    d3: { semitones: 0, staffPositions: 2 }, m3: { semitones: 0, staffPositions: 2 }, M3: { semitones: 0, staffPositions: 2 }, A3: { semitones: 0, staffPositions: 2 },
    d4: { semitones: 0, staffPositions: 3 }, P4: { semitones: 0, staffPositions: 3 }, A4: { semitones: 0, staffPositions: 3 },
    d5: { semitones: 0, staffPositions: 4 }, P5: { semitones: 0, staffPositions: 4 }, A5: { semitones: 0, staffPositions: 4 },
    d6: { semitones: 0, staffPositions: 5 }, m6: { semitones: 0, staffPositions: 5 }, M6: { semitones: 0, staffPositions: 5 }, A6: { semitones: 0, staffPositions: 5 },
    d7: { semitones: 0, staffPositions: 6 }, m7: { semitones: 0, staffPositions: 6 }, M7: { semitones: 0, staffPositions: 6 }, A7: { semitones: 0, staffPositions: 6 },
    d8: { semitones: 0, staffPositions: 7 }, P8: { semitones: 0, staffPositions: 7 },
}

const IntervalNotations2 = {
    shorthand: {
        P1: { quality: "P", degree: 0, notation: "P1" }, A1: { quality: "A", degree: 0, notation: "A1" },
        d2: { quality: "d", degree: 1, notation: "d2" }, m2: { quality: "m", degree: 1, notation: "m2" }, M2: { quality: "M", degree: 1, notation: "M2" }, A2: { quality: "A", degree: 1, notation: "A2" },
        d3: { quality: "d", degree: 2, notation: "d3" }, m3: { quality: "m", degree: 2, notation: "m3" }, M3: { quality: "M", degree: 2, notation: "M3" }, A3: { quality: "A", degree: 2, notation: "A3" },
        d4: { quality: "d", degree: 3, notation: "d4" }, P4: { quality: "P", degree: 3, notation: "P4" }, A4: { quality: "A", degree: 3, notation: "A4" },
        d5: { quality: "d", degree: 4, notation: "d5" }, P5: { quality: "P", degree: 4, notation: "P5" }, A5: { quality: "A", degree: 4, notation: "A5" },
        d6: { quality: "d", degree: 5, notation: "d6" }, m6: { quality: "m", degree: 5, notation: "m6" }, M6: { quality: "M", degree: 5, notation: "M6" }, A6: { quality: "A", degree: 5, notation: "A6" },
        d7: { quality: "d", degree: 6, notation: "d7" }, m7: { quality: "m", degree: 6, notation: "m7" }, M7: { quality: "M", degree: 6, notation: "M7" }, A7: { quality: "A", degree: 6, notation: "A7" },
        d8: { quality: "d", degree: 7, notation: "d8" }, P8: { quality: "P", degree: 7, notation: "P8" },
    },
    abbreviated: {
        P1: { quality: "P", degree: 0, notation: "perf1" }, A1: { quality: "A", degree: 0, notation: "aug1" },
        d2: { quality: "d", degree: 1, notation: "dim2" }, m2: { quality: "m", degree: 1, notation: "min2" }, M2: { quality: "M", degree: 1, notation: "maj2" }, A2: { quality: "A", degree: 1, notation: "aug2" },
        d3: { quality: "d", degree: 2, notation: "dim3" }, m3: { quality: "m", degree: 2, notation: "min3" }, M3: { quality: "M", degree: 2, notation: "maj3" }, A3: { quality: "A", degree: 2, notation: "aug3" },
        d4: { quality: "d", degree: 3, notation: "dim4" }, P4: { quality: "P", degree: 3, notation: "perf4" }, A4: { quality: "A", degree: 3, notation: "aug4" },
        d5: { quality: "d", degree: 4, notation: "dim5" }, P5: { quality: "P", degree: 4, notation: "perf5" }, A5: { quality: "A", degree: 4, notation: "aug5" },
        d6: { quality: "d", degree: 5, notation: "dim6" }, m6: { quality: "m", degree: 5, notation: "min6" }, M6: { quality: "M", degree: 5, notation: "maj6" }, A6: { quality: "A", degree: 5, notation: "aug6" },
        d7: { quality: "d", degree: 6, notation: "dim7" }, m7: { quality: "m", degree: 6, notation: "min7" }, M7: { quality: "M", degree: 6, notation: "maj7" }, A7: { quality: "A", degree: 6, notation: "aug7" },
        d8: { quality: "d", degree: 7, notation: "dim8" }, P8: { quality: "P", degree: 7, notation: "perf8" },
    },
    expanded: {
        P1: { quality: "P", degree: 0, notation: "perfect unison" }, A1: { quality: "A", degree: 0, notation: "augmented unison" },
        d2: { quality: "d", degree: 1, notation: "diminished second" }, m2: { quality: "m", degree: 1, notation: "minor second" }, M2: { quality: "M", degree: 1, notation: "major second" }, A2: { quality: "A", degree: 1, notation: "augmented second" },
        d3: { quality: "d", degree: 2, notation: "diminished third" }, m3: { quality: "m", degree: 2, notation: "minor third" }, M3: { quality: "M", degree: 2, notation: "major third" }, A3: { quality: "A", degree: 2, notation: "augmented third" },
        d4: { quality: "d", degree: 3, notation: "diminished fourth" }, P4: { quality: "P", degree: 3, notation: "perfect fourth" }, A4: { quality: "A", degree: 3, notation: "augmented fourth" },
        d5: { quality: "d", degree: 4, notation: "diminished fifth" }, P5: { quality: "P", degree: 4, notation: "perfect fifth" }, A5: { quality: "A", degree: 4, notation: "augmented fifth" },
        d6: { quality: "d", degree: 5, notation: "diminished fifth" }, m6: { quality: "m", degree: 5, notation: "minor sixth" }, M6: { quality: "M", degree: 5, notation: "major sixth" }, A6: { quality: "A", degree: 5, notation: "augmented sixth" },
        d7: { quality: "d", degree: 6, notation: "diminished seventh" }, m7: { quality: "m", degree: 6, notation: "minor seventh" }, M7: { quality: "M", degree: 6, notation: "major seventh" }, A7: { quality: "A", degree: 6, notation: "augmented seventh" },
        d8: { quality: "d", degree: 7, notation: "diminished octave" }, P8: { quality: "P", degree: 7, notation: "perfect eighth" },
    }
}



