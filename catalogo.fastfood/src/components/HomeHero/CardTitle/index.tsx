import { Container } from './styles';

interface CardTitleProps {
  descricao: string;
}

function CardTitle({ descricao }: CardTitleProps) {
  return (
    <Container>
      {descricao}
    </Container>
  );
};

export default CardTitle;
