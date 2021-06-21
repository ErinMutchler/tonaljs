export class Interval {
    /**
     * quality is the musical quality of an interval. For example, major, minor, perfect, augmented, or diminished.
     */
    readonly quality: string;

    /**
     * degree is the musical degree of an interval. For example, unison, second, third, fourth, fifth, sixth, seventh,
     * octave, ninth, etc. degree has an upper bound of 35th (aka 5 octaves).
     */
    readonly degree: number;

    /**
     * isSymmetric is whether or not an interval is perfect or not. Perfect intervals are unison, fourths, fifths,
     * and all multiples of those intervals. Seconds, thirds, sixths, and sevenths are non-symmetric intervals.
     */
    readonly isSymmetric: boolean;

    /**
     * staffPositions is the number of positions on a music staff an interval spans. For example, a fifth will always
     * span five staff positions, regardless of the quality of the interval.
     */
    readonly staffPositions: number;

    /**
     * semitones is the number of semitones the interval is made of. For example, a major third contains 4 semitones.
     */
    readonly semitones: number;

    /**
     * Constructs a new Interval with a given quality and degree.
     * @param quality: the musical quality of the interval
     * @param degree: the musical degree of the interval
     */
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

    /**
     * Calculates the number of semitones in this Interval.
     * @returns number: the number of semitones in this Interval.
     */
    calculateSemitones() {
        const compoundComponent = Math.floor(this.staffPositions / 7) * 12;
        const simpleComponent = Math.floor(((this.staffPositions % 7) * 1.71) + 0.86);
        const qualityModifier = this.isSymmetric ?
            { "P": 0, "A": 1, "AA": 2, "AAA": 3, "d": -1, "dd": -2, "ddd": -3 }[this.quality] :
            { "m": -1, "M": 0, "A": 1, "AA": 2, "AAA": 3, "d": -2, "dd": -3, "ddd": -4 }[this.quality]
        return compoundComponent + simpleComponent + qualityModifier;
    }

    /**
     * Checks to see if a given string is a valid interval quality.
     * @param quality: the string to check the validity of.
     *
     * @returns boolean: true if given string is a valid string.
     */
    static validateQuality(quality: string) {
        if (["m", "M", "P", "A", "AA", "AAA", "d", "dd", "ddd"].includes(quality)) {
            return true;
        } else {
            throw "Interval quality is not valid";
        }
    }

    /**
     * Checks to see if a given number is a valid interval degree.
     * @param degree: the number to check the validity of.
     *
     * @returns boolean: true if given number is a valid degree.
     */
    static validateDegree(degree: number) {
        if (degree > 0 && degree < 36) {
             return true;
        } else {
            throw "Interval degree is not valid";
        }
    }

    /**
     * Checks to see if a given string and number are both symmetrical.
     * @param quality: the musical quality of the interval.
     * @param degree: the musical degree of the interval.
     *
     * @returns boolean true if interval is symmetrical.
     */
    static validateSymmetry(quality: string, degree: number) {
        if (Interval.qualityIsSymmetrical(quality) === Interval.degreeIsSymmetrical(degree)) {
            return true;
        } else {
            throw "Interval symmetry is not valid";
        }
    }

    /**
     * Checks to see if a given interval quality is symmetrical.
     * @param quality: the quality to check the symmetry of.
     *
     * @returns boolean: true if given quality is symmetrical.
     */
    static qualityIsSymmetrical(quality: string) {
        return !["m", "M"].includes(quality);
    }

    /**
     * Checks to see if a given interval degree is symmetrical.
     * @param degree: the degree to check the symmetry of.
     *
     * @returns boolean: true if given degree is symmetrical.
     */
    static degreeIsSymmetrical(degree: number) {
        return [0, 3, 4].includes((degree + 6) % 7);
    }
}