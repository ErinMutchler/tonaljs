export class NoteLetter {

    readonly symbol: string;
    readonly ordinal: number;
    readonly value: number;

    constructor(symbol: string) {
        NoteLetter.validate(symbol);

        this.symbol = symbol;
        this.ordinal = NoteLetter.symbolToOrdinal(this.symbol);
        this.value = NoteLetter.ordinalToValue(this.ordinal);
    }

    addOrdinal(ordinal: number) {
        return new NoteLetter(NoteLetter.ordinalToSymbol((this.ordinal + ordinal + 7) % 7));
    }

    subOrdinal(ordinal: number) {
        return this.addOrdinal(-ordinal);
    }

    static validate(symbol: string) {
        if (["C", "D", "E", "F", "G", "A", "B"].indexOf(symbol) > -1) {
            return true;
        } else {
            throw "Note Letter is not Valid";
        }
    }

    static symbolToOrdinal(symbol: string) {
        return (symbol.charCodeAt(0) - "C".charCodeAt(0) + 7) % 7;
    }

    static ordinalToValue(ordinal: number) {
        return Math.floor((ordinal * 1.79) + 0.5);
    }

    static ordinalToSymbol(ordinal: number) {
        return String.fromCharCode(((ordinal + 2) % 7) + "A".charCodeAt(0));
    }
}