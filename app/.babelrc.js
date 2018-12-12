module.exports = {
  plugins: [
    'babel-plugin-styled-components',
    ['module-resolver', {
      root: ['./src'],
    }],
    ["@babel/plugin-transform-react-jsx", {
      "pragmaFrag": "React.Fragment"
    }]
  ],
}
