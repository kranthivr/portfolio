import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { xps } from "../data";

function About() {
  const [xpText, setXpText] = useState(getXpTimeDuration());

  const twoPadStart = (num) => {
    return num.toString().padStart(2, "0");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setXpText(getXpTimeDuration());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function getXpTimeDuration() {
    let xpTime = xps.reduce((accumulator, item) => {
      let startDate = new Date(item.startDate);
      let endDate = item.endDate
        ? new Date(item.endDate).setHours(24)
        : new Date();
      return accumulator + (endDate - startDate);
    }, 0);

    const years = Math.floor(xpTime / (1000 * 60 * 60 * 24 * 365.25));
    let months = Math.floor(xpTime / (1000 * 60 * 60 * 24 * 30.4375)) % 12;
    let days = Math.floor(Math.floor(xpTime / (1000 * 60 * 60 * 24)) % 30.4375);
    let hours = Math.floor(Math.floor(xpTime / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor(Math.floor(xpTime / (1000 * 60)) % 60);
    let seconds = Math.floor(Math.floor(xpTime / 1000) % 60);

    let monthsText = `${months.toString()} ${months > 1 ? "Months" : "Month"}`;
    let daysText = `${days.toString()} ${days > 1 ? "Days" : "Day"}`;
    return `${years} Years, ${monthsText}, ${daysText}`;
  }

  return (
    <Box id="about">
      <Grid container alignItems="center" justifyContent="center">
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
          <Box
            sx={{
              textAlign: "center",
              fontSize: { xs: "1rem", md: "1.5rem" },
              fontFamily: "Nunito",
              color: "#424242",
              padding: "5rem",
            }}
          >
            I'm a Full Stack Developer with <Box>{xpText}</Box> of experience in
            Spring Boot, Spring MVC, Hibernate and React. I have a proven track
            record of delivering high-quality software solutions, optimizing
            performance and collaborating with teams. I possess strong
            problem-solving abilities, excel in communication and thrive on
            self-motivation.
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default About;
