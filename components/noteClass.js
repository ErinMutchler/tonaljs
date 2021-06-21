"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var accidental_1 = require("./accidental");
var noteLetter_1 = require("./noteLetter");
var NoteClass = /** @class */ (function () {
    function NoteClass(noteClassString) {
        this.letter = new noteLetter_1.NoteLetter(noteClassString[0]);
        this.accidental = new accidental_1.Accidental(noteClassString.slice(1));
        this.value = (this.letter.value + this.accidental.value + 12) % 12;
    }
    NoteClass.prototype.addInterval = function (interval) {
        var newLetter = this.letter.addOrdinal(interval.staffPositions);
        var newAccidental = new accidental_1.Accidental(accidental_1.Accidental.valueToString(interval.semitones - ((newLetter.value - this.value + 12) % 12)));
        return new NoteClass(newLetter.string + newAccidental.string);
    };
    NoteClass.prototype.subtractInterval = function (interval) {
        var newLetter = this.letter.subOrdinal(interval.staffPositions);
        var newAccidental = new accidental_1.Accidental(accidental_1.Accidental.valueToString(-(interval.semitones - ((newLetter.value - this.value + 12) % 12))));
        return new NoteClass(newLetter.string + newAccidental.string);
    };
    NoteClass.prototype.getDistanceFromNoteClass = function (noteClass) {
        //TODO: Implement
    };
    NoteClass.prototype.getDistanceToNoteClass = function (noteClass) {
        //TODO: Implement
    };
    NoteClass.prototype.simplify = function () {
        //TODO: Implement
    };
    return NoteClass;
}());
exports.NoteClass = NoteClass;
//# sourceMappingURL=noteClass.js.map