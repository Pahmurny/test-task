module.exports = {
  'extends': 'react-app',
  'rules': {
    'no-var': process.env.ME ? 1 : 2,
    'eqeqeq': process.env.ME ? 1 : 2,
    'no-unused-vars': 2,
    'no-duplicate-imports': 2
  },
}