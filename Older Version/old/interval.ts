import {symbols} from "./symbols";

export class Interval {
    readonly quality: IntervalQuality;
    readonly degree: IntervalDegree;

    readonly staffPositions: number;

    readonly semitones: number;

    constructor(quality: IntervalQuality, degree: IntervalDegree) {
        this.quality = quality;
        this.degree = degree;
        Interval.validateSymmetry(this.quality, this.degree);

        this.staffPositions = this.degree - 1;
        this.semitones = this.calculateSemitones();
    }

    calculateSemitones() {
        const compoundComponent = Math.floor(this.staffPositions / 7) * 12;
        const simpleComponent = Math.floor(((this.staffPositions % 7) * 1.71) + 0.86);
        const qualityModifier = this.isSymmetrical() ?
            { [symbols.intervalQualities.perfect]: 0,
                [symbols.intervalQualities.augmented]: 1,
                [symbols.intervalQualities.doubleAugmented]: 2,
                [symbols.intervalQualities.tripleAugmented]: 3,
                [symbols.intervalQualities.diminished]: -1,
                [symbols.intervalQualities.doubleDiminished]: -2,
                [symbols.intervalQualities.tripleDiminished]: -3 } [this.quality] :
            { "m": -1, "M": 0, "A": 1, "AA": 2, "AAA": 3, "d": -2, "dd": -3, "ddd": -4 }[this.quality]
        return compoundComponent + simpleComponent + qualityModifier;
    }

    static validateSymmetry(quality: IntervalQuality, degree: IntervalDegree) {
        if (quality.isSymmetrical() === degree.isSymmetrical()) {
            return true;
        } else {
            throw "Interval symmetry is not valid";
        }
    }

    isSymmetrical() {
        Interval.validateSymmetry(this.quality, this.degree);
        return this.quality.isSymmetrical() && this.degree.isSymmetrical();
    }
}

class IntervalQuality {
    readonly quality: string;

    constructor(quality: string) {
        this.quality = quality;
        IntervalQuality.validateQuality(this.quality);
    }

    isSymmetrical() {
        return !["m", "M"].includes(this.quality);
    }

    static validateQuality(quality: string) {
        if (["m", "M", "P", "A", "AA", "AAA", "d", "dd", "ddd"].includes(quality)) {
            return true;
        } else {
            throw "Interval quality is not valid";
        }
    }
}

class IntervalDegree {
    readonly degree: number;

    constructor(degree: number) {
        this.degree = degree;
        IntervalDegree.validateDegree(this.degree);
    }

    isSymmetrical() {
        return [0, 3, 4].includes((this.degree + 6) % 7);
    }

    static validateDegree(degree: number) {
        if (degree > 0 && degree < 36) {
            return true;
        } else {
            throw "Interval degree is not valid";
        }
    }
}