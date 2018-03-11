import babel from "rollup-plugin-babel"

export default {
  input: "src/index.js",
  output: {
    file: "dist/react-hyperapp.js",
    format: "umd",
    name: "ReactHyperapp",
    globals: {
      react: "React",
      hyperapp: "hyperapp"
    }
  },
  external: ["react", "hyperapp"],
  plugins: [babel()]
}
