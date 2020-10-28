import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    "@global": {
      body: {
        margin: "0",
      },
    },
    root: {
      textAlign: "center",
    },
    content: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      margin: "30px 0",
      "@media(max-width: 768px)": {
        flexDirection: "column",
      },
    },
  });