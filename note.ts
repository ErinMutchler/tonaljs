import {Interval} from "./components/interval";
import {Accidental} from "./components/accidental";
import {NoteLetter} from "./components/noteLetter";
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