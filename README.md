# tonaljs

tonaljs is a open source library built to represent musical objects in Typescript.

## Classes

### NoteLetter
Properties:
 - letter: string
 - ordinal: number
 - value: number

Methods:
 - addOrdinal(ordinal: number)
 - subOrdinal(ordinal: number)
 - letterToOrdinal(letter: string)
 - ordinalToValue(ordinal: number)
 - ordinalToLetter(ordinal: number)
 - validate()
 - toString()

### Accidental
Properties:
 - symbol: string
 - value: number

Methods:
 - symbolToValue(symbol: string)
 - valueToSymbol(value: number)
 - toString()

### NoteClass
Properties:
 - noteLetter: NoteLetter
 - accidental: Accidental
 - value: number

Methods:
 - addInterval(interval: Interval)
 - subInterval(interval: Interval)
 - getDistanceFromNoteClass(noteClass: NoteClass)
 - getDistanceToNoteClass(noteClass: NoteClass)
 - simplify()
 - toString()

### Interval
Properties:
 - quality: string
 - degree: number
 - value: number

Methods:
 - toString()
### Note
Properties:
Methods:
### AbstractScale
Properties:
Methods:
### AbstractChord
Properties:
Methods:
### AbstractMode
Properties:
Methods:
### AbstractChordScale
Properties:
Methods:
### Scale
Properties:
Methods:
### Chord
Properties:
Methods:
### Mode
Properties:
Methods:
### ChordScale
Properties:
Methods:
