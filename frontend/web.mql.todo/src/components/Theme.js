import {
  ThemeProvider as MuiThemeProvider,
  createMuiTheme,
} from "@material-ui/core";
import { colors } from "../colors";

const themeConfig = {
  palette: {
    primary: colors.blue,
    secondary: colors.blue,
  },
}

const theme = createMuiTheme(themeConfig);

export function ThemeProvider({ children }) {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
