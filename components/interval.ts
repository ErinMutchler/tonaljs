import {symbols} from "./symbols";

export class Interval {
    readonly quality: string;
    readonly degree: number;


    readonly isSymmetric: boolean;

    readonly staffPositions: number;

    readonly semitones: number;

    constructor(quality: string, degree: number) {
        this.quality = quality;
        Interval.validateQuality(this.quality);

        this.degree = degree;
        Interval.validateDegree(this.degree);

        this.isSymmetric = Interval.qualityIsSymmetrical(this.quality) && Interval.degreeIsSymmetrical(this.degree);
        Interval.validateSymmetry(this.quality, this.degree);

        this.staffPositions = this.degree - 1;
        this.semitones = this.calculateSemitones();
    }

    calculateSemitones() {
        const compoundComponent = Math.floor(this.staffPositions / 7) * 12;
        const simpleComponent = Math.floor(((this.staffPositions % 7) * 1.71) + 0.86);
        const qualityModifier = this.isSymmetric ?
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

    static validateQuality(quality: string) {
        if (["m", "M", "P", "A", "AA", "AAA", "d", "dd", "ddd"].includes(quality)) {
            return true;
        } else {
            throw "Interval quality is not valid";
        }
    }

    static validateDegree(degree: number) {
        if (degree > 0 && degree < 36) {
             return true;
        } else {
            throw "Interval degree is not valid";
        }
    }

    static validateSymmetry(quality: string, degree: number) {
        if (Interval.qualityIsSymmetrical(quality) === Interval.degreeIsSymmetrical(degree)) {
            return true;
        } else {
            throw "Interval symmetry is not valid";
        }
    }

    static qualityIsSymmetrical(quality: string) {
        return !["m", "M"].includes(quality);
    }

    static degreeIsSymmetrical(degree: number) {
        return [0, 3, 4].includes((degree + 6) % 7);
    }
}