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
    <Stack id="projects" alignItems="center">
      <Box m={2} fontWeight="fontWeightBold">
        Here are a some of my web apps developed with React.js and Next.js.
      </Box>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="center"
        alignItems="center"
        spacing={2}
        margin={4}
      >
        {projects.map((project) => (
          <Card
            sx={{
              maxWidth: 345,
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
              ":hover": {
                cursor: "pointer",
                boxShadow:
                  "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
              },
            }}
            key={project.name}
          >
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
