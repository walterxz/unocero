import React, { useState } from "react";
import { Container, List, Logo } from "./styles";
import Link from "next/link";

const Nav = () => {
  // Declara una nueva variable de estado, la cual llamaremos “count”

  return (
    <Container>
      <Logo />
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
