import Image from 'next/image';
import { Container } from './styles';

function Logo() {
  return (
    <Container>
      <Image 
          src='/assets/img/hamburguer-logo.webp'
          alt='Imagem logo'
          width={200}
          height={200}
      />
    </Container>
  );
};

export default Logo;
