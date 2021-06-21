"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NoteLetter = /** @class */ (function () {
    /**
     * Constructs a new NoteLetter given a valid string.
     * @param letter The letter to use for constructing a new NoteLetter
     */
    function NoteLetter(letter) {
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
    NoteLetter.prototype.addOrdinal = function (ordinal) {
        return new NoteLetter(NoteLetter.ordinalToLetter((this.ordinal + ordinal + 7) % 7));
    };
    /**
     * Subtracts a given ordinal to from NoteLetter's ordinal and returns the new NoteLetter constructed from
     * the subtracted ordinals.
     * @param ordinal The ordinal to subtract from this NoteLetter's ordinal.
     *
     * @returns NoteLetter A new NoteLetter whose ordinal value equals this NoteLetter's ordinal minus the given ordinal.
     */
    NoteLetter.prototype.subOrdinal = function (ordinal) {
        return this.addOrdinal(-ordinal);
    };
    /**
     * Checks to see if a given string is a valid letter for constructing a new NoteLetter.
     * @param letter The letter to check the validity of.
     *
     * @returns boolean true if given letter is a valid letter for constructing a new NoteLetter.
     */
    NoteLetter.validate = function (letter) {
        if (["C", "D", "E", "F", "G", "A", "B"].indexOf(letter) > -1) {
            return true;
        }
        else {
            throw "Note Letter is not Valid";
        }
    };
    /**
     * Converts a valid letter into its corresponding ordinal.
     * @param letter The letter to convert into its corresponding ordinal.
     *
     * @returns number The corresponding ordinal of the given letter.
     */
    NoteLetter.letterToOrdinal = function (letter) {
        return (letter.charCodeAt(0) - "C".charCodeAt(0) + 7) % 7;
    };
    /**
     * Converts a valid ordinal into its corresponding value.
     * @param ordinal The ordinal to convert its corresponding value.
     *
     * @returns number The corresponding value of the given ordinal.
     */
    NoteLetter.ordinalToValue = function (ordinal) {
        return Math.floor((ordinal * 1.79) + 0.5);
    };
    /**
     * Converts a valid ordinal into its corresponding letter.
     * @param ordinal The ordinal to convert its corresponding letter.
     *
     * @returns string The corresponding letter of the given ordinal.
     */
    NoteLetter.ordinalToLetter = function (ordinal) {
        return String.fromCharCode(((ordinal + 2) % 7) + "A".charCodeAt(0));
    };
    return NoteLetter;
}());
exports.NoteLetter = NoteLetter;
//# sourceMappingURL=noteLetter.js.map