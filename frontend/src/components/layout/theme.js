import { extendTheme } from "@chakra-ui/react";
import {  MultiSelectTheme } from 'chakra-multiselect'

const config = {
  initialColorMode: 'light',
}

const theme = extendTheme({
  config,
  colors: {
    primary: {
      100: '#D7DEE5',
      200: '#BFC9D6',
      300: '#A7B4C7',
      400: '#859DB3',
      500: '#082F5E', // Base color
      600: '#08234f',
      700: '#071c40',
      800: '#051332',
      900: '#040f27',
    },
    secondary: {
      100: '#fff9c1',
      200: '#fff086',
      300: '#ffdf41',
      400: '#ffcb0d',
      500: '#EBAC00', // Base color
      600: '#d18700',
      700: '#a65f02',
      800: '#894a0a',
      900: '#743d0f',
    },
    grey: {
      100: '#F2F2F2',
      200: '#E6E6E6',
      300: '#D3D3D3',
      400: '#CECECE',
      500: '#979797', // Base color
      600: '#5E5E5E',
      700: '#4D4D4D',
      800: '#3B3B3B',
      900: '#2A2A2A',
    },
    error: {
      100: '#FFE6E6',
      200: '#FFCCCC',
      300: '#FFB3B3',
      400: '#FF9999',
      500: '#D31313', // Base color
      600: '#B91212',
      700: '#A21111',
      800: '#8F1010',
      900: '#7D0F0F',
    },
    success: {
      100: '#E6F2E6',
      200: '#CCFFCC',
      300: '#B3FFB3',
      400: '#99FF99',
      500: '#16F216', // Base color
      600: '#12D912',
      700: '#11C211',
      800: '#108F10',
      900: '#0F7D0F',
    },
    black: {
      100: '#00000015',
      900: '#0F1325'
    },
    white: {
      100: '#F8F6F2',
      900: '#FFFFFF',
    }
  },
  components: {
    MultiSelect: MultiSelectTheme,
    Table: {
      baseStyle: {
        th: {
          fontWeight: "normal",
          fontFamily: "Montserrat",
          fontSize: '16px',
          textTransform: "capitalize",
        }
      },
    },
    FormLabel: {
      baseStyle: {
        fontWeight: "normal",
        fontFamily: "Montserrat",
        fontSize: "14px",
      },
    },
    Input: {
      baseStyle: {
        field: {
          fontWeight: "normal",
          fontFamily: "Montserrat",
          fontSize: "14px",
          _focus: {
            borderColor: "primary.500",
          },
          _focusVisible: {
            borderColor: "primary.500",
            boxShadow: "0 0 0 1px rgba(8, 47, 94, 0.7)",
          },
          _active: {
            borderColor: "primary.500",
          }
        }
      },
      variants: {
        ghost: {
          field: {
            backgroundColor: 'white.100',
            border: 'none'
          }
        },
        whiteGhost: {
          field: {
            backgroundColor: 'white.900',
            border: 'none'
          }
        }
      }
    },
    Select: {
      baseStyle: {
        field: {
          fontWeight: "normal",
          fontFamily: "Montserrat",
          fontSize: "14px",
          _focus: {
            borderColor: "primary.500",
          },
          _focusVisible: {
            borderColor: "primary.500",
            boxShadow: "0 0 0 1px rgba(8, 47, 94, 0.7)",
          },
          _active: {
            borderColor: "primary.500",
          }
        }
      },
      variants: {
        ghost: {
          field: {
            backgroundColor: 'white.100',
            border: 'none'
          }
        }
      }
    },
    Textarea: {
      baseStyle: {
        fontWeight: "normal",
        fontFamily: "Montserrat",
        fontSize: "14px",
        borderRadius: "6px",
        _focus: {
          borderColor: "primary.500",
        },
        _focusVisible: {
          borderColor: "primary.500",
          boxShadow: "0 0 0 1px rgba(8, 47, 94, 0.7)",
        },
        _active: {
          borderColor: "primary.500",
        },
      },
      variants: {
        ghost: {
          backgroundColor: 'white.100',
          border: 'none'
        }
      }
    },
    Button: {
      baseStyle: {
        rounded: "5px",
        border: "0px",
        width: 'fit-content',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: "normal",
        fontFamily: "Montserrat",
        color: "white.900",
      },
      variants: {
        primary: {
          backgroundColor: "primary.500",
          fontSize: "14px",
          lineHeight: "0px",
          height: "30px",
          padding: "0px 10px",
          _hover: {
            backgroundColor: "primary.600",
          },
          _active: {
            backgroundColor: "primary.700",
          },
        },
        error: {
          backgroundColor: "error.500",
          fontSize: "14px",
          lineHeight: "0px",
          height: "30px",
          padding: "0px 10px",
          _hover: {
            backgroundColor: "error.600",
          },
          _active: {
            backgroundColor: "error.700",
          },
        },
        ghost: {
          backgroundColor: "transparent",
          fontSize: "14px",
          lineHeight: "0px",
          height: "30px",
          padding: "0px 10px",
          _hover: {
            color: "primary.500",
            backgroundColor: "primary.100",
          },
          _active: {
            color: "primary.500",
            backgroundColor: "primary.200",
          },
        },
        google: {
          color: "black.900",
          backgroundColor: "transparent",
          fontSize: "14px",
          lineHeight: "0px",
          height: "30px",
          padding: "0px 10px",
          border: "1px solid",
          borderColor: "grey.300",
          _hover: {
            backgroundColor: "grey.100",
          },
          _active: {
            backgroundColor: "grey.200",
          },
        }
      }
    },
    Tooltip: {
      baseStyle: {
        backgroundColor: 'grey.200',
        color: "black.900",
        fontWeight: "normal",
        fontFamily: "Montserrat",
        fontSize: "12px",
        padding: "4px 8px",
        borderRadius: "4px",
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: "normal",
        fontFamily: "Montserrat",
        fontSize: "14px",
      },
      variants: {
        bold: {
          fontWeight: "bold",
        }
      }
    },
    Text: {
      baseStyle: {
        color: "black.900",
        fontWeight: "normal",
        fontFamily: "Montserrat",
        fontSize: "14px",
      },
      variants: {
        menuItem:{
          fontSize: "14px",
          lineHeight: "0px",
          _hover: {
            color: "primary.500",
          },
        },
        subMenuItem:{
          fontSize: "14px",
          lineHeight: "20px",
        }
      }
    }
  },
}); export default theme;