import { ReactNode } from "react";

import { Container } from "./styles";

interface NavBarProps {
  children: ReactNode;
}

function NavBar({ children }: NavBarProps) {
  return (
    <Container>
      <h1>NavBar</h1>
      {children}
    </Container>
  );
}

export default NavBar;
