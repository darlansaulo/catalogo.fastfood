import { Container } from './styles';

interface SubMenuProps {
  title: string;
}

function SubMenu({ title }: SubMenuProps) {
  return (
    <Container>
      <h1>SubMenu</h1>
      {title}
    </Container>
  );
};

export default SubMenu;
