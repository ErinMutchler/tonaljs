export class Interval {
    readonly quality: IntervalQuality;
    readonly degree: IntervalDegree;
    readonly value: number;

    constructor(quality: string, degree: number) {
        this.quality = new IntervalQuality(quality);
        this.degree = new IntervalDegree(degree);
        this.validate();

        this.value = this.calculateValue();
    }

    validate() {
        if (this.quality.isSymmetrical() !== this.degree.isSymmetrical()) {
            throw "Interval symmetry is not valid";
        }
    }

    calculateValue() {
        const compoundComponent = Math.floor((this.degree.degree - 1) / 7) * 12;
        const simpleComponent = Math.floor((((this.degree.degree - 1) % 7) * 1.71) + 0.86);
        const qualityModifier = this.isSymmetrical() ?
            { "A": 1, "AA": 2, "AAA": 3, "d": -1, "dd": -2, "ddd": -3, "P": 0, } [this.quality.quality] :
            { "A": 1, "AA": 2, "AAA": 3, "d": -2, "dd": -3, "ddd": -4, "m": -1, "M": 0, } [this.quality];
        return compoundComponent + simpleComponent + qualityModifier;
    }

    isSymmetrical() {
        if (this.quality.isSymmetrical() === this.degree.isSymmetrical()) {
            return this.quality.isSymmetrical() && this.degree.isSymmetrical();
        } else {
            throw "Interval symmetry is not valid";
        }
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