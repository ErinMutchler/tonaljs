export class Accidental {
    /***
     * msp stands for Music Syntax as Plaintext. Refer to the documentation for details on msp.
     */
    readonly msp: string;
    /***
     * value is the numeric representation of an Accidental. Each natural has a value of 0. Each flat has a value of -1.
     * Each sharp has a value of 1.
     */
    readonly value: number;

    /***
     * 
     * @param msp
     */
    constructor(msp: string) {
        if (!Accidental.DICTIONARY.msps.includes(msp)) {
            throw new Error("msp text is not valid");
        }

        this.msp = msp;
        this.value = Accidental.mspToValue(this.msp);
    }

    /***
     * Returns the string representation of this object.
     */
    toString() {
        return this.msp;
    }

    /***
     * Returns the value associated with the given msp.
     * @param msp
     */
    static mspToValue(msp: string) {
        return Accidental.DICTIONARY.values[Accidental.DICTIONARY.msps.indexOf(msp)];
    }

    /***
     * Returns the msp associated with the given value
     * @param value
     */
    static valueToMsp(value: number) {
        return Accidental.DICTIONARY.msps[Accidental.DICTIONARY.values.indexOf(value)];
    }

    private static DICTIONARY = {
        msps: ["bb", "b", "", "#", "##"],
        values: [-2, -1, 0, 1, 2],
    };
}