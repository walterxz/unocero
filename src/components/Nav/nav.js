import React, { useState } from "react";
import { Container, List, Logo } from "./styles";
import Link from "next/link";

import {
  faCloudDownloadAlt,
  faTerminal,
} from "@fortawesome/free-solid-svg-icons";
import { fab, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  // Declara una nueva variable de estado, la cual llamaremos “count”

  return (
    <Container>
      <Logo>
        <FontAwesomeIcon icon={faTerminal}></FontAwesomeIcon>
      </Logo>
      <Link href="/">
        <List>Home</List>
      </Link>
      <Link href="/blog">
        <List>Blog</List>
      </Link>
      <Link href="/about">
        <List>About</List>
      </Link>
      <Link href="/cv">
        <List>Portfolio</List>
      </Link>
    </Container>
  );
};
export default Nav;
