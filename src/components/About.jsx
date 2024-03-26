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
            Experienced Full Stack Developer with above 2.5 years of expertise
            in Java Spring MVC and React, proficient in backend development,
            RESTful APIs, and frontend development. Skilled in HTML, CSS,
            JavaScript, and ORM frameworks. Proven track record of delivering
            high-quality software solutions, collaborating with teams, and
            optimizing performance. Strong problem-solving skills, good
            communication, and self-motivated.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default About;
