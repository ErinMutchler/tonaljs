import { expect } from 'chai';
import { NoteClass } from '../components/NoteClass';

describe('NoteClass Constructor (msp)', () => {
    describe('value assignment', () => {
        const msp = [
            'C', 'B#', 'Dbb',
            'C#', 'Db',
            'D', 'C##', 'Ebb',
            'D#', 'Eb', 'Fbb',
            'E', 'D##', 'Fb',
            'F', 'E#', 'Gbb',
            'F#', 'E##', 'Gb',
            'G', 'F##', 'Abb',
            'G#', 'Ab',
            'A', 'G##', 'Bbb',
            'A#', 'Bb',
            'B', 'A##', 'Cb',
        ];
        const expected = [0, 0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 9, 9, 9, 10, 10, 11, 11, 11];

        for (let i = 0; i < expected.length; ++i) {
            it(`should construct a new NoteClass whose value is '${expected[i]}'`, () => {
                const noteClass = new NoteClass(msp[i]);
                expect(noteClass.value).to.equal(expected[i]);
            });
        }
    });

    describe('msp input error', () => {
        const msp = ['a', 'ab', 'AAb', '', '8B', 'AB', 'b8'];

        for (let i = 0; i < msp.length; ++i) {
            it('should throw an error', () => {
                expect(() => {
                    return new NoteClass(msp[i]);
                }).to.throw(Error);
            });
        }
    });
});