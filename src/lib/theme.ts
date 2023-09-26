import { createTheme } from "@mui/material/styles";

const rootElement = document.getElementById("root");
// Change the target container for Portal-related elements so that they are injected under the main app wrapper.
export const theme = createTheme({
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
  },
  components: {
    MuiPopover: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiPopper: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiDialog: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiModal: {
      defaultProps: {
        container: rootElement,
      },
    },
  },
});
