import {Util} from "./Util";
import {Accidental} from "./Accidental";
import {NoteLetter} from "./NoteLetter";
import {Interval} from "../components/interval";

export class NoteClass {
    /***
     *
     */
    readonly noteLetter: NoteLetter;
    /***
     *
     */
    readonly accidental: Accidental;
    /***
     *
     */
    readonly value: number;

    /***
     *
     * @param msp
     */
    constructor(msp: string) {
        this.noteLetter = new NoteLetter(msp[0]);
        this.accidental = new Accidental(msp.slice(1));
        this.value = Util.mod(this.noteLetter.value + this.accidental.value, 12);
    }

    /***
     *
     * @param interval
     */
    addInterval(interval: Interval) {
        const noteLetter = this.noteLetter.addToOrdinal(interval.staffPositions);
        const accidental = new Accidental(Accidental.valueToMsp(interval.value - Util.mod(noteLetter.value - this.value, 12)));
        return new NoteClass(noteLetter.msp + accidental.msp);
    }

    /***
     *
     * @param interval
     */
    subInterval(interval: Interval) {
        const noteLetter = this.noteLetter.subtractFromOrdinal(interval.degree - 1);
        const accidental = new Accidental(Accidental.valueToMsp(-1 * (interval.value - Util.mod(noteLetter.value - this.value, 12))));
        return new NoteClass(noteLetter.msp + accidental.msp);
    }

    /***
     *
     */
    toString() {
        return this.noteLetter.msp + this.accidental.msp;
    }
}