import { useState } from "react";
import { Requests } from "./Requests/Requests";
import { PATH } from "./Requests/path";
import { Card } from "./Components/Card/Card";
import { CardSection } from "./Components/Sections/CardSection";
import GlobalStyle from "./globalStyles";
import { Header } from "./Components/Header/Header";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <CardSection />

    </>
  );
}

export default App;
