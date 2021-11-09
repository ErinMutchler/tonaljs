import { expect } from 'chai';
import { Accidental } from '../components/Accidental';

describe('Accidental Constructor', () => {
    describe('value assignment', () => {
        const msp = ['bb', 'b', '', '#', '##'];
        const expected = [-2, -1, 0, 1, 2];

        for (let i = 0; i < expected.length; ++i) {
            it(`should construct a new Accidental whose value is ${expected[i]}`, () => {
                const accidental = new Accidental(msp[i]);
                expect(accidental.value).to.equal(expected[i]);
            });
        }
    });

    describe('msp input error', () => {
        const msp = ['bbb', 'BB', '###', 'a', '8', '@', 'b#'];

        for (let i = 0; i < msp.length; ++i) {
            it('should throw an error', () => {
                expect(() => {
                    return new Accidental(msp[i]);
                }).to.throw(Error);
            });
        }
    });
});

describe('Accidental valueToMsp', () => {
    const values = [-2, -1, 0, 1, 2];
    const expected = ['bb', 'b', '', '#', '##'];

    for (let i = 0; i < expected.length; ++i) {
        it(`should return the msp associated with the value ${expected[i]}`, () => {
            expect(Accidental.valueToMsp(values[i])).to.equal(expected[i]);
        });
    }
});