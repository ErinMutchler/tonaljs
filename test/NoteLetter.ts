import { expect } from 'chai';
import { NoteLetter } from '../components/NoteLetter';

describe('NoteLetter Constructor (msp)', () => {
    describe('msp assignment', () => {
        const msp = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
        const expected = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

        for (let i = 0; i < expected.length; ++i) {
            it(`should construct a new NoteLetter whose msp is '${expected[i]}'`, () => {
                const noteLetter = new NoteLetter(msp[i]);
                expect(noteLetter.msp).to.equal(expected[i]);
            });
        }
    });
    
    describe('ordinal assignment', () => {
        const msp = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
        const expected = [0, 1, 2, 3, 4, 5, 6];

        for (let i = 0; i < expected.length; ++i) {
            it(`should construct a new NoteLetter whose ordinal is ${expected[i]}`, () => {
                const noteLetter = new NoteLetter(msp[i]);
                expect(noteLetter.ordinal).to.equal(expected[i]);
            });
        }
    });

    describe('value assignment', () => {
        const msp = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
        const expected = [0, 2, 4, 5, 7, 9, 11];

        for (let i = 0; i < expected.length; ++i) {
            it(`should construct a new NoteLetter whose value is ${expected[i]}`, () => {
                const noteLetter = new NoteLetter(msp[i]);
                expect(noteLetter.value).to.equal(expected[i]);
            });
        }
    });

    describe('msp input error', () => {
        const msp = ['a', 'AA', 'Aq', '', '8', '@', 'b8'];

        for (let i = 0; i < msp.length; ++i) {
            it('should throw an error', () => {
                expect(() => {
                    return new NoteLetter(msp[i]);
                }).to.throw(Error);
            });
        }
    });
});

describe('NoteLetter addToOrdinal', () => {
    const addedValue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    const expected = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B'];

    for (let i = 0; i < expected.length; ++i) {
        it(`should return a new NoteLetter with a msp of ${expected[i]}`, () => {
            const noteLetter = new NoteLetter('C');
            expect(noteLetter.addToOrdinal(addedValue[i]).msp).to.equal(expected[i]);
        });
    }
});

describe('NoteLetter subtractFromOrdinal', () => {
    const subtractedValue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    const expected = ['C', 'B', 'A', 'G', 'F', 'E', 'D', 'C', 'B', 'A', 'G', 'F', 'E', 'D'];

    for (let i = 0; i < expected.length; ++i) {
        it(`should return a new NoteLetter with a msp of ${expected[i]}`, () => {
            const noteLetter = new NoteLetter('C');
            expect(noteLetter.subtractFromOrdinal(subtractedValue[i]).msp).to.equal(expected[i]);
        });
    }
});