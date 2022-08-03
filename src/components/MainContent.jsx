import { Box, Container, createTheme, Stack, Typography } from "@mui/material";
import hbg from "../images/hero-background.jpg";
import hbgxs from "../images/hbgxs.jpg";
import profilePic from "../images/profilePic.jpg";
import React from "react";

function MainContent() {
  return (
    <Stack
      mt="60px"
      direction={{ xs: "column", md: "row-reverse" }}
      spacing={4}
      sx={{
        backgroundImage: `url(${hbg})`,
        backgroundSize: "cover",
        height: "30rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 5,
      }}
    >
      <Box
        component="img"
        src={profilePic}
        sx={{
          width: { xs: "10rem", md: "15rem" },
          height: { xs: "10rem", md: "15rem" },
          borderRadius: "50%",
          zIndex: 5,
        }}
      />

      <Typography
        fontWeight="fontWeightBold"
        sx={{
          fontSize: { xs: "2rem", md: "2rem" },
          fontFamily: "Nunito",
          color: "#424242",
          zIndex: 5,
        }}
      >
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
        >
          <path
            fill="#020202"
            d="m66.666 36.67-4.713 4.713 8.619 8.62-8.622 8.62 4.713 4.713L80 50.003zM33.333 63.336l4.714-4.713-8.62-8.62 8.623-8.62-4.714-4.713L20 50.003z"
          />
          <path
            fill="#00B8D4"
            d="m38.973 78.275 15.612-58.27 6.44 1.725L45.412 80z"
          />
        </svg>
        Hi, I'm Kranthi <br /> Front End Developer
      </Typography>
    </Stack>
  );
}

export default MainContent;
