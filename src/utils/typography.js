import Typography from "typography"

import lawtonTheme from "typography-theme-lawton"

lawtonTheme.baseFontSize = '18px'
lawtonTheme.baseLineHeight = 1.666
lawtonTheme.headerFontFamily = ['Roboto', 'sans-serif']
lawtonTheme.bodyFontFamily = ['Lato', 'sans-serif']

const typography = new Typography (lawtonTheme)

export default typography