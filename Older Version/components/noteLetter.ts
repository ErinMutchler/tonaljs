export class NoteLetter {
    readonly letter: string;
    readonly ordinal: number;
    readonly value: number;

    constructor(letter: string) {
        if (["C", "D", "E", "F", "G", "A", "B"].indexOf(letter) === -1) {
            throw "NoteLetter is not Valid";
        }

        this.letter = letter;
        this.ordinal = NoteLetter.letterToOrdinal(this.letter);
        this.value = NoteLetter.ordinalToValue(this.ordinal);
    }

    addOrdinal(ordinal: number) {
        return new NoteLetter(NoteLetter.ordinalToLetter((this.ordinal + ordinal + 7) % 7));
    }

    subOrdinal(ordinal: number) {
        return this.addOrdinal(-ordinal);
    }

    toString() {
        return this.letter;
    }

    static letterToOrdinal(letter: string) {
        return (letter.charCodeAt(0) - "C".charCodeAt(0) + 7) % 7;
    }

    static ordinalToValue(ordinal: number) {
        return Math.floor((ordinal * 1.79) + 0.5);
    }

    static ordinalToLetter(ordinal: number) {
        return String.fromCharCode(((ordinal + 2) % 7) + "A".charCodeAt(0));
    }
}

