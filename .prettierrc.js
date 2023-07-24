module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: true,
  singleQuote: true,
  trailingComma: 'all',
  importOrder: [
    '^react(.*)',
    'antd/(.*)',
    '^@core/(.*)$',
    '<THIRD_PARTY_MODULES>',
    '/interfaces',
    '/stores',
    '/hooks',
    '/middleware',
    '/Navigation',
    '/Screens',
    '/Components',
    '^[./]',
    '/Styles',
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
};
