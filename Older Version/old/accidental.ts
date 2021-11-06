import {symbols} from "./symbols";

export class Accidental {

    readonly symbol: string;
    readonly value: number;

    constructor(accidentalSymbol: string) {
        Accidental.validate(accidentalSymbol);

        this.symbol = accidentalSymbol;
        this.value = Accidental.symbolToValue(this.symbol);
    }

    static validate(accidentalSymbol: string) {
        if (Object.values(symbols.accidentals).indexOf(accidentalSymbol) > -1) {
            return true;
        } else {
            throw "Accidental is not valid";
        }
    }

    static symbolToValue(symbol: string) {
        return Object.keys(symbols.accidentals).indexOf(symbol) - 2;
    }

    static valueToSymbol(value: number) {
        return Object.values(symbols.accidentals)[value + 2];
    }
}