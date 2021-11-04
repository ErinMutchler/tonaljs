export class Accidental {
    readonly symbol: string;
    readonly value: number;

    constructor(symbol: string) {
        if (ACCIDENTAL_SYMBOLS.indexOf(symbol) === -1) {
            throw "Accidental is not valid";
        }

        this.symbol = symbol;
        this.value = Accidental.symbolToValue(this.symbol);
    }

    static symbolToValue(symbol: string) {
        return ACCIDENTAL_SYMBOLS.indexOf(symbol) - 2;
    }

    static valueToSymbol(value: number) {
        return ACCIDENTAL_SYMBOLS[value + 2];
    }
}

const ACCIDENTAL_SYMBOLS = ["bb", "b", "", "#", "##"];