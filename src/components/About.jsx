import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

function About() {
  const [timeDiff, setExpTimeDiff] = useState("");

  const twoPadStart = (num) => {
    return num.toString().padStart("2", "0");
  };

  useEffect(() => {
    setInterval(() => {
      const { years, months, days, hours, minutes, seconds } =
        calculateTimeDiff();
      let monthsText = `${months.toString()} ${
        months > 1 ? "Months" : "Month"
      }`;
      let daysText = `${days.toString()} ${days > 1 ? "Days" : "Day"}`;
      setExpTimeDiff(
        `${years} Years, ${monthsText}, ${daysText} - ${twoPadStart(
          hours
        )}:${twoPadStart(minutes)}:${twoPadStart(seconds)}`
      );
    }, 1000);
  }, []);

  function calculateTimeDiff() {
    const infyTimeDiff = new Date("05/23/2022") - new Date("03/29/2021");
    const start = new Date("09/07/2022");
    const end = new Date();
    let totalExpTime = infyTimeDiff + end.getTime() - start.getTime();

    const years = Math.floor(totalExpTime / (1000 * 60 * 60 * 24 * 365.25));
    let months =
      Math.floor(totalExpTime / (1000 * 60 * 60 * 24 * 30.4375)) % 12;
    let days = Math.floor(
      Math.floor(totalExpTime / (1000 * 60 * 60 * 24)) % 30.4375
    );
    let hours = Math.floor(Math.floor(totalExpTime / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor(Math.floor(totalExpTime / (1000 * 60)) % 60);
    let seconds = Math.floor(Math.floor(totalExpTime / 1000) % 60);

    return { years, months, days, hours, minutes, seconds };
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
            Hi, I'm a Full Stack Developer with <Box>{timeDiff}</Box> of
            experience in Spring Boot, Sprng MVC, Hibernate and React. Proven
            track record of delivering high-quality software solutions,
            collaborating with teams, and optimizing performance. Strong
            problem-solving skills, good communication, and self-motivated.
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default About;
