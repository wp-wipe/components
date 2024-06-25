
const esbuild = require("esbuild");

esbuild.build({
  entryPoints: ["src/build.ts"],
  bundle: true,
  platform: "node",
  packages: 'external',
  target: ["node10.4"],
  outfile: "./dist/wpwipe.js",
});
