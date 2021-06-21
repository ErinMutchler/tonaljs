class Interval {
    readonly quality: string;
    readonly degree: number;

    readonly isSymmetric: boolean;

    readonly staffPositions: number;
    readonly semitones: number;

    static notationType: string = "shorthand";
    readonly notation: string;

    constructor(quality: string, degree: number) {
        this.quality = quality;
        this.validateQuality();

        this.degree = degree;
        this.validateDegree();

        this.isSymmetric = this.qualityIsSymmetrical() && this.degreeIsSymmetrical();
        this.validateSymmetry();

        this.staffPositions = this.degree - 1;
        this.semitones = this.calculateSemitones();
    }

    calculateSemitones() {
        const compoundComponent = Math.floor(this.staffPositions / 7) * 12;
        const simpleComponent = Math.floor(((this.staffPositions % 7) * 1.71) + 0.86);
        const qualityModifier = this.isSymmetric ? { "P": 0, "A": 1, "AA": 2, "AAA": 3, "d": -1, "dd": -2, "ddd": -3 }[this.quality] : { "m": -1, "M": 0, "A": 1, "AA": 2, "AAA": 3, "d": -2, "dd": -3, "ddd": -4 }[this.quality]
        return compoundComponent + simpleComponent + qualityModifier;
    }

    validateQuality() {
        if (!["m", "M", "P", "A", "AA", "AAA", "d", "dd", "ddd"].includes(this.quality)) { throw "Interval quality is not valid"; }
    }

    validateDegree() {
        if (this.degree < 1) { throw "Interval degree is not valid"; }
    }

    validateSymmetry() {
        if (this.qualityIsSymmetrical() !== this.degreeIsSymmetrical()) { throw "Interval symmetry is not valid"; }
    }

    qualityIsSymmetrical() {
        return !["m", "M"].includes(this.quality);
    }

    degreeIsSymmetrical() {
        return [0, 3, 4].includes((this.degree + 6) % 7);
    }
}