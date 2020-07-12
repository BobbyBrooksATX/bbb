import base from "@reflexjs/preset-base"

export default {
  preset: base,
  // Overrides.
  colors: {
    primary: "rgb(177, 45, 148)",
    secondary: "rgb(0,243,220)",
    kbkey: "#fff",
    border: "#c792ea",
    primaryContrast: "#fff",
      modes: {
        dark: {
          primary: "#e865c7",
          primaryContrast: "#323",
          secondary: "rgb(0,243,220)",
          kbkey: "#fff",
        },
    },
  },
  fonts: {
    body: "Raleway, sans-serif",
    heading: "Lato, sans-serif",
    monospace:
      "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
  lineHeights: {
    none: "1",
    tight: "1.25",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.625",
    bobby: "1.875",
    loose: "2",
    "3": ".75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem",
  },
  styles: {
    root: {
      color: "text",
      fontFamily: "body",
      fontWeight: "normal",
      fontSize: ["lg", "lg", "xl"],
      lineHeight: "bobby",
      letterSpacing: "normal",
    },
  },
  heading: {
      color: "heading",
      fontFamily: "heading",
      fontWeight: "black",
      lineHeight: "tight",
      letterSpacing: "normal",
  },
  h1: {
    variant: "heading",
    fontSize: ["4xl", "5xl", "6xl"],
  },
  h2: {
    variant: "heading",
    fontSize: ["4xl", "5xl", "5xl"],
  },
  h3: {
    variant: "heading",
    fontSize: ["4xl", "4xl", "4xl"],
  },
  h4: {
    variant: "heading",
    fontSize: ["xl", "2xl", "3xl"],
  },
  h5: {
    variant: "heading",
    fontSize: ["lg", "xl", "2xl"],
  },
  h6: {
    variant: "heading",
    fontSize: ["md", "lg", "xl"],
  },
  dl: {
    dd: {
      borderColor: "primary",
    },
  },
  blockquote: {
    fontSize: ["md", "lg", "xl"],
    paddingLeft: 4,
    borderLeft: "4px solid",
    borderColor: "secondary",
    borderWidth: 2,
    my: 8,
    fontStyle: "italic",
  },
}