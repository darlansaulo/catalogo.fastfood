import CardComponent from "./CardComponent";

import { Container } from "./styles";
import SubMenu from "./SubMenu";
import TitleHomeHero from "./TitleHomeHero";

function HomeHero() {
  return (
    <Container>
      <TitleHomeHero title=""></TitleHomeHero>
      <CardComponent children=""></CardComponent>
      <SubMenu title=""></SubMenu>
    </Container>
  );
}

export default HomeHero;
