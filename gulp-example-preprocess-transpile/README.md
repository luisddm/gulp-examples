## Preprocessing tasks

- Preprocess SASS code to CSS
- Transpile ES6 code to JS

There are a variety of CSS preprocessors (SASS, LESS, Stylus, and more). The aim is to fix some weakness of the CSS language, as well as introduce new features leading to a more concise, more understandable stylesheet codebase. However, a browser just understands CSS, so our code must be preprocessed in order to generate this CSS.

Same goes for EcmaScript 6 (ES6). It is a superset of the previous version (ES5). Although most of the new features are already implemented in the last versions of the major browsers, we need to keep the compatibility backwards, so we must transpile our codebase from ES6 to ES5. This way we make sure everything will work fine in almost any browser.
