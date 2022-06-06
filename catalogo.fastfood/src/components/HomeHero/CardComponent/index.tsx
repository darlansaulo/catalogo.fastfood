import { ReactNode } from 'react';

import { Container } from './styles';

interface CardComponentProps {
  children: ReactNode;
}

function CardComponent({ children }: CardComponentProps) {
  return (
    <Container>
      <h1>CardComponent</h1>
      {children}
    </Container>
  );
};

export default CardComponent;
