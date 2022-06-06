import ItemNavBar from '../NavBarItem';
import { Container } from './styles';

function NavBarComponent() {
  return (
    <Container>
      <ItemNavBar title='Home'></ItemNavBar>
      <ItemNavBar title='Contato'></ItemNavBar>
      <ItemNavBar title='Sobre'></ItemNavBar>
      <ItemNavBar title='Menu'></ItemNavBar>
    </Container>
  );
};

export default NavBarComponent;
