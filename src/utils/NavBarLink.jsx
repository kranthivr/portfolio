import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const NavBarLink = ({ path, children, handleCloseNavMenu }) => {
  return (
    <Button
      component={NavLink}
      to={path}
      underline="hover"
      onClick={handleCloseNavMenu}
      sx={{
        my: 2,
        color: "#000000",
        "&:hover": {
          color: "white",
          backgroundColor: "red",
        },
        margin: "10px",
      }}
    >
      {children}
    </Button>
  );
};

export default NavBarLink;
