export class NoteLetter {
    /**
     * string is the string representation of a NoteLetter.
     */
    readonly string: string;

    /**
     * ordinal is the numerical value of a NoteLetter with respect to all other NoteLetters.
     * For example, the NoteLetter C's ordinal value is 0, D is 1, E is 2, etc. Ordinals
     * are always modular so they will always remain in the range 0-6 (inclusive).
     */
    readonly ordinal: number;
    /**
     * value is the numerical value of a NoteLetter with respect to all other Notes. Unlike
     * ordinal, value takes half steps into account. For example, C's value remains 0 but D's value
     * is 2 since there is one half step in between C and D (natural). The full list of values is
     * C=0, D=2, E=4, F=5, G=7, A=9 B=11. Like ordinals, NoteLetter values are always modular with the
     * range being 0-11 (inclusive).
     */
    readonly value: number;

    /**
     * Constructs a new NoteLetter given a valid string.
     * @param letter The letter to use for constructing a new NoteLetter
     */
    constructor(letter: string) {
        NoteLetter.validate(letter);

        this.string = letter;
        this.ordinal = NoteLetter.letterToOrdinal(this.string);
        this.value = NoteLetter.ordinalToValue(this.ordinal);
    }

    /**
     * Adds a given ordinal to this NoteLetter's ordinal and returns the new NoteLetter constructed from
     * the added ordinals.
     * @param ordinal The ordinal to add to this NoteLetter's ordinal.
     *
     * @returns NoteLetter A new NoteLetter whose ordinal value equals this NoteLetter's ordinal plus the given ordinal.
     */
    addOrdinal(ordinal: number) {
        return new NoteLetter(NoteLetter.ordinalToLetter((this.ordinal + ordinal + 7) % 7));
    }

    /**
     * Subtracts a given ordinal to from NoteLetter's ordinal and returns the new NoteLetter constructed from
     * the subtracted ordinals.
     * @param ordinal The ordinal to subtract from this NoteLetter's ordinal.
     *
     * @returns NoteLetter A new NoteLetter whose ordinal value equals this NoteLetter's ordinal minus the given ordinal.
     */
    subOrdinal(ordinal: number) {
        return this.addOrdinal(-ordinal);
    }

    /**
     * Checks to see if a given string is a valid letter for constructing a new NoteLetter.
     * @param letter The letter the check validity of.
     *
     * @returns boolean true if given letter is a valid letter for constructing a new NoteLetter.
     */
    static validate(letter: string) {
        if (["C", "D", "E", "F", "G", "A", "B"].indexOf(letter) > -1) {
            return true;
        } else {
            throw "Note Letter is not Valid";
        }
    }

    /**
     * Converts a valid letter into its corresponding ordinal.
     * @param letter The letter to convert into its corresponding ordinal.
     *
     * @returns number The corresponding ordinal of the given letter.
     */
    static letterToOrdinal(letter: string) {
        return (letter.charCodeAt(0) - "C".charCodeAt(0) + 7) % 7;
    }

    /**
     * Converts a valid ordinal into its corresponding value.
     * @param ordinal The ordinal to convert its corresponding value.
     *
     * @returns number The corresponding value of the given ordinal.
     */
    static ordinalToValue(ordinal: number) {
        return Math.floor((ordinal * 1.79) + 0.5);
    }

    /**
     * Converts a valid ordinal into its corresponding letter.
     * @param ordinal The ordinal to convert its corresponding letter.
     *
     * @returns string The corresponding letter of the given ordinal.
     */
    static ordinalToLetter(ordinal: number) {
        return String.fromCharCode(((ordinal + 2) % 7) + "A".charCodeAt(0));
    }
}