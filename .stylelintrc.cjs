module.exports = {
    extends: ['stylelint-config-standard-scss'],
    plugins: ['stylelint-scss', 'stylelint-order'],
    rules: {
      'order/order': ['custom-properties', 'declarations'],
      'order/properties-alphabetical-order': true,
    },
  };
  