export class Accidental {
    readonly string: string;
    readonly value: number;

    constructor(accidentalValue: number);
    constructor(accidentalString: string);
    constructor(accidental: any) {
        if (!Accidental.isValid(accidental)) {
            throw "Accidental is not valid";
        }
        if (typeof accidental === "string") {
            this.string = accidental;
        } else if (typeof accidental === "number") {
            this.string = ["♭♭", "♭", "", "♯", "♯♯"][accidental + 2];
        }
        this.value = { ["♭♭"]: -2, ["♭"]: -1, ["♮"]: 0, [""]: 0, ["♯"]: 1, ["♯♯"]: 2 }[this.string];
    }

    static isValid(accidentalString: number);
    static isValid(accidentalString: string);
    static isValid(accidental: any) {
        if (typeof accidental === "number") {
            return [-2, -1, 0, 1, 2].indexOf(accidental) > -1;
        } else if (typeof accidental === "string") {
            return ["♭♭", "♭", "", "♯", "♯♯"].indexOf(accidental) > -1;
        } else {
            return false;
        }
    }
}