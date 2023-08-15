module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: '.',
        alias: {
          '@dtos': './src/dtos',
          '@assets': './src/assets',
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@screens': './src/screens',
          '@storage': './src/storage',
          '@utils': './src/utils',
          '@services': './src/services',
          '@contexts': './src/contexts',
          '@routes': './src/routes',
          '@theme': './src/theme',
          '@domain': './src/domain',
          '@brand': './src/brand',
          '@api': './src/api',
          '@types': './src/types',
          '@infra': './src/infra',
        },
      },
    ],
  ],
};
