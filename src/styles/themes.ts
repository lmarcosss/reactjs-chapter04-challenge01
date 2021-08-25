import { extendTheme } from "@chakra-ui/react";
import componentsStyles from "../components/styles";

export const theme = extendTheme({
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "white",
        color: "gray.600",
      },
      ...componentsStyles,
    },
  },
});
