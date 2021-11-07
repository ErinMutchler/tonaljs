export class NoteLetter {
    /***
     * msp stands for Music Syntax as Plaintext. Refer to the documentation for details on msp.
     */
    readonly msp: string;

    /***
     * ordinal is the numeric representation of a NoteLetter with a range from 0 to 6.
     */
    readonly ordinal: number;

    /***
     * value is the numeric representation of a NoteLetter with a range from 0 to 11. 
     * The spacing is based on semitone relationships between the white keys on a piano.
     */
    readonly value: number;

    /***
     * Constructs a new NoteLetter object from a given msp.
     */
    constructor(msp: string) {
        if (!NoteLetter.DICTIONARY.msps.includes(msp)) {
            throw new Error("msp text is not valid");
        }

        this.msp = msp;
        this.ordinal = NoteLetter.mspToOrdinal(this.msp);
        this.value = NoteLetter.ordinalToValue(this.ordinal);
    }

    /***
     * Returns the corresponding ordinal for a given msp.
     */
    static mspToOrdinal(msp: string) {
        return NoteLetter.DICTIONARY.ordinals[NoteLetter.DICTIONARY.msps.indexOf(msp)];
    }
    
    /***
     * Returns the corresponding value for a given ordinal.
     */
    static ordinalToValue(ordinal: number) {
        return NoteLetter.DICTIONARY.values[NoteLetter.DICTIONARY.ordinals.indexOf(ordinal)];
    }

    /***
     * Returns the corresponding msp for a given ordinal.
     */
    static ordinalToMsp(ordinal: number) {
        return NoteLetter.DICTIONARY.msps[NoteLetter.DICTIONARY.ordinals.indexOf(ordinal)];
    }

    /***
     * Returns a new NoteLetter whose ordinal is the sum of this NoteLetter's ordinal plus a given number.
     */
    addToOrdinal(n: number) {
        return new NoteLetter(NoteLetter.ordinalToMsp((((this.ordinal + n) % 7) + 7) % 7));
    }

    /***
     * Returns a new NoteLetter whose ordinal is the differnce of this NoteLetter's ordinal minus a given number.
     */
     subtractFromOrdinal(n: number) {
        return this.addToOrdinal(n * -1);
    }

    /***
     * Returns the string representation of this object.
     */
    toString() {
        return this.msp;
    }

    private static DICTIONARY = {
        msps: ["C", "D", "E", "F", "G", "A", "B"],
        ordinals: [0, 1, 2, 3, 4, 5, 6],
        values: [0, 2, 4, 5, 7, 9, 11],
    };
}