import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import calculator from "../images/calculator.jpg";
import todo from "../images/todo.jpg";
import React, { useRef } from "react";

function Projects() {
  return (
    <Stack
      id="projects"
      alignItems="center"
      sx={{
        backgroundColor: "#aeaeae",
      }}
    >
      <Typography m={2}>Here are a couple of web apps I developed.</Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="center"
        alignItems="center"
        spacing={2}
        margin={4}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea
            href="http://calculator-b528f.web.app/"
            target="_blank"
            sx={{
              "&:hover": {
                backgroundColor: "#90caf9",
              },
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image={calculator}
              alt="calculator"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Calculator App
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This calculator app created using React and MUI with JS string
                logic added to each button. It can locally store upto 10
                results.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea
            href="http://todo-5af0b.web.app/"
            target="_blank"
            sx={{
              "&:hover": {
                backgroundColor: "#90caf9",
              },
            }}
          >
            <CardMedia component="img" height="140" image={todo} alt="todo" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Todo App
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A todo app created using React, Redux-toolkit for state
                manangement and MUI. A filter to view completed or incomplete
                tasks is available.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Stack>
    </Stack>
  );
}

export default Projects;
