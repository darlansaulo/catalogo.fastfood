import Logo from './Logo';
import NavBar from './NavBar';
import { Container } from './styles';

function Header() {
  return (
    <Container>
      <Logo></Logo>
      <NavBar children></NavBar>
    </Container>
  );
};

export default Header;
