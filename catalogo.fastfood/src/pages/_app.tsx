import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyles from '../styles/global';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles/>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
