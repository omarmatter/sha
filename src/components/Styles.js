import { createStyles, makeStyles } from "@mui/styles";

const primary = "#0D95FF";
const secondary = "#0D0E43";
const hoverBlue = "#0c7dd5";

const useStyles = makeStyles((theme) =>
  createStyles({
    app: {
      "& *": {
        fontFamily:
          "'Tajawal','Roboto','Helvetica','Arial',sans-serif !important",
      },
      "& a": {
        textDecoration: "none",
      },
    },
    formP: {
      padding: "0 15%",
      position: "relative",
      "& > span": {
        display: "flex",
        width: "13px",
        height: "13px",
        borderRadius: "50%",
        backgroundColor: primary,
        position: "absolute",
        // right: "20px",
        // top: "-20%",
      },
      "& h1": {
        fontSize: "46px",
        fontWeight: "bold",
        color: secondary,
      },
      "& h3": {
        fontSize: "16px",
        color: "#8A8FB9",
      },
      "& form": {
        marginTop: "8px",
        "& button": {
          marginTop: "32px",
          marginBottom: "24px",
          backgroundColor: primary,

          "&:hover": {
            background: hoverBlue,
          },
        },
        "& div div:first-child a": {
          color: "#8A8FB9",
        },
        "& div div:last-child a": {
          marginLeft: "8px",
          color: primary,
        },
      },
    },
    appbar: {
      backgroundColor: "#fff",
      color: "#000",
      "& h6": {
        color: secondary,
        fontSize: "34px",
        fontWeight: "bold",
        marginRight: "20px",
      },
      "& >div >div:nth-child(2)": {
        flexGrow: 1,
        display: "flex",
        "& button": {
          backgroundColor: "#FD924B",
          marginLeft: "-10px",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "#f56200",
          },
        },
      },
      "& >div >div:nth-child(3)": {
        flexGrow: 2,
      },

      "& >div >div:nth-child(4)": {
        flexBasis: "250px",
        justifyContent: "space-between",
        alignItems: "center",
        "& a": {
          display: "flex",
          alignItems: "center",
          color: "#434340",
          fontSize: "16px",
          fontWeight: "bold",
          "& > span> span": {
            backgroundColor: "#D96262",
            top: "40%",
            right: "5%",
          },
          "& > div": {
            marginRight: "10px",
          },
        },
      },
    },
    footer: {
      backgroundColor: "#FAFAFA",
      padding: "40px 60px",
      "& >.grid": {
        marginBottom: "30px",
        "& >.grid_item": {
          marginBottom: "30px",
          "& .imgHolder": {
            width: "130px",
            height: "75px",
            marginBottom: "10px",
            "& img": {
              width: "100%",
              height: "100%",
              objectFit: "contain",
            },
          },
          "& p": {
            fontWeight: "bold",
            paddingRight: "60px",
          },
          "& a": {
            color: "#000",
            fontSize: "14px",
            display: "block",
            "&:hover": {
              textDecoration: "underline",
            },
          },
          "& a:not(:last-child)": {
            marginBottom: "15px",
          },
          "& h6:first-child": {
            fontSize: "20px",
            fontWeight: "bold",
            color: "#434340",
            marginBottom: "25px",
          },
          "& span": {
            fontSize: "14px",
            marginBottom: "23px",
            display: "block",
          },
        },
        "&  >.grid_item:not(:last-child)": {
          borderRight: "1px solid #D8D8D8",
        },
      },

      "& >.box": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        "& span": {
          fontSize: "16px",
          fontWeight: "bold",
        },
        "& a:nth-child(1)>div": {
          backgroundColor: "#EA4335",
          "&:hover": {
            backgroundColor: "#ef200e",
            transition: "0.6s",
          },
        },
        "& a:nth-child(2)>div": {
          backgroundColor: "#4267B2",
          "&:hover": {
            backgroundColor: "#033fb7",
            transition: "0.6s",
          },
        },
        "& a:nth-child(3)>div": {
          backgroundColor: "#0077B5",
          "&:hover": {
            backgroundColor: "#00527d",
            transition: "0.6s",
          },
        },
        "& a:nth-child(4)>div": {
          backgroundColor: "#1DA1F2",
          "&:hover": {
            backgroundColor: "#0087d9",
            transition: "0.6s",
          },
        },
      },
    },
    home: {
      "& .intro": {
        position: "relative",
        padding: "0 46px",
        "&::before": {
          display: "block",
          backgroundColor: "rgba(0, 0, 0, 0.28)",
          content: `''`,
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        },
        "& .text": {
          padding: "132px 0 200px",
          position: "relative",
          maxWidth: "553px",
          color: "#fff",
          "& h3": {
            fontSize: "32px",
            fontWeight: "bold",
          },
          "& p": {
            fontSize: "16px",
            marginBottom: "32px",
            paddingRight: "60px",
            lineHeight: "2rem",
          },
          "& button": {
            fontSize: "16px",
            fontWeight: "bold",
            padding: "10px 30px",
            backgroundColor: primary,
            "&:hover": {
              backgroundColor: hoverBlue,
            },
          },
        },
      },
      "& .home_main": {
        "& .container": {
          padding: "50px 32px",
          "& h3": {
            color: secondary,
            fontSize: "32px",
            fontWeight: "bold",
          },
          "& .wrkFlds": {
            marginBottom: "50px",
            "& h3": {
              marginBottom: "20px",
            },
            "& >.grid": {
              "& .paper": {
                padding: "35px 50px",
                position: "relative",
                marginBottom: "25px",
                "&::before": {
                  display: "block",
                  backgroundColor: "rgba(0, 0, 0, 0.36)",
                  content: `''`,
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  right: 0,
                  left: 0,
                },
                "& .text": {
                  position: "relative",
                  color: "#fff",
                  textTransform: "uppercase",

                  "& h2": {
                    fontSize: "32px",
                    fontWeight: "bold",
                  },
                  "& button": {
                    color: "#fff",
                    fontWeight: "bold",
                    border: "2px solid #fff",
                    borderRadius: 0,
                    fontSize: "16px",
                    "&:hover": {
                      backgroundColor: "#ffffff24",
                    },
                  },
                },
                "&:last-child": {
                  marginBottom: 0,
                },
              },
              "& .grid_item": {
                "&:first-child": {
                  "& .paper.first": {
                    "& .text": {
                      maxWidth: "340px",
                      marginTop: "90px",
                      "& h2": {
                        fontSize: "42px",
                      },
                    },
                  },
                  "& .paper.last": {
                    padding: "0",
                    "& .left": {
                      display: "block",
                      backgroundImage: `linear-gradient(to right, rgba(246,248,252,1),rgba(246,248,252,1),rgba(245,247,250,1), rgba(243,239,238,0))`,
                      content: `''`,
                      position: "absolute",
                      top: 0,
                      bottom: 0,
                      right: 0,
                      left: 0,
                    },
                    "& .right": {
                      padding: "82px 0px 93px 50px",
                      "& .text": {
                        maxWidth: "220px",
                        "& h2": {
                          color: secondary,
                          marginBottom: "50px",
                        },
                        "& button": {
                          color: "#000",
                          borderColor: "#000",
                          "&:hover": {
                            backgroundColor: "#0000002e",
                          },
                        },
                      },
                    },
                  },
                },
                "&:last-child": {
                  "& .paper.first": {
                    "& .text": {
                      maxWidth: "260px",
                      marginTop: "310px",
                    },
                  },
                  "& .paper.last": {
                    "& .text": {
                      maxWidth: "200px",
                    },
                    "&:hover": {
                      boxShadow: "2px 10px 35px 0px rgba(0,0,0,0.5)",
                      WebkitBoxShadow: "2px 10px 35px 0px rgba(0,0,0,0.5)",
                      MozBoxShadow: "2px 10px 35px 0px rgba(0,0,0,0.5)",
                    },
                  },
                },
              },
            },
          },
          "& .developers": {
            marginBottom: "55px",
            "& h3": {
              marginBottom: "10px",
            },
            "& .carousel": {
              position: "relative",
              "& .card": {
                margin: "14px 14px 14px 0",
                padding: "10px",
                "& > div": {
                  padding: "10px 0 0 0",
                  textAlign: "left",
                  "& h6": {
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: secondary,
                  },
                  "& p": {
                    marginBottom: "22px",
                  },
                  "& button": {
                    width: "100%",
                    backgroundColor: primary,
                    borderRadius: "0",
                    textTransform: "unset",
                    fontSize: "16px",
                    fontWeight: "bold",
                  },
                },
              },
              "& >div:nth-child(1)": {
                position: "absolute",
                top: "-57px",
                right: "64px",
                left: "unset",

                "& button": {
                  border: "1px solid rgba(112,112,112,0.2)",
                  borderRadius: "4px",
                  width: "36px",
                  height: "36px",
                  color: "#434340",
                },
              },
              "& >div:nth-child(3)": {
                position: "absolute",
                top: "-57px",
                right: "14px",

                "& button": {
                  border: "1px solid rgba(112,112,112,0.2)",
                  borderRadius: "4px",
                  width: "36px",
                  height: "36px",
                  color: "#434340",
                },
              },
            },
          },
          "& .clients": {
            "& >div": {
              "& h3": {
                marginBottom: "55px",
                textAlign: "center",
              },
              "& .carousel": {
                "& >div": {
                  padding: "10px",
                  overflow: "unset",
                  "& >div": {
                    overflow: "hidden",
                    paddingBottom: "140px",
                    "& .paper": {
                      width: "99%",
                      margin: "0 auto",
                      padding: "46px 24px",
                      position: "relative",
                      "& h5": {
                        fontSize: "24px",
                        fontWeight: "bold",
                        color: secondary,
                        marginBottom: "24px",
                      },
                      "& p": {
                        lineHeight: "2em",
                        // padding: "0 70px",
                      },
                    },
                    "& li:not(.selected)": {
                      visibility: "hidden",
                    },
                  },

                  "& button": {
                    width: "80px",
                    height: "80px",
                    position: "absolute",
                    top: "36%",
                    borderRadius: "50%",
                    "&:before": {
                      border: "solid rgba(13,149,255,0.6)",
                      borderWidth: "0 6px 6px 0",
                      display: "inline-block",
                      padding: "15px",
                      top: "27%",

                      position: "absolute",
                    },
                    "&:hover": {
                      backgroundColor: "#0d95ff24",
                    },
                    "&.control-prev": {
                      left: "-10%",
                      "&:before": {
                        left: "28%",
                        transform: "rotate(135deg)",
                      },
                    },
                    "&.control-next": {
                      right: "-10%",
                      "&:before": {
                        right: "28%",
                        transform: "rotate(-45deg)",
                      },
                    },
                  },
                  "& .control-dots": {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    bottom: "-10px",
                    height: "100px",
                  },
                },
              },
            },
          },
        },
      },
      "& .newsletter": {
        backgroundColor: "#E6F1FA",
        "& > div > div": {
          padding: "87px 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& h1": {
            fontSize: "62px",
            fontWeight: "bold",
            marginBottom: "22px",
          },
          "& h3": {
            fontSize: "24px",
            marginBottom: "42px",
            textAlign: "justify",
          },
          "& form": {
            display: "flex",
            width: "100%",
            "& > div": {
              backgroundColor: "#fff",
            },
            "& button": {
              backgroundColor: secondary,
              marginLeft: "-10px",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#191a73",
              },
            },
          },
        },
      },
    },
    wrkFlds: {
      "& .container": {
        padding: "30px 24px",
        "& > div": {
          marginBottom: "50px",
          "& .paper": {
            cursor: "pointer",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            height: "357px",
            position: "relative",
            borderRadius: "0",
            overflow: "hidden",
            "& .transLayer": {
              position: "absolute",
              top: "-100%",
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(119,119,119,0.6)",
              borderRadius: "0",
              transition: "0.8s",
              "& .text": {
                "& h2": {
                  fontSize: "2.6em",
                  fontWeight: "500",
                  color: "#fff",
                  paddingRight: "60%",
                },
                "& button": {
                  fontSize: "1em",
                  fontWeight: "600",
                  color: "#fff",
                  border: "2px solid #fff",
                  borderRadius: "0",
                  "&:hover": {
                    backgroundColor: "#0000007d",
                  },
                },
              },
            },
            "&:hover .transLayer": {
              transition: "0.8s",
              top: "0",
            },
          },
        },
        "& nav": {
          display: "flex",
          justifyContent: "center",
          marginBottom: "10px",
          "& li": {
            marginBottom: "10px",
          },
        },
      },
    },
    developers: {
      "& .container": {
        padding: "46px 40px",
        "& >div:last-child": {
          "& .searchBar": {
            marginBottom: "15px",
            display: "flex",
            "& >div": {
              flexGrow: "1",
            },
            "& >button": {
              backgroundColor: primary,
              marginLeft: "-5px",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: hoverBlue,
              },
            },
          },
          "& .stack": {
            marginBottom: "50px",
            "& .card": {
              boxShadow: "0px 3px 6px 0px rgb(0 ,0, 0 ,0.12)",
              padding: "8px",
              display: "flex",
              "& div:nth-child(1)": {
                width: "150px",
                height: "auto",
                borderRadius: "4px",
                margin: "8px",
              },

              "& div:nth-child(2)": {
                flexGrow: 1,
                paddingRight: "40px",
                "& a": {
                  "& h6": {
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: secondary,
                  },
                  "&:hover": {
                    textDecoration: "underline",
                  },
                },

                "& p": {
                  fontSize: "16px",
                  marginBottom: "10px",
                  height: "45%",
                  "&:last-child": {
                    fontSize: "14px",
                    marginBottom: "0px",
                    "& span": {
                      display: "inline-block",
                      marginRight: "10px",
                    },
                  },
                },
              },

              "& div:nth-child(3)": {
                alignItems: "flex-start",
                "& button": {
                  width: "180px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  padding: "8px 16px",
                  backgroundColor: primary,
                  "&:hover": {
                    backgroundColor: hoverBlue,
                  },
                },
              },
            },
          },
          "& nav": {
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px",
            "& li": {
              marginBottom: "10px",
            },
          },
        },
      },
    },
    contactUs: {
      "& .container": {
        padding: "6% 7%",
        "& .text": {
          marginBottom: "40px",
          "& h3": {
            fontSize: "38px",
            fontWeight: "600",
          },
        },

        "& .paper": {
          "& .form_holder": {
            padding: "7% 0",
            width: "80%",
            margin: "0 auto",
            "& form": {
              display: "flex",
              flexDirection: "column",
              marginBottom: "26px",
              "& button": {
                alignSelf: "flex-end",
                marginTop: "45px",
                fontSize: "18px",
                fontWeight: "600",
                padding: "14px 16px",
                backgroundColor: primary,
                "&:hover": {
                  backgroundColor: hoverBlue,
                },
              },
            },
          },
        },
      },
    },
    about: {
      "& h3": {
        fontSize: "2.6em",
        fontWeight: "600",
        "& span": {
          color: primary,
        },
      },
      "& .about_header": {
        backgroundColor: "#EDF2F4",
        "& .grid": {
          "& >div:first-child": {
            padding: "3.5% 0",
            "& .text": {
              width: "90%",
              margin: "0 auto",
              "& p": {
                textAlign: "justify",
              },
            },
          },
        },
      },
      "& .about_main": {
        "& .container": {
          padding: "9% 35px",
          "& >div:first-child": {
            marginBottom: "90px",
            "& .img_holder": {
              "& img": {
                maxWidth: "100%",
                height: "auto",
              },
            },
            "& .text": {
              marginTop: "15%",
            },
          },
          "& >div:last-child": {
            "& .text": {
              marginBottom: "30px",
            },
            "& .services": {
              "& >div": {
                width: "490px",
                maxWidth: "100%",
                textAlign: "center",
                paddingTop: "22px",
                paddingBottom: "22px",
                borderRadius: "0",
              },
              "& >div:nth-child(1)": {
                backgroundColor: primary,
                color: "#fff",
              },
              "& >div:nth-child(2)": {
                backgroundColor: "#EDF2F4",
                alignSelf: "center",
              },
              "& >div:nth-child(3)": {
                backgroundColor: "#EDF2F4",
                alignSelf: "flex-start",
              },
            },
          },

          "& .text": {
            "& p": {
              fontSize: "18px",
            },
          },
        },
      },
      "& .about_footer": {
        backgroundColor: "#EDF2F4",
        "& .container": {
          padding: "4.5% 5%",
          "& .bttn_holder": {
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            height: "100%",
            "& button": {
              backgroundColor: primary,
              fontSize: "16px",
              fontWeight: "600",
              padding: "14px",
              "&:hover": {
                backgroundColor: hoverBlue,
              },
            },
          },
        },
      },
    },
    dlperDtls: {
      "& .container": {
        padding: "46px",
        "& h3": {
          fontSize: "42px",
          fontWeight: "bold",
          color: secondary,
        },
        "& .left": {
          "& .avatar": {
            width: "100%",
            height: "auto",
            borderRadius: "4px",
            marginBottom: "36px",
          },
          "& .skills": {
            marginBottom: "10px",
            "& .stack": {
              flexWrap: "wrap",
              "& .paper": {
                backgroundColor: "#F9F9F9",
                textTransform: "capitalize",
                padding: "15px 45px",
                marginRight: "15px",
                marginBottom: "15px",
              },
            },
          },
          "& .projects": {
            "& ul": {
              padding: "0",
              "& li": {
                paddingLeft: "0",
                "& span": {
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  backgroundColor: primary,
                  borderRadius: "50%",
                  marginRight: "18px",
                },
                "& a": {
                  color: "#434340",
                },
                "&:first-child": {
                  paddingTop: "0",
                },
                "&:last-child": {
                  paddingBottom: "0",
                },
              },
            },
          },
        },
        "& .right": {
          "& .bio": {
            margin: "30px 0 50px",
            "& .bio_header": {
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "15px",
              "& h3": {
                fontSize: "32px",
              },
              "& .bttns": {
                "& button": {
                  fontSize: "16px",
                  fontWeight: "bold",
                  backgroundColor: primary,
                  "&:hover": {
                    backgroundColor: hoverBlue,
                  },
                  "&:first-child": {
                    marginRight: "16px",
                    borderRadius: "4px",
                    "& svg": {
                      color: "#fff",
                      fontSize: "1.8rem",
                    },
                  },
                  "&:last-child": {
                    width: "200px",
                  },
                },
              },
            },
            "& p": {
              paddingRight: "33%",
              textAlign: "justify",
            },
          },
          "& .experience": {},
        },
      },
    },
    savedDevelopers: {
      "& .container": {
        padding: "46px 4.6%",
        display: "flex",
        flexDirection: "column",
        "& > button": {
          alignSelf: "flex-end",
          marginBottom: "18px",
          "&.select": {
            width: "270px",
            padding: "16px",
            fontSize: "16px",
            fontWeight: "600",
            backgroundColor: primary,

            "& svg": {
              fontSize: "24px",
            },
            "&:hover": {
              backgroundColor: hoverBlue,
            },
          },
          "&.close": {
            borderRadius: "4px",
            color: "#fff",
            backgroundColor: "#ff1f1f",
            "&:hover": {
              backgroundColor: "#e70000",
            },
          },
        },
        "& .stack": {
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginBottom: "14px",
          "& .card": {
            marginBottom: "40px",
            boxShadow: "0px 3px 6px 0px rgb(0 ,0, 0 ,0.12)",
            padding: "8px",
            display: "flex",
            "& div:nth-child(1)": {
              width: "150px",
              height: "auto",
              borderRadius: "4px",
              margin: "8px",
            },

            "& div:nth-child(2)": {
              flexGrow: 1,
              paddingRight: "40px",
              "& h6": {
                fontSize: "16px",
                fontWeight: "bold",
                color: secondary,
              },
              "& p": {
                fontSize: "16px",
                marginBottom: "10px",
                "&:last-child": {
                  fontSize: "14px",
                  marginBottom: "0px",
                  "& span": {
                    display: "inline-block",
                    marginRight: "10px",
                  },
                },
              },
            },

            "& div:nth-child(3)": {
              alignItems: "flex-start",
              "& button": {
                padding: "12px",
                fontWeight: "bold",
                borderRadius: "4px",
                color: "#fff",
                backgroundColor: "#C93333",
                "&:hover": {
                  backgroundColor: "#ff4545",
                },
              },
            },
          },
          "& .selected": {
            border: `1.6px solid ${primary}`,
          },
        },
        "& form": {
          display: "flex",
          flexDirection: "column",
          "& >div": {
            boxShadow: "2px 17px 35px 0px rgba(0,0,0,0.1)",
            WebkitBoxShadow: "2px 17px 35px 0px rgba(0,0,0,0.1)",
            MozBoxShadow: "2px 17px 35px 0px rgba(0,0,0,0.1)",
          },
          "& button": {
            width: "240px",
            marginTop: "40px",
            alignSelf: "flex-end",
            padding: "14px",
            fontSize: "18px",
            fontWeight: "600",
            backgroundColor: primary,
            "&:hover": {
              backgroundColor: hoverBlue,
            },
          },
        },
      },
    },
  })
);

export default useStyles;
