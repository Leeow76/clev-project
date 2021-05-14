import { createMuiTheme } from "@material-ui/core/styles";
// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#94af76",
      light: "#c5e1a5",
      dark: "#7b9262",
    },
    secondary: {
      main: "#455a64",
      light: "#718792",
      dark: "#1c313a",
    },
    error: {
      main: "#DB5461",
    },
    background: {
      default: "#1c313a",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        marginRight: "5px",
      },
    },
  },
});
export default theme;
