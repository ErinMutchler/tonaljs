import {Interval} from "./interval";
import {Accidental} from "./accidental";
import {NoteLetter} from "./noteLetter";

export class Note {

    readonly noteLetter: NoteLetter;
    readonly accidental: Accidental;
    readonly value: number;
    readonly symbol: string;

    constructor(symbol: string) {
        this.noteLetter = new NoteLetter(symbol[0]);
        this.accidental = new Accidental(symbol.slice(1));
        this.value = (this.noteLetter.value + this.accidental.value + 12) % 12;
    }

    addInterval(interval: Interval) {
        const newLetter = this.noteLetter.addOrdinal(interval.staffPositions);
        const newAccidental = new Accidental(Accidental.valueToSymbol(interval.semitones - ((newLetter.value - this.value + 12) % 12)));
        return new Note(newLetter.symbol + newAccidental.symbol);
    }

    subtractInterval(interval: Interval) {
        const newLetter = this.noteLetter.subOrdinal(interval.staffPositions);
        const newAccidental = new Accidental(Accidental.valueToSymbol(-(interval.semitones - ((newLetter.value - this.value + 12) % 12))));
        return new Note(newLetter.symbol + newAccidental.symbol);
    }

    getDistanceFromNoteClass(noteClass) {
        //TODO: Implement
    }

    getDistanceToNoteClass(noteClass) {
        //TODO: Implement
    }

    simplify() {
        //TODO: Implement
    }
}