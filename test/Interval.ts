import { expect } from 'chai';
import { Interval } from '../components/Interval';

describe('Interval Constructor', () => {
    describe('msp assignment', () => {
        const msp = [
            'ddd1', 'dd1', 'd1', 'P1', 'A1', 'AA1', 'AAA1',
            'ddd2', 'dd2', 'd2', 'm2', 'M2', 'A2', 'AA2', 'AAA2',
            'ddd3', 'dd3', 'd3', 'm3', 'M3', 'A3', 'AA3', 'AAA3',
            'ddd4', 'dd4', 'd4', 'P4', 'A4', 'AA4', 'AAA4',
            'ddd5', 'dd5', 'd5', 'P5', 'A5', 'AA5', 'AAA5',
            'ddd6', 'dd6', 'd6', 'm6', 'M6', 'A6', 'AA6', 'AAA6',
            'ddd7', 'dd7', 'd7', 'm7', 'M7', 'A7', 'AA7', 'AAA7',
        ];
        const expected = [
            'ddd1', 'dd1', 'd1', 'P1', 'A1', 'AA1', 'AAA1',
            'ddd2', 'dd2', 'd2', 'm2', 'M2', 'A2', 'AA2', 'AAA2',
            'ddd3', 'dd3', 'd3', 'm3', 'M3', 'A3', 'AA3', 'AAA3',
            'ddd4', 'dd4', 'd4', 'P4', 'A4', 'AA4', 'AAA4',
            'ddd5', 'dd5', 'd5', 'P5', 'A5', 'AA5', 'AAA5',
            'ddd6', 'dd6', 'd6', 'm6', 'M6', 'A6', 'AA6', 'AAA6',
            'ddd7', 'dd7', 'd7', 'm7', 'M7', 'A7', 'AA7', 'AAA7',
        ];

        for (let i = 0; i < msp.length; ++i) {
            it(`should construct a new Interval whose msp is ${expected[i]}`, () => {
                const interval = new Interval(msp[i]);
                expect(interval.msp).to.equal(expected[i]);
            });
        }
    });

    describe('value assignment', () => {
        const msp = [
            'ddd1', 'dd1', 'd1', 'P1', 'A1', 'AA1', 'AAA1',
            'ddd2', 'dd2', 'd2', 'm2', 'M2', 'A2', 'AA2', 'AAA2',
            'ddd3', 'dd3', 'd3', 'm3', 'M3', 'A3', 'AA3', 'AAA3',
            'ddd4', 'dd4', 'd4', 'P4', 'A4', 'AA4', 'AAA4',
            'ddd5', 'dd5', 'd5', 'P5', 'A5', 'AA5', 'AAA5',
            'ddd6', 'dd6', 'd6', 'm6', 'M6', 'A6', 'AA6', 'AAA6',
            'ddd7', 'dd7', 'd7', 'm7', 'M7', 'A7', 'AA7', 'AAA7',
        ];
        const expected = [
            -3, -2, -1, 0, 1, 2, 3,
            -2, -1, 0, 1, 2, 3, 4, 5,
            0, 1, 2, 3, 4, 5, 6, 7,
            2, 3, 4, 5, 6, 7, 8,
            4, 5, 6, 7, 8, 9, 10,
            5, 6, 7, 8, 9, 10, 11, 12,
            7, 8, 9, 10, 11, 12, 13, 14,
        ];

        for (let i = 0; i < msp.length; ++i) {
            it(`should construct a new Interval whose value is ${expected[i]}`, () => {
                const interval = new Interval(msp[i]);
                expect(interval.value).to.equal(expected[i]);
            });
        }
    });
});