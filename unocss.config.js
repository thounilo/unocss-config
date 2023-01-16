import {
    defineConfig,
    extractorSvelte,
    presetIcons,
    presetUno,
} from "unocss"

import transformerDirectives from "@unocss/transformer-directives"

/** @type {import('unocss').Config} */

export default defineConfig({
    extractors: [extractorSvelte],
    transformers: [transformerDirectives()],
    shortcuts: [],
    presets: [
        presetIcons({
            prefix: "i-",
            extraProperties: {
                display: "inline-block",
            },
        }),
        presetUno({ dark: "media" }),
    ],
    theme: {
        colors: {
            primary: {
                DEFAULT: "#15aabf",
                "50": "#f3fbfc",
                "100": "#e8f7f9",
                "200": "#c5eaef",
                "300": "#a1dde5",
                "400": "#5bc4d2",
                "500": "#15aabf",
                "600": "#1399ac",
                "700": "#10808f",
                "800": "#0d6673",
                "900": "#0a535e",
            },
            accent: {
                DEFAULT: "#fab005",
                "50": "#fffbf3",
                "100": "#fff7e6",
                "200": "#feebc1",
                "300": "#fddf9b",
                "400": "#fcc850",
                "500": "#fab005",
                "600": "#e19e05",
                "700": "#bc8404",
                "800": "#966a03",
                "900": "#7b5602",
            },
            shade: {
                DEFAULT: "#2b394d",
                "50": "#f4f5f6",
                "100": "#eaebed",
                "200": "#caced3",
                "300": "#aab0b8",
                "400": "#6b7482",
                "500": "#2b394d",
                "600": "#273345",
                "700": "#202b3a",
                "800": "#1a222e",
                "900": "#151c26",
            },
        },
    },
})
