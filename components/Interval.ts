import {Util} from "./Util";

export class Interval {
    /***
     *
     */
    readonly msp: string;
    /***
     *
     */
    readonly quality: string;
    /***
     *
     */
    readonly degree: number;
    /***
     *
     */
    readonly value: number;
    /***
     *
     */
    readonly compoundValue: number;
    /***
     *
     */
    readonly simpleValue: number;


    /***
     *
     * @param msp
     */
    constructor(msp: string) {
        this.quality = msp.split(/(?=\d)/)[0];
        this.degree = parseInt(msp.split(/(?=\d)/)[1]);

        if (!["m", "M", "P", "A", "AA", "AAA", "d", "dd", "ddd"].includes(this.quality)) {
            throw new Error("msp text is not valid");
        } else if (this.degree <= 0 || this.degree >= 36) {
            throw new Error("msp text is not valid");
        } else if (Interval.qualityIsSymmetrical(this.quality) !== Interval.degreeIsSymmetrical(this.degree)) {
            throw new Error("Interval symmetry is not valid");
        }

        const staffPositions = this.degree - 1;
        const staffPositionsPerOctave = 7;
        const semitonesPerOctave = 12;

        this.compoundValue = Math.floor(staffPositions / staffPositionsPerOctave) * semitonesPerOctave;
        const qualityModifier = this.isSymmetrical() ?
            Interval.DICTIONARY.symmetricalQualityModifiers [this.quality] :
            Interval.DICTIONARY.nonSymmetricalQualityModifiers [this.quality];
        this.simpleValue = Interval.DICTIONARY.semitones[Util.mod(staffPositions, 7)] + qualityModifier;
        this.value = this.compoundValue + this.simpleValue;
    }

    /***
     *
     */
    toString() {
        return this.quality + this.degree.toString();
    }

    /***
     *
     * @param quality
     */
    static qualityIsSymmetrical(quality: string) {
        return !["m", "M"].includes(quality);
    }

    /***
     *
     * @param degree
     */
    static degreeIsSymmetrical(degree: number) {
        return [0, 3, 4].includes(Util.mod(degree, 7));
    }

    /***
     * 
     * @private
     */
    private isSymmetrical() {
        return Interval.qualityIsSymmetrical(this.quality) && Interval.degreeIsSymmetrical(this.degree);
    }

    private static DICTIONARY = {
        semitones: [0, 2, 4, 5, 7, 9, 11],
        symmetricalQualityModifiers: { "A": 1, "AA": 2, "AAA": 3, "d": -1, "dd": -2, "ddd": -3, "P": 0, },
        nonSymmetricalQualityModifiers: { "A": 1, "AA": 2, "AAA": 3, "d": -2, "dd": -3, "ddd": -4, "m": -1, "M": 0, },
    };
}