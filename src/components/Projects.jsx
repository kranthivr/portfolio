import GitHubIcon from "@mui/icons-material/GitHub";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { projects } from "src/data";

function Projects() {
  return (
    <Stack
      id="projects"
      alignItems="center"
      sx={{
        backgroundColor: "#aeaeae",
      }}
    >
      <Typography m={2}>
        Here are a some of the web apps I have developed.
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="center"
        alignItems="center"
        spacing={2}
        margin={4}
      >
        {projects.map((project) => (
          <Card sx={{ maxWidth: 345 }} key={project.name}>
            <CardMedia
              component="img"
              height="140"
              src={project.picturePath}
              alt={project.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {project.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.description}
              </Typography>
            </CardContent>
            <CardActions sx={{ display: "flex" }}>
              <Button
                size="small"
                href={project.link}
                target="_blank"
                sx={{
                  ":hover": { backgroundColor: "#bbdefb" },
                }}
              >
                Visit
              </Button>
              <IconButton
                href={project.gitrepo}
                target="_blank"
                sx={{
                  ":hover": { backgroundColor: "#81c1f5" },
                }}
              >
                <GitHubIcon fontSize="small" color="primary" />
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </Stack>
    </Stack>
  );
}

export default Projects;
