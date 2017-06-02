'use babel';
import path from 'path';
import grammarTest from 'atom-grammar-test';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('LanguageDocumentation', () => {
  beforeEach(function() {
    waitsForPromise(function() {
      return atom.packages.activatePackage('language-ember');
    });
  });

  grammarTest(path.join(__dirname, 'fixtures/syntax-test.js'))
});
