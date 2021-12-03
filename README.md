# tonaljs

tonaljs is a Typescript library for representing musical objects and concepts.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install tonaljs.

```bash
npm install tonaljs
```

OR

Download tonaljs [here](https://tonaljs.io).

## Usage

For usage of specific tonaljs modules, see [here](https://todofixme).

```javascript
import {Note} from "./node_modules/tonaljs/components/Note.ts";
import {Interval} from "./node_modules/tonaljs/components/ .ts";

let myNote = new Note("Db");
let myInterval = new Interval("M3");

// Outputs 'F'
console.log(myNote.addInterval(myInterval).toString());
```

## Contributing
Please refer to each project's style and contribution guidelines for submitting patches and additions. In general, we follow the "fork-and-pull" Git workflow.

 1. **Fork** the repo on GitHub
 2. **Clone** the project to your own machine
 3. **Commit** changes to your own branch
 4. **Push** your work back up to your fork
 5. Submit a **Pull request** so that we can review your changes

NOTE: Be sure to merge the latest from "upstream" before making a pull request!

## License
[MIT](https://choosealicense.com/licenses/mit/)
