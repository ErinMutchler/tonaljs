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
        if ([symbols.double_flat, symbols.flat, symbols.natural, symbols.sharp, symbols.double_sharp].indexOf(accidentalSymbol) > -1) {
            return true;
        } else {
            throw "Accidental is not valid";
        }
    }

    static symbolToValue(symbol: string) {
        return {
            [symbols.double_flat]: -2,
            [symbols.flat]: -1,
            [symbols.natural]: 0,
            [symbols.sharp]: 1,
            [symbols.double_sharp]: 2
        } [symbol];
    }

    static valueToSymbol(value: number) {
        return [symbols.double_flat, symbols.flat, symbols.natural, symbols.sharp, symbols.double_sharp][value + 2];
    }
}