# CHANGELOG

## 2.0.0 (1/8/17)

V2 Includes a number of changes to use the name `glimmer` instead of `HTMLBars` for defining scopes in order to condense and clarify rule definitions.

### Breaking Changes:
- Package JS Grammar renamed to ES6 Javascript + JSX && Glimmer
- Grammar `Ember HTMLBars` renamed to grammar `Ember Glimmer`
- Scope names for most Glimmer patterns.

Added:
- Working indentation for Glimmer HTML tags and block components

Fixed:
- Glimmer helpers being incorrectly matched inside of a component name

Changed:
- `HTMLBars.json` renamed to `Glimmer.json`
