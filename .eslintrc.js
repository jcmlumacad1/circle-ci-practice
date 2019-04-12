module.exports = {
  // http://eslint.org/docs/rules/
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true
    }
  },
  "env": {
    "browser": true, // browser global variables.
    "node": true, // Node.js global variables and Node.js-specific rules.
    "amd": false, // defines require() and define() as global variables as per the amd spec.
    "mocha": false, // adds all of the Mocha testing global variables.
    "jasmine": true, // adds all of the Jasmine testing global variables for version 1.3 and 2.0.
    "phantomjs": false, // phantomjs global variables.
    "jquery": false, // jquery global variables.
    "prototypejs": false, // prototypejs global variables.
    "shelljs": false, // shelljs global variables.
    "es6": true
  },

  "globals": {
    "angular": true,
    "inject": true
  },

  "plugins": [
    // e.g. "react" (must run `npm install -D eslint-plugin-react` first)
    "react"
  ],

  "extends": ["eslint:recommended", "plugin:react/recommended"]
}
