# Coding standards

Coding standards create a consistent look to the code, so that readers can focus on content, not layout.
They facilitate copying, changing, and maintaining the code.
They demonstrate the best practices.

## References

-   https://developer.mozilla.org/en-US/docs/MDN/Guidelines/Code_guidelines/JavaScript
-   https://google.github.io/styleguide/jsguide.html
-   https://docs.cypress.io/guides/references/best-practices

## Readable and efficient code

Readable codes are easy to follow. When writing code you may often want to write it in as little lines as possible.
Perhaps you can write an entire method or function in one line, but that only makes it harder to read and understand.

## Project structure

```bash
├── downloads
├── e2e
│   └── cy.js
├── fixtures
│   ├── images
│   └── json
├── page-object
│   ├── pages
│   │   └── js
│   └── views
│       └── js
├── support
│   ├── commands.js
│   └── e2e.js
├── utils
│   └── js
├── node_modules
├── .gitignore
├── .prettierrc
├── cypress.config.js
├── readme.md
└── package.json
```

`e2e` folder is created for test files with `cy.js` extension. Because the main practise used in the project is Page Object Model, if there is a possibility, created a separate file for each page.
`page-object` folder is created to collect methods related to a given page. Importantly, this folder has been divided into two subfolders. The `pages` folder was created for pages (We say a page when it has a dedicated path). The `views` folder was created for modals.Everything is kept in the convention Page Object Model.

## File name

File names must be all lowercase and may include dashes (`-`), but no additional punctuation.

## Imports

Do not import the same file multiple times. This can make it hard to determine the aggregate imports of a file.

```
// Imports have the same path, but since it doesn't align it can be hard to see.
import {short} from './long/path/to/a/file.js';
import {aLongNameThatBreaksAlignment} from './long/path/to/a/file.js';
```

In general symbols imported via the named import (`import {name}`) should keep the same name. Avoid aliasing imports (`import {SomeThing as SomeOtherThing}`). Prefer fixing name collisions by using a module import (import \*) or renaming the exports themselves.

```
import * as bigAnimals from './biganimals.js';
import * as domesticatedAnimals from './domesticatedanimals.js';
```

## Template literals

For inserting values into strings, use string literals.

Do this:

```
let myName = 'Chris';
console.log(`Hi! I'm ${myName}!`);
```

Not this:

```
let myName = 'Chris';
console.log('Hi! I\'m' + myName + '!');
```

## Naming

Identifiers use only ASCII letters and digits. Give as descriptive a name as possible, within reason. Do not worry about saving horizontal space as it is far more important to make your code immediately understandable by a new reader. Do not use abbreviations that are ambiguous or unfamiliar to readers outside your project, and do not abbreviate by deleting letters within a word.

Do this:

```
errorCount          // No abbreviation.
dnsConnectionIndex  // Most people know what "DNS" stands for.
referrerUrl         // Ditto for "URL".
customerId          // "Id" is both ubiquitous and unlikely to be misunderstood.
```

Not this:

```
n                   // Meaningless.
nErr                // Ambiguous abbreviation.
nCompConns          // Ambiguous abbreviation.
wgcConnections      // Only your group knows what this stands for.
pcReader            // Lots of things can be abbreviated "pc".
cstmrId             // Deletes internal letters.
kSecondsPerDay      // Do not use Hungarian notation.
```

### Method names

Method names are written in `lowerCamelCase`. Method names are typically verbs or verb phrases. For example, `sendMessage`.

### Variable and parameter naming

For variable names use `lowerCamelCase`, and use concise, human-readable, semantic names where appropriate.

Do this:

```
let playerScore = 0;
let speed = distance / time;
```

Not this:

```
let thisIsaveryLONGVariableThatRecordsPlayerscore345654 = 0;
let s = d/t;
```

## Expanded syntax

For JavaScript you should use expanded syntax, with each line of JS on a new line, the opening brace of a block on the same line as its associated statement, and the closing brace on a new line. This maximizes readability. You should include spaces between operators and operands, parameters, etc.

This is more readable:

```
if(dayOfWeek === 7 && weather === 'sunny') {
goOnTrip('beach', 'car', ['ice cream', 'bucket and spade', 'beach towel']);
}
```

Not this:

```
if(dayOfWeek===7&&weather==='sunny'){
goOnTrip('beach','car',['ice cream','bucket and spade','beach towel']);
}
```

## Operators

Ternary operators should be put on a single line:

```
let status = (age >= 18) ? 'adult' : 'minor';
```

Use strict equality.

Do this:

```
name === 'Chris';
age !== 25;
```

Not this:

```
name == 'Chris';
age != 25;
```

## Control statement

There should be no space between a control statement keyword and its opening parenthesis.
There should be a space between the parentheses and the opening curly brace.
Write control statements like this:

```
if(iceCream) {
alert('Woo hoo!');
}
```

Not this:

```
if (iceCream){
  alert('Woo hoo!');
}
```

## Prettier format

`Prettier` is a tool implemented to format your code. Follow the settings, that you can find in the `.prettierrc` file. You can also run the script called `format` wit the command `npx prettier --write .` to format your code.

## For follower ;)

Stick to the rules written here. Thanks to this, the code will be transparent, readable and consistent. If you notice the need to expand the file, feel free to add something more, each tip is valuable.
