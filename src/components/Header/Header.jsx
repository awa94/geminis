import { AppBar, Toolbar, Box } from "@material-ui/core";
import { Typography, Button } from "@mui/material";
import { useUAuth } from "../../providers/UserProvider";
import { getUser, login } from "../../services/uauth";
import { useSnackBar } from "../../providers/SnackBarProvider";

const Header = () => {
  const { setSnackBar } = useSnackBar();
  const { user, setUser } = useUAuth();

  const handlerLogin = async () => {
    const response = await login();
    if (!response) {
      setSnackBar({
        message: `Failed to login`,
        color: "error",
        visible: true,
      });
      return;
    }
    const user = await getUser();
    setUser(user);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            List Link App
          </Typography>

          {user ? (
            <Typography variant="h6">{user.sub}</Typography>
          ) : (
            <Button color="inherit" onClick={handlerLogin}>
              {" "}
              login
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
