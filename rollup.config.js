import typescript from "rollup-plugin-ts"
import {lezer} from "@lezer/generator/rollup"

export default {
  input: "src/tex.ts",
  external: id => id != "tslib" && !/^(\.?\/|\w:)/.test(id),
  output: [
    {file: "dist/tex.cjs", format: "cjs"},
    {dir: "./dist", format: "es"}
  ],
  plugins: [lezer(), typescript()]
}
