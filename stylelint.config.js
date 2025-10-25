export default {
  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-config-idiomatic-order',
  ],
  rules: {
    'selector-class-pattern': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'],
      },
    ],
    'no-descending-specificity': null,
  },
}




