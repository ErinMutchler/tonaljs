import { expect } from 'chai';
import { NoteLetter } from '../components/NoteLetter';

describe('NoteLetter Constructor (msp)', () => {
    describe('msp assignment', () => {
        it('should construct a new NoteLetter whose msp is "C"', () => {
            expect(() => {
                return new NoteLetter('C').msp;
            }).to.equal('C');
        });
    
        it('should construct a new NoteLetter whose msp is "D"', () => {
            expect(() => {
                return new NoteLetter('D').msp;
            }).to.equal('D');
        });
    
        it('should construct a new NoteLetter whose msp is "E"', () => {
            expect(() => {
                return new NoteLetter('E').msp;
            }).to.equal('E');
        });
    
        it('should construct a new NoteLetter whose msp is "F"', () => {
            expect(() => {
                return new NoteLetter('F').msp;
            }).to.equal('F');
        });
    
        it('should construct a new NoteLetter whose msp is "G"', () => {
            expect(() => {
                return new NoteLetter('G').msp;
            }).to.equal('G');
        });
    
        it('should construct a new NoteLetter whose msp is "A"', () => {
            expect(() => {
                return new NoteLetter('A').msp;
            }).to.equal('A');
        });
    
        it('should construct a new NoteLetter whose msp is "B"', () => {
            expect(() => {
                return new NoteLetter('B').msp;
            }).to.equal('B');
        });
    });
    
    describe('ordinal assignment', () => {
        it('should construct a new NoteLetter whose ordinal is "0"', () => {
            expect(() => {
                return new NoteLetter('C').ordinal;
            }).to.equal(0);
        });
    
        it('should construct a new NoteLetter whose ordinal is "1"', () => {
            expect(() => {
                return new NoteLetter('D').ordinal;
            }).to.equal(1);
        });
    
        it('should construct a new NoteLetter whose ordinal is "2"', () => {
            expect(() => {
                return new NoteLetter('E').ordinal;
            }).to.equal(2);
        });
    
        it('should construct a new NoteLetter whose ordinal is "3"', () => {
            expect(() => {
                return new NoteLetter('F').ordinal;
            }).to.equal(3);
        });
    
        it('should construct a new NoteLetter whose ordinal is "4"', () => {
            expect(() => {
                return new NoteLetter('G').ordinal;
            }).to.equal(4);
        });
    
        it('should construct a new NoteLetter whose ordinal is "5"', () => {
            expect(() => {
                return new NoteLetter('A').ordinal;
            }).to.equal(5);
        });
    
        it('should construct a new NoteLetter whose ordinal is "6"', () => {
            expect(() => {
                return new NoteLetter('B').ordinal;
            }).to.equal(6);
        });
    });

    describe('value assignment', () => {
        it('should construct a new NoteLetter whose value is "0"', () => {
            expect(() => {
                return new NoteLetter('C').value;
            }).to.equal(0);
        });
    
        it('should construct a new NoteLetter whose value is "2"', () => {
            expect(() => {
                return new NoteLetter('D').value;
            }).to.equal(2);
        });
    
        it('should construct a new NoteLetter whose value is "4"', () => {
            expect(() => {
                return new NoteLetter('E').value;
            }).to.equal(4);
        });
    
        it('should construct a new NoteLetter whose value is "5"', () => {
            expect(() => {
                return new NoteLetter('F').value;
            }).to.equal(5);
        });
    
        it('should construct a new NoteLetter whose value is "7"', () => {
            expect(() => {
                return new NoteLetter('G').value;
            }).to.equal(7);
        });
    
        it('should construct a new NoteLetter whose value is "9"', () => {
            expect(() => {
                return new NoteLetter('A').value;
            }).to.equal(9);
        });
    
        it('should construct a new NoteLetter whose value is "11"', () => {
            expect(() => {
                return new NoteLetter('B').value;
            }).to.equal(11);
        });
    });

    describe('msp input error', () => {
        it('should throw an error', () => {
            expect(() => {
                return new NoteLetter('a');
            }).to.throw(Error); 
        });
    
        it('should throw an error', () => {
            expect(() => {
                return new NoteLetter('AA');
            }).to.throw(Error); 
        });
    
        it('should throw an error', () => {
            expect(() => {
                return new NoteLetter('Aq');
            }).to.throw(Error); 
        });
    
        it('should throw an error', () => {
            expect(() => {
                return new NoteLetter('');
            }).to.throw(Error); 
        });
    
        it('should throw an error', () => {
            expect(() => {
                return new NoteLetter('8');
            }).to.throw(Error); 
        });
    
        it('should throw an error', () => {
            expect(() => {
                return new NoteLetter('@');
            }).to.throw(Error); 
        });

        it('should throw an error', () => {
            expect(() => {
                return new NoteLetter('bB');
            }).to.throw(Error); 
        });
    });
});