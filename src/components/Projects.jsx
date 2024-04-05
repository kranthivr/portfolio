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
  Box,
  Alert,
} from "@mui/material";
import React from "react";
import { projects } from "../data";

function Projects() {
  return (
    <Stack
      id="projects"
      alignItems="center"
      sx={{
        backgroundColor: "#aeaeae",
        height: "100vh",
      }}
    >
      <Typography m={2} fontWeight="fontWeightBold">
        Here are a some of my React web apps.
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
              <Stack gap="2">
                <Box>
                  <Button
                    size="small"
                    href={project.link}
                    target="_blank"
                    sx={{
                      ":hover": { backgroundColor: "#bbdefb" },
                    }}
                    disabled={!project.link}
                  >
                    Visit
                  </Button>
                  <IconButton
                    href={project.gitrepo}
                    target="_blank"
                    sx={{
                      ":hover": { backgroundColor: "#81c1f5" },
                    }}
                    disabled={!project.gitrepo}
                  >
                    <GitHubIcon
                      fontSize="small"
                      color={project.gitrepo ? "primary" : "disabled"}
                    />
                  </IconButton>
                </Box>
                <Box>
                  <Alert
                    sx={{ padding: "0 5px" }}
                    severity={project.health ? "success" : "error"}
                  >
                    {project.status}
                  </Alert>
                </Box>
              </Stack>
            </CardActions>
          </Card>
        ))}
      </Stack>
    </Stack>
  );
}

export default Projects;
