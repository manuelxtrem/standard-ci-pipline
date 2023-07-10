module.exports = {
  // Specify the rules that you want ESLint to enforce.
  rules: {
    // This rule will enforce the use of single quotes for strings.
    'quotes': ['error', 'double'],
    // This rule will enforce the use of curly braces for object literals.
    'curly': ['error', 'all'],
    // This rule will enforce the use of semicolons.
    'semi': ['error', 'always'],
    // This rule will enforce the use of trailing commas when appropriate.
    'comma-dangle': ['error', 'always-multiline'],
  },
};
