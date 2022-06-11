import { Container } from "./styles";

interface TitleHomeHeroProps {
  title: string;
}

function TitleHomeHero({ title }: TitleHomeHeroProps) {
  return (
    <Container>
      <h1>TitleHomeHero</h1>
      {title}
    </Container>
  );
}

export default TitleHomeHero;
