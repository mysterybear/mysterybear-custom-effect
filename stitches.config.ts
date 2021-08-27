import { createCss, StitchesCss } from "@stitches/react";
import { map } from "fp-ts/lib/ReadonlyRecord"
import tailwindConfig from "./tailwind.config"
export type { StitchesVariants } from "@stitches/react";

export const stitches = createCss({
  prefix: "",
  theme: {},
  themeMap: {},
  utils: {},
  media: map((px) => `(min-width: ${px})`)(tailwindConfig.theme.screens),
})

export type CSS = StitchesCss<typeof stitches>;

export const { css, styled, global, theme, keyframes, getCssString } = stitches