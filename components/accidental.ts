export class Accidental {
    /**
     * string is the string representation of an Accidental.
     */
    readonly string: string;

    /**
     * value is the numerical value of an Accidental. It acts as a modifier for several note classes and follows the
     * paradigm of doubleFlat=-2, flat=-1, natural=0, sharp=1, doubleSharp=2.
     */
    readonly value: number;

    /**
     * Constructs a new Accidental with either a given string or a given value.
     * @param accidental
     */
    constructor(accidentalString: string) {
        Accidental.validate(accidentalString);

        this.string = accidentalString;
        this.value = Accidental.stringToValue(this.string);
    }

    /**
     * Checks to see if a given string is a valid for constructing a new Accidental.
     * @param accidentalString The string to check the validity of.
     *
     * @returns boolean true if given string is a valid string for constructing a new Accidental.
     */
    static validate(accidentalString: string) {
        if (["♭♭", "♭", "", "♯", "♯♯"].indexOf(accidentalString) > -1) {
            return true;
        } else {
            throw "Accidental is not valid";
        }
    }

    /**
     * Converts a valid string into its corresponding value.
     * @param string The string to convert into its corresponding value.
     *
     * @returns number The corresponding value of the given string.
     */
    static stringToValue(string: string) {
        return { ["bb"]: -2, ["b"]: -1, [""]: 0, ["#"]: 1, ["##"]: 2 }[string];
    }

    /**
     * Converts a valid value into its corresponding string.
     * @param value The value to convert into its corresponding string.
     *
     * @returns number The corresponding string for the given value.
     */
    static valueToString(value: number) {
        return ["bb", "b", "", "#", "##"][value + 2];
    }
}