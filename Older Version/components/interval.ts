export class Interval {
    readonly quality: string;
    readonly degree: number;
    readonly value: number;

    constructor(quality: string, degree: number) {
        if (!["m", "M", "P", "A", "AA", "AAA", "d", "dd", "ddd"].includes(quality)) {
            throw "Interval quality is not valid";
        } else if (degree <= 0 || degree >= 36) {
            throw "Interval degree is not valid";
        } else if (Interval.isQualitySymmetrical(quality) !== Interval.isDegreeSymmetrical(degree)) {
            throw "Interval symmetry is not valid";
        }

        this.quality = quality;
        this.degree = degree;

        const compoundComponent = Math.floor((this.degree - 1) / 7) * 12;
        const simpleComponent = Math.floor((((this.degree - 1) % 7) * 1.71) + 0.86);
        const qualityModifier = this.isSymmetrical() ?
            { "A": 1, "AA": 2, "AAA": 3, "d": -1, "dd": -2, "ddd": -3, "P": 0, } [this.quality] :
            { "A": 1, "AA": 2, "AAA": 3, "d": -2, "dd": -3, "ddd": -4, "m": -1, "M": 0, } [this.quality];

        this.value = compoundComponent + simpleComponent + qualityModifier;
    }

    toString() {
        return this.quality + this.degree.toString();
    }

    static isQualitySymmetrical(quality: string) {
        return !["m", "M"].includes(quality);
    }

    static isDegreeSymmetrical(degree: number) {
        return [0, 3, 4].includes((degree + 6) % 7)
    }

    private isSymmetrical() {
        return Interval.isQualitySymmetrical(this.quality) && Interval.isDegreeSymmetrical(this.degree);
    }
}