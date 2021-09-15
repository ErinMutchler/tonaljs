"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = void 0;
var noteClass_1 = require("./noteClass");
var Note = /** @class */ (function () {
    function Note(noteString, octave) {
        this.class = new noteClass_1.NoteClass(noteString);
        this.octave = octave;
        this.value = ((this.octave - 1) * 12) + this.class.value;
    }
    Note.prototype.addInterval = function (interval) {
        //TODO: Implement
    };
    Note.prototype.subtractInterval = function (interval) {
        //TODO: Implement
    };
    Note.prototype.getDistanceFromNoteClass = function (noteClass) {
        //TODO: Implement
    };
    Note.prototype.getDistanceToNoteClass = function (noteClass) {
        //TODO: Implement
    };
    Note.prototype.simplify = function () {
        //TODO: Implement
    };
    return Note;
}());
exports.Note = Note;
//# sourceMappingURL=note.js.map