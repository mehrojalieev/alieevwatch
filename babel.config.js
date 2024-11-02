module.exports = {
    presets: [
      '@vue/cli-plugin-babel/preset',
      ['@babel/preset-env', { targets: '> 0.25%, not dead' }]
    ],
    plugins: [
      '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-proposal-nullish-coalescing-operator'
    ]
  }
  