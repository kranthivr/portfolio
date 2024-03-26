import emailjs from "@emailjs/browser";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendIcon from "@mui/icons-material/Send";
import {
  Alert,
  Button,
  FormControl,
  Grid,
  IconButton,
  Snackbar,
  Stack,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import React, { useRef, useState } from "react";

function Contact() {
  const [open, setOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const formRef = useRef();

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  async function sendEmail(e) {
    e.preventDefault();

    setSending(true);
    await emailjs
      .sendForm(
        "service_f059lsw",
        "template_886ocgo",
        formRef.current,
        "OP_pbkl5Yjz0lpuqs"
      )
      .then(
        (result) => {
          handleClick();
          e.target.reset();
        },
        (error) => {
          alert("Some error occured!");
          console.log(error.text);
        }
      )
      .finally(() => {
        setSending(false);
      });
  }
  return (
    <Grid container id="contact">
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          You sent an Email to Kranthi
        </Alert>
      </Snackbar>
      {/* <Grid
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
      </Grid> */}
      <Grid item xs={12} md={6} padding={{ xs: 4, md: 4 }} marginX="auto">
        <Stack direction="row" justifyContent="center" marginBottom="2">
          <IconButton
            href="https://www.linkedin.com/in/kranthi-vr-753646193/"
            target="_blank"
          >
            <LinkedInIcon color="info" />
          </IconButton>
        </Stack>
        <Typography textAlign="center">Email Me</Typography>
        <form ref={formRef} onSubmit={sendEmail} autoComplete="off">
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
              disabled={sending}
            >
              {sending && <CircularProgress size="1rem" />}
              Send Mail <SendIcon sx={{ paddingLeft: 2 }} />
            </Button>
          </Stack>
        </form>
      </Grid>
    </Grid>
  );
}

export default Contact;
