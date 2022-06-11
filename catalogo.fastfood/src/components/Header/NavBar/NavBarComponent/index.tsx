import ItemNavBar from '../NavBarItem';
import { Container } from './styles';

function NavBarComponent() {
  return (
    <Container>
      <ItemNavBar title='Menu'></ItemNavBar>
      <ItemNavBar title='Contato'></ItemNavBar>
      <ItemNavBar title='Sobre'></ItemNavBar>
      <ItemNavBar title='Info'></ItemNavBar>
    </Container>
  );
};

export default NavBarComponent;
