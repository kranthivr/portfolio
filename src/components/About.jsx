import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { xps } from "../data";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

function About() {
  dayjs.extend(duration);
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

    // const years = Math.round(xpTime / (1000 * 60 * 60 * 24 * 365.25));
    // let months = Math.ceil(xpTime / (1000 * 60 * 60 * 24 * 30.4375)) % 12;
    // //let days = Math.floor(Math.floor(xpTime / (1000 * 60 * 60 * 24)) % 30.4375);
    // //let hours = Math.floor(Math.floor(xpTime / (1000 * 60 * 60)) % 24);
    // //let minutes = Math.floor(Math.floor(xpTime / (1000 * 60)) % 60);
    // //let seconds = Math.floor(Math.floor(xpTime / 1000) % 60);

    // let monthsText = `${months.toString()} ${months > 1 ? "Months" : "Month"}`;
    // //let daysText = `${days.toString()} ${days > 1 ? "Days" : "Day"}`;

    // return `${years} Years, ${monthsText}`;

    const years = dayjs.duration(xpTime).years();
    const yearText = `${
      years > 0 ? years + ` ${years > 1 ? "years" : "year"}` : ""
    }`;
    const months = dayjs.duration(xpTime).months();
    const monthText = `${
      months > 0 ? months + ` ${months > 1 ? "months" : "month"}` : ""
    }`;
    const days = dayjs.duration(xpTime).days();
    const dayText = `${days > 0 ? days + ` ${days > 1 ? "days" : "day"}` : ""}`;
    const hours = dayjs.duration(xpTime).hours();
    const hourText = `${
      hours > 0 ? hours + ` ${hours > 1 ? "hours" : "hour"}` : ""
    }`;
    const minutes = dayjs.duration(xpTime).minutes();
    const minuteText = `${
      minutes > 0 ? minutes + ` ${minutes > 1 ? "minutes" : "minute"}` : ""
    }`;
    const seconds = dayjs.duration(xpTime).seconds();
    const secondText = `${
      seconds > 0 ? seconds + ` ${seconds > 1 ? "seconds" : "second"}` : ""
    }`;
    const text = [yearText, monthText].filter(Boolean).join(", ");
    return text;
  }

  return (
    <Box id="about">
      <Grid
        direction="column"
        container
        alignItems="center"
        justifyContent="center"
        marginTop="5rem"
      >
        <Grid item md={4}>
          <Typography
            fontWeight="fontWeightBold"
            sx={{
              textAlign: "center",
              fontSize: { xs: "1rem", md: "1.5rem" },
              fontFamily: "Nunito",
              color: "#424242",
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
              padding: { xs: "2rem", md: "5rem" },
              maxWidth: { md: "50vw" },
            }}
          >
            I'm a Full Stack Developer with <Box>{xpText}</Box> of experience in
            Spring Boot, Spring MVC, Hibernate and React. I have a proven track
            record of delivering high-quality software solutions, optimizing
            performance and collaborating with teams. I possess strong
            problem-solving abilities, good communication skills and thrive on
            self-motivation.
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default About;
