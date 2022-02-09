import { useState } from "react";
import { Box } from "@material-ui/core";
import { TextField, Button, InputAdornment } from "@mui/material";
import { addLink } from "../../services/db";
import { useSnackBar } from "../../providers/SnackBarProvider";

const LinkForm = ({ loadLinks }) => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const { setSnackBar } = useSnackBar();

  const onSubmit = async () => {
    const id = await addLink(name, "https://" + url);

    if (!id) {
      setSnackBar({
        message: `Failed to add ${name}`,
        color: "error",
        visible: true,
      });
      return;
    }

    await loadLinks();

    setSnackBar({
      message: `Link ${name} successfully added. Got id ${id}`,
      color: "success",
      visible: true,
    });
    setName("");
    setUrl("");
  };

  return (
    <Box
      marginTop={5}
      alignItems="center"
      justifyContent="center"
      display="flex"
    >
      <TextField
        id="name"
        label="Name"
        variant="outlined"
        sx={{
          mr: 1,
        }}
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      https://
      <TextField
        id="url"
        label="Url"
        variant="outlined"
        sx={{
          mr: 3,
        }}
        value={url}
        onChange={(e) => {
          setUrl(e.target.value);
        }}
        startAdornment={
          <InputAdornment position="start">https://</InputAdornment>
        }
      />
      <Button variant="contained" size="large" onClick={onSubmit}>
        Add
      </Button>
    </Box>
  );
};

export default LinkForm;
