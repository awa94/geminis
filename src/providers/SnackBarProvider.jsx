import { createContext, useContext, useState } from "react";
import { Alert, Snackbar } from "@mui/material";

const defaultState = {
  message: "You look pretty today!",
  color: "info",
  visible: false,
};

const SnackBarContext = createContext(null);

const SnackBarProvider = ({ children }) => {
  const [state, setState] = useState(defaultState);

  return (
    <SnackBarContext.Provider value={{ state, setState }}>
      {children}
      <Snackbar
        open={state.visible}
        autoHideDuration={3000}
        onClose={() => setState({ visible: false })}
      >
        <Alert severity={state.color}>{state.message}</Alert>
      </Snackbar>
    </SnackBarContext.Provider>
  );
};

export const useSnackBar = () => {
  const context = useContext(SnackBarContext);
  if (!context) throw new Error("SnackBar context is wrong!");
  const { state, setState } = context;
  const setSnackBar = ({ message, color, visible }) => {
    setState({ ...state, message, color, visible });
  };
  return { state, setSnackBar };
};

export default SnackBarProvider;
