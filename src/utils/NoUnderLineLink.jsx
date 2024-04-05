import { Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const NoUnderLineLink = ({ path, children }) => {
  return (
    <Button
      component={RouterLink}
      to={path}
      underline="hover"
      sx={{
        my: 2,
        color: "#000000",
        "&:hover": {
          backgroundColor: "#8d8d8d",
        },
        margin: "10px",
      }}
    >
      {children}
    </Button>
  );
};

export default NoUnderLineLink;
