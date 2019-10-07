import typescriptPlugin from "rollup-plugin-typescript2";
import pkg from "./package.json";

export default {
    input: "src/index.ts",
    output: [
        {
            file: pkg.main,
            format: "umd",
            name: "shotify",
            globals: {
                html2canvas: "html2canvas"
            }
        },
        {
            file: pkg.module,
            format: "esm"
        }
    ],
    external: [...Object.keys(pkg.dependencies || {})],
    plugins: [
        typescriptPlugin({
            typescript: require("typescript")
        })
    ]
};
