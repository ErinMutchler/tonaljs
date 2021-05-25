import {Interval} from "./interval";
import {Accidental} from "./accidental";
import {NoteLetter} from "./noteLetter";

export class NoteClass {
    readonly noteLetter: NoteLetter;
    readonly accidental: Accidental;
    readonly value: number;

    constructor(noteClassString) {
        this.noteLetter = new NoteLetter(noteClassString[0]);
        this.accidental = new Accidental(noteClassString.slice(1));
    }

    addInterval(interval) {
        const newLetter = this.noteLetter.addOrdinal(interval.letterSteps);
        const newAccidental = new Accidental(interval.semitones - ((newLetter.value - this.value + 12) % 12));
        return new NoteClass(newLetter.string + newAccidental.string);
    }

    subtractInterval(interval) {
        const newLetter = this.noteLetter.subOrdinal(interval.letterSteps);
        const newAccidental = new Accidental(-(interval.semitones - ((this.value - newLetter.value + 12) % 12)));
        return new NoteClass(newLetter.string + newAccidental.string);
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