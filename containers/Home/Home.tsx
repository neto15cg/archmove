import React from "react";
import { Footer } from "../../components";
import Gallery from "./Gallery/Gallery";
import Header from "./Header/Header";
import {
  StyledHomeContainer,
  StyledHomeMain,
  StyledHomeMainContent,
} from "./Home.styles";
import Options from "./Options/Options";
import Presentation from "./Presentation/Presentation";

const HomeContainer = () => {
  return (
    <StyledHomeContainer>
      <StyledHomeMainContent>
        <StyledHomeMain>
          <Header />
          <Presentation />
          <Gallery />
          <Options />
        </StyledHomeMain>
        <Footer></Footer>
      </StyledHomeMainContent>
    </StyledHomeContainer>
  );
};

export default HomeContainer;
