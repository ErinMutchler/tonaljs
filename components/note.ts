import {Interval} from "./interval";
import {NoteClass} from "./noteClass";

export class Note {
    readonly noteClass: NoteClass;
    readonly octave: number;
    readonly value: number;

    constructor(symbol: string) {
        this.noteClass = new NoteClass(symbol.split(/\d/)[0]);
        this.octave = parseInt(symbol.split(/\d/)[1]);
        this.value = (this.octave * 12) + this.noteClass.value;
    }

    addInterval(interval: Interval) {
        const noteLetter = this.noteLetter.addOrdinal(interval.degree - 1);
        const accidental = new Accidental(Accidental.valueToSymbol(interval.value - ((noteLetter.value - this.value + 12) % 12)));
        return new NoteClass(noteLetter.letter + accidental.symbol);
    }

    subInterval(interval: Interval) {
        const noteLetter = this.noteLetter.subOrdinal(interval.degree - 1);
        const accidental = new Accidental(Accidental.valueToSymbol(-(interval.value - ((noteLetter.value - this.value + 12) % 12))));
        return new NoteClass(noteLetter.letter + accidental.symbol);
    }

    getDistanceFromNoteClass(noteClass) {
        const degree = this.noteLetter.ordinal - noteClass.noteLetter.ordinal + 1;
        const qualityValue = this.noteLetter.value - noteClass.noteLetter.value;
        const quality = Interval.isDegreeSymmetrical(degree) ?
            { "A": 1, "AA": 2, "AAA": 3, "d": -1, "dd": -2, "ddd": -3, "P": 0, }[qualityValue]:
            { "A": 1, "AA": 2, "AAA": 3, "d": -2, "dd": -3, "ddd": -4, "m": -1, "M": 0, } [qualityValue];
        return new Interval(quality, degree);
    }

    getDistanceToNoteClass(noteClass) {
        const degree = noteClass.noteLetter.ordinal - this.noteLetter.ordinal + 1;
        const qualityValue = noteClass.noteLetter.value - this.noteLetter.value;
        let quality = "";
        if ([0, 3, 4].includes(degree)) {
            quality = { "A": 1, "AA": 2, "AAA": 3, "d": -1, "dd": -2, "ddd": -3, "P": 0, }[qualityValue];
        } else {
            quality = { "A": 1, "AA": 2, "AAA": 3, "d": -2, "dd": -3, "ddd": -4, "m": -1, "M": 0, } [qualityValue];
        }
        return new Interval(quality, degree);
    }

    toString() {
        return this.noteLetter.toString() + this.accidental.toString();
    }
}