import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Box, List, ListItemText } from "@material-ui/core";
import { Button, ListItemButton } from "@mui/material";
import { deleteById } from "../../services/db";

const LinkList = ({ links, loadLinks }) => {
  const onDelete = async (id) => {
    await deleteById(id);
    await loadLinks();
  };

  return (
    <Box
      marginTop={2}
      alignItems="center"
      justifyContent="center"
      display="flex"
      sx={{ width: "100%" }}
    >
      <List Style="width:100%">
        {links.map(({ url, name, id }, index) => {
          return (
            <Box
              key={index}
              marginTop={2}
              alignItems="center"
              justifyContent="center"
              display="flex"
              sx={{ width: "100%" }}
            >
              <ListItemButton component="a" target="_blank" href={url}>
                <ListItemText primary={name} />
              </ListItemButton>
              <Button
                variant="outlined"
                color="error"
                size="large"
                onClick={() => onDelete(id)}
              >
                <DeleteOutlinedIcon />
              </Button>
            </Box>
          );
        })}
      </List>
    </Box>
  );
};

export default LinkList;
