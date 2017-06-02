# Ember HTMLBars Highlighting

This package provides HMLBars/Glimmer syntax highlighting for template (`.hbs`)
files as well as inline template declaration in JS files.

### Syntax Highlighting

To activate syntax highlighting in template files select `Ember Glimmer` as the
language. Glimmer highlighting is automatically applied to any inline template
declaration in JS files.

### Ember Inline Template Declaration

Ember component test files are automatically generated with inline template string syntax, eg:

```javascript
this.render(hbs`
  {{#some-component}}
    Syntax highlighting is the best.
  {{/some-component}}
`);
```

But you can also declare templates for components using a tagged template string and the `layout` property!

```javascript
import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';

export default Ember.component.extend({
  // Component layout using tagged template string:
  layout: hbs`
    <span>Hello there, {{name}}</span>
  `
});
```

This package will match the ``hbs` ` `` declaration and apply syntax highlighting
to template string contents.

### Features
- HTMLBars Comment Block Bindings on `Cmd + /`
- Unescaped output (triple curlies) are flagged with wrapping `.unescaped.block.htmlbars`
- Property/Component/Helper names flagged as `string.of.property.function.component.name.htmlbars`
- All framework Ember helpers flagged as `support.function.builtin.inline.htmlbars`

![Screenshot](https://raw.githubusercontent.com/DHedgecock/language-ember/master/screenshot.png)

See `CONTRIBUTING.md` for technical details.

### Thank You
[language-ember-htmlbars](https://github.com/jmurphyau/language-ember-htmlbars) for ideas on regex patterns.
