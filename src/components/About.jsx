import { Box, Grid, Typography } from "@mui/material";
import React from "react";

function About() {
  return (
    <Box id="about">
      <Grid
        container
        height="30rem"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item md={4}>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: { xs: "1rem", md: "1.5rem" },
              fontFamily: "Nunito",
              color: "#424242",
              backgroundColor: "#ffffff",
              mx: "40px",
              zIndex: 1,
            }}
          >
            About Me
          </Typography>
        </Grid>
        <Grid item md={8}>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: { xs: "1rem", md: "1.5rem" },
              fontFamily: "Nunito",
              color: "#424242",
              padding: "5rem",
            }}
          >
            I used React.js and Material UI to design these web pages. With
            sound knowledge in JavaScript, HTML5 and CSS, I can develop
            responsive, creative and interactive web designs.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default About;
