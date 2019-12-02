import Typography from "typography"
import MoragaTheme from "typography-theme-moraga"

MoragaTheme.headerWeight = 400

const typography = new Typography(MoragaTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
