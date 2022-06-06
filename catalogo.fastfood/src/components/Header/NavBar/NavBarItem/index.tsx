import { Container } from './styles';

interface ItemTitleProps {
  title: string;
}

function NavBarItem({ title }: ItemTitleProps) {
  return (
    <Container>
      {title}
    </Container>
  );
};

export default NavBarItem;
