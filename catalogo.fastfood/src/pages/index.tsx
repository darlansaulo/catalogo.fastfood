import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeHero from "../components/HomeHero";
import Wallet from "../components/Wallet";
import { HomeContainer } from "../styles/HomeStyles";

function Home() {
  return (
    <HomeContainer>
        <Header></Header>
        <HomeHero></HomeHero>
        <Wallet></Wallet>
        <Footer></Footer>
    </HomeContainer>
  );
}

export default Home;