import { Box, Stack, Typography } from "@mui/material";
import hbg from "/images/hero-background.jpg";
import profilePic from "/images/profilePic.jpg";
import ParticlesBG from "./ParticlesBG";

function Hero() {
  return (
    <>
      <ParticlesBG />
      <Stack
        id="home"
        mt="60px"
        direction={{ xs: "column", md: "row-reverse" }}
        sx={{
          backgroundImage: `url(${hbg})`,
          backgroundSize: "cover",
          height: "calc(100vh - 60px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 5,
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          fontWeight="fontWeightBold"
          gap={2}
          sx={{
            fontSize: { xs: "2rem", md: "2rem" },
            fontFamily: "Nunito",
            color: "#424242",
            backgroundColor: "white",
            padding: "1rem 1rem",
            height: { xs: "10rem", md: "15rem" },
            zIndex: 5,
            borderRadius: "1rem",
          }}
        >
          <Box>
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
            Hi, I'm Kranthi <br /> Full Stack Developer
          </Box>
          <Box
            component="img"
            src={profilePic}
            sx={{
              width: { xs: "10rem", md: "15rem" },
              height: { xs: "10rem", md: "15rem" },
              borderRadius: "50%",
              border: "solid 2px black",
              zIndex: 5,
            }}
          />
        </Stack>
      </Stack>
    </>
  );
}

export default Hero;
