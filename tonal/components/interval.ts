export class Interval {
    static readonly validIntervalStrings = {
        ["P1"]: [0, 0],
        ["m2"]: [1, 1], ["A1"]: [1, 0],
        ["M2"]: [2, 1], ["d3"]: [2, 2],
        ["m3"]: [3, 2], ["A2"]: [3, 1],
        ["M3"]: [4, 2], ["d4"]: [4, 3],
        ["P4"]: [5, 3], ["A3"]: [5, 2],
        ["d5"]: [6, 4], ["A4"]: [6, 3],
        ["P5"]: [7, 4], ["d6"]: [7, 5],
        ["m6"]: [8, 5], ["A5"]: [8, 4],
        ["M6"]: [9, 5], ["d7"]: [9, 6],
        ["m7"]: [10, 6], ["A6"]: [10, 5],
        ["M7"]: [11, 6], ["d8"]: [11, 7],
        ["P8"]: [12, 7], ["A7"]: [12, 6],
    };

    readonly semitoneSteps: number;
    readonly ordinalSteps: number;
    readonly string: string;
    autoSimplify: boolean;


    constructor(semitoneSteps: number, ordinalSteps: number, autoSimplify: boolean);
    constructor(intervalString: string, autoSimplify: boolean);
    constructor(param1: any, param2: any, param3?: any) {

        if (!Interval.isValid(intervalString)) {
            throw "Interval is not valid";
        }
        this.string = intervalString;
        this.semitoneSteps = Interval.validIntervalStrings[this.string][0];
        this.ordinalSteps = Interval.validIntervalStrings[this.string][1];
    }


    static isValid(intervalString: number);
    static isValid(semitoneSteps: number, ordinalSteps: number);
    static isValid(param1: any, param2?: any) {
        return intervalString in Interval.validIntervalStrings;

        if (typeof param1 === "number") {
            return [-2, -1, 0, 1, 2].indexOf(accidental) > -1;
        } else if (typeof accidental === "string") {
            return ["♭♭", "♭", "", "♯", "♯♯"].indexOf(accidental) > -1;
        } else {
            return false;
        }
    }

    static defineInterval(intervalString: string, semitoneSteps: number, ordinalSteps: number) {
        
    }
}