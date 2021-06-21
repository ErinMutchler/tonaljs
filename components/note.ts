import {Interval} from "./interval";
import {Accidental} from "./accidental";
import {NoteLetter} from "./noteLetter";
import {NoteClass} from "./noteClass"

export class Note {
    readonly class: NoteClass;
    readonly octave: number;
    readonly value: number;

    constructor(noteString: string, octave: number) {
        this.class = new NoteClass(noteString);
        this.octave = octave;
        this.value = ((this.octave - 1) * 12) + this.class.value;
    }

    addInterval(interval: Interval) {
        //TODO: Implement
    }

    subtractInterval(interval: Interval) {
        //TODO: Implement
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