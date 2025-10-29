
import { AppRouter } from "./router"
import { AppThemeProvider } from "./theme/ThemeContext"

export const App = () => {
  return (
    // <AppTheme>
    <AppThemeProvider>

      <AppRouter />
    </AppThemeProvider>
    // </AppTheme>
  )
}

