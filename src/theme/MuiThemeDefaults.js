export const muiBreakpoints = {
  values: {
    xs: 0,
    sm: 750,
    md: 1024,
    lg: 1440,
    xl: 1920
  }
};

export const makeShadow = (i) =>
  [
    `0px ${i * 0.375 + 2}px ${i * 0.6 + 1}px -${
      i * 0.26 + 1
    }px rgba(0,0,0,0.1)`,
    `0px ${i + 1}px ${i * 1.6 + 1}px ${i * 0.125}px rgba(0,0,0,0.05)`,
    `0px ${i * 0.33 + 1}px ${i * 2 + 3}px ${i * 0.33}px rgba(0,0,0,0.05)`
  ].join(",");

export const shadows = [
  "none",
  ...[...Array(24).keys()].map((k) => makeShadow(k))
];

export const muiOverrides = (theme) => ({
  MuiLink: {
    underlineHover: {
      color: theme.palette.secondary.dark,
      textDecoration: "underline",
      cursor: "pointer"
    }
  },
  MuiButton: {
    root: {
      minHeight: 50,
      display: "flex",
      maxWidth: 480,
      margin: theme.spacing(2, 0),
      "&$containedPrimary": {
        borderRadius: 4,
        textTransform: "none"
      },
      [theme.breakpoints.up("sm")]: {
        maxWidth: 350
      },

      "&$outlined": {
        borderWidth: 2,
        borderColor: theme.palette.secondary.main,
        "&:hover": {
          borderWidth: 2
        }
      },

      "&$outlinedPrimary": {
        borderWidth: 2,
        borderRadius: 4,
        textTransform: "none",
        borderColor: theme.palette.primary.main,
        "&:hover": {
          borderWidth: 2
        }
      },

      "&.radio": {
        margin: 0,
        ...theme.typography.body1,
        minHeight: 34,

        "&$outlinedSecondary": {
          color: "inherit",
          background: theme.palette.secondary.light
        },

        "&:not($outlinedSecondary)": {
          borderColor: "transparent"
        }
      }
    },
    text: {
      ...theme.typography.body2,
      textDecoration: "underline",
      minHeight: 0,
      "&:not($fullWidth)": {
        display: "inline-flex",
        margin: "0 0.5em",
        minWidth: 0
      }
    },
    textSecondary: {
      color: theme.palette.secondary.dark
    }
  },
  MuiFormLabel: {
    root: {
      fontWeight: 700,
      fontSize: "16px",
      lineHeight: 1.375,
      color: theme.palette.text.primary,
      fontFamily: theme.typography.fontFamily,

      "&.as-copy": {
        ...theme.typography.body2
      }
    }
  },
  MuiFormControl: {
    root: {
      width: "100%",
      marginTop: theme.spacing(0.5),
      marginBottom: theme.spacing(0.5)
    }
  },
  MuiInputBase: {
    root: {
      background: "#ffffff",
      "&:focus-visible": {
        outline: theme.palette.secondary.main
      },
      "&:focus": {
        outline: theme.palette.secondary.main
      }
    },
    input: {
      ...theme.typography.subtitle2,
      "&::placeholder": {
        color: theme.palette.text.secondary,
        opacity: 1,
        ...theme.typography.subtitle1
      }
    }
  },
  MuiOutlinedInput: {
    root: {
      height: "50px",
      width: "100%",
      "& fieldset": {
        borderColor: theme.palette.text.secondary
      },
      "&:hover": {
        borderColor: theme.palette.text.primary
      },
      "& .MuiOutlinedInput-input": {
        "&:focus": {
          backgroundColor: "#ffffff"
        }
      }
    },
    input: {
      padding: "15.5px 14px"
    }
  },
  MuiSelect: {
    select: {
      borderColor: theme.palette.text.secondary,
      ...theme.typography.subtitle2,
      paddingRight: "0px !important",
      [theme.breakpoints.up("sm")]: {
        paddingRight: "25px"
      }
    },
    icon: {
      top: "inherit",
      color: theme.palette.secondary.dark,
      fontSize: "2rem"
    }
  },
  MuiCheckbox: {
    root: {
      padding: 0,

      "&.error": {
        color: theme.palette.error.main
      }
    }
  },
  MuiDivider: {
    root: {
      height: 0,
      margin: theme.spacing(2, 0),
      borderTop: `1px solid ${theme.palette.grey["300"]}`,
      borderBottom: `1px solid ${theme.palette.grey["200"]}`,

      "&.compact": {
        margin: theme.spacing(0.5, 0)
      }
    }
  },
  muiPalette: {
    action: {
      // Figma currently can't inject opacity. This is only temporary.
      hoverOpacity: 0.1
    }
  },
  MuiTypography: {
    root: {
      color: theme.palette.text.primary,
      "&.semi": {
        fontWeight: 600
      },
      "&.compact": {
        margin: theme.spacing(0.5, 0)
      }
    },
    h1: {
      margin: "10px auto"
    },
    h2: {
      margin: "30px auto 10px",
      maxWidth: "341px",
      [theme.breakpoints.up("sm")]: {
        maxWidth: "543px"
      }
    },
    h3: {
      margin: "10px auto"
    },
    h4: {
      margin: "10px auto"
    },
    h5: {
      margin: "10px auto",
      [theme.breakpoints.up("sm")]: {
        maxWidth: "451px"
      }
    },
    h6: {
      margin: "10px auto"
    },
    body2: {
      fontStyle: "normal"
    }
  },
  MuiListItemIcon: {
    root: {
      minWidth: 40
    }
  },
  MuiFormHelperText: {
    root: {
      ...theme.typography.caption,
      color: theme.palette.text.secondary,
      margin: 0,
      "&$error": {
        paddingLeft: 18,
        "& .errorIcon": {
          marginLeft: -18
        }
      }
    },
    contained: {
      marginLeft: "0px"
    }
  },
  MuiGrid: {
    root: {
      "-webkit-tap-highlight-color": "transparent"
    }
  },
  MuiAccordionSummary: {
    expandIcon: {
      "&.Mui-expanded": {
        transform: "none"
      }
    }
  },
  MuiPickersDay: {
    daySelected: {
      [theme.breakpoints.up("sm")]: {
        backgroundColor: theme.palette.primary.main,
        "&:hover": {
          backgroundColor: `${theme.palette.primary.main}10`,
          color: theme.palette.text.primary
        }
      }
    },
    day: {
      "& .MuiTypography-root": {
        fontSize: "inherit"
      },
      daySelected: {
        "&:hover": {
          backgroundColor: `${theme.palette.primary.main}10`,
          color: theme.palette.text.primary
        }
      }
    },
    dayDisabled: {
      color: theme.palette.grey["500"]
    }
  },
  MuiPickersModal: {
    dialogAction: {
      color: theme.palette.primary.main,
      padding: 0
    }
  },
  MuiPickersCalendarHeader: {
    switchHeader: {
      width: 340
    },
    daysHeader: {
      justifyContent: "space-evenly"
    },
    dayLabel: {
      fontFamily: "Open sans, sans-serif",
      fontWeight: "500",
      fontSize: "12px",
      color: theme.palette.text.primary
    }
  },
  MuiPickersCalendar: {
    week: {
      justifyContent: "space-evenly",
      paddingBottom: 10
    }
  },
  MuiIconButton: {
    root: {
      color: theme.palette.primary.main,
      "&.Mui-disabled": {
        color: "transparent"
      }
    }
  }
});
