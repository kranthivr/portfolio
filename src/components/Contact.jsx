import {
  Box,
  FormControl,
  TextField,
  InputLabel,
  TextareaAutosize,
  Stack,
  Grid,
  Link,
  Button,
  Snackbar,
  Alert,
  Typography,
  IconButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Contact() {
  const [open, setOpen] = React.useState(false);
  const form = useRef();

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_69689cg",
        "template_886ocgo",
        form.current,
        "OP_pbkl5Yjz0lpuqs"
      )
      .then(
        (result) => {
          handleClick();
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <Grid container id="contact">
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          You sent an Email to Kranthi
        </Alert>
      </Snackbar>
      <Grid
        item
        xs={12}
        md={6}
        mt={{ xs: 2, md: 0 }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Stack>
          <Typography
            textAlign="center"
            fontSize={60}
            fontStyle="Bold"
            fontFamily="Roboto"
            sx={{
              backgroundColor: "#e0e0e0",
              borderRadius: "1rem",
              px: "1rem",
            }}
          >
            Contact
          </Typography>
          <Box display="flex" justifyContent="center">
            <IconButton
              href="https://www.linkedin.com/in/kranthi-vr-753646193/"
              target="_blank"
            >
              <LinkedInIcon color="info" />
            </IconButton>
          </Box>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6} padding={{ xs: 4, md: 4 }}>
        <Typography textAlign="center" fontFamily="Roboto">
          Contact Me
        </Typography>
        <form ref={form} onSubmit={sendEmail}>
          <Stack spacing={2} margin={2}>
            <FormControl required>
              <TextField
                type="text"
                id="name"
                name="name"
                variant="outlined"
                label="Name"
                required
              />
            </FormControl>
            <FormControl>
              <TextField
                type="email"
                id="email"
                name="email"
                variant="outlined"
                label="Email"
                required
              />
            </FormControl>
            <FormControl>
              <TextField
                type="text"
                id="subject"
                name="subject"
                variant="outlined"
                label="Subject"
                required
              />
            </FormControl>
            <TextField
              label="Message"
              name="message"
              multiline
              minRows={10}
              maxRows={20}
              required
            />
            <Button
              size="small"
              variant="contained"
              type="submit"
              sx={{ width: "10rem", alignSelf: "center" }}
            >
              Send Mail <SendIcon sx={{ paddingLeft: 2 }} />
            </Button>
          </Stack>
        </form>
      </Grid>
    </Grid>
  );
}

export default Contact;
