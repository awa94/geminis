import { useState, useEffect } from "react";
import { getLinks } from "../../services/db";
import { Container } from "@mui/material";

import LinkForm from "../LinkForm";
import LinkList from "../LinkList";

const LinksContainer = () => {
  const [links, setLinks] = useState([]);

  const loadLinks = async () => {
    const loadedLinks = await getLinks();
    setLinks(loadedLinks);
  };

  useEffect(() => {
    loadLinks();
  }, []);

  return (
    <Container maxWidth="sm">
      <LinkForm loadLinks={loadLinks} />
      <LinkList links={links} loadLinks={loadLinks} />
    </Container>
  );
};

export default LinksContainer;
