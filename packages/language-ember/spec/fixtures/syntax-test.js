// SYNTAX TEST 'source.js.jsx'
import Component from 'ember-component';
import hbs from 'htmlbars-inline-precompile';

export default Component.extend({

  // Layout
  // ---------------------------------------------------------------------------
  layout: hbs`
    text
//  ^^^^ meta.source.glimmer
    <span></span>
//  ^      meta.tag.html.element punctuation.definition.tag.html
//   ^^^^  meta.tag.html.element entity.name.tag.html
//       ^ meta.tag.html.element punctuation.definition.tag.html
    <img src='/test' /> some text

    {{inline-component}} text
//  ^^                        entity.expression punctuation.definition.block
//    ^^^^^^^^^^^^^^^^        entity.expression entity.name.function.block
//                    ^^      entity.expression punctuation.definition.block
//                       ^^^^ meta.source.glimmer
    {{#block-component}}
//  ^^^                  entity.expression punctuation.definition.block
//     ^^^^^^^^^^^^^^^   entity.expression entity.name.function.block
//                    ^^ entity.expression punctuation.definition.block
      text
//    ^^^^ meta.source.glimmer
    {{/block-component}}
//  ^^^                  entity.expression punctuation.definition.block
//     ^^^^^^^^^^^^^^^   entity.expression entity.name.function.block
//                    ^^ entity.expression punctuation.definition.block
  `
});
