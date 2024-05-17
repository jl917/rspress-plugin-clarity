import { dtsPlugin } from "esbuild-plugin-d.ts";
import { build } from "esbuild";

const options = {
  entryPoints: ["./src/index.ts"],
  bundle: true,
  minify: true,
  plugins: [dtsPlugin({})],
};

build({
  ...options,
  outdir: "./lib",
  format: "cjs",
});

build({
  ...options,
  outdir: "./es",
  format: "esm",
});
