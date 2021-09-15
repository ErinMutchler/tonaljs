import {Interval} from "./components/interval";
import {Accidental} from "./components/accidental";
import {NoteLetter} from "./components/noteLetter";

export class NoteClass {
    /**
     * letter is the NoteLetter of the NoteClass. For example, 'A' is the NoteLetter for the following NoteClass: 'Ab',
     * 'A', 'A#', 'Abb', etc.
     */
    readonly letter: NoteLetter;

    /**
     * accidental is the Accidental of the NoteClass.
     */
    readonly accidental: Accidental;

    /**
     * value is the numeric representation of a NoteClass. Its range is from 0-11 (inclusive).
     */
    readonly value: number;

    constructor(noteClassString: string) {
        this.letter = new NoteLetter(noteClassString[0]);
        this.accidental = new Accidental(noteClassString.slice(1));
        this.value = (this.letter.value + this.accidental.value + 12) % 12;
    }

    addInterval(interval: Interval) {
        const newLetter = this.letter.addOrdinal(interval.staffPositions);
        const newAccidental = new Accidental(Accidental.valueToString(interval.semitones - ((newLetter.value - this.value + 12) % 12)));
        return new NoteClass(newLetter.string + newAccidental.string);
    }

    subtractInterval(interval: Interval) {
        const newLetter = this.letter.subOrdinal(interval.staffPositions);
        const newAccidental = new Accidental(Accidental.valueToString(-(interval.semitones - ((newLetter.value - this.value + 12) % 12))));
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