const commonjs = require('@rollup/plugin-commonjs')
const typescript = require('rollup-plugin-typescript2')
const nodeResolve = require('@rollup/plugin-node-resolve')
const json = require('@rollup/plugin-json')

const config = {
  external: (id) => ['dotenv'].includes(id),
  plugins: [
    nodeResolve({
      preferBuiltins: true,
    }),
    typescript({
      clean: true,
      tsconfig: 'tsconfig.json',
    }),
    commonjs(),
    json(),
  ],
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'es',
    },
    {
      file: 'dist/index.cjs',
      format: 'commonjs',
    },
  ],
}

export default config
