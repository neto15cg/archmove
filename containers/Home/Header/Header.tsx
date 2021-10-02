import React from "react";
import Image from "next/image";
import {
  StyledActionsButtonsContainer,
  StyledHeader,
  StyledHeaderContent,
  StyledLogoContainer,
  StyledSectionsButtonsContainer,
} from "./Header.styles";
import { Button } from "../../../components";

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderContent>
        <StyledSectionsButtonsContainer>
          <StyledLogoContainer>
            <Image
              src="/images/icons/logo.svg"
              width={60}
              height={38}
              alt="this is arch move logo"
            />
          </StyledLogoContainer>
          <Button>Design Gallery</Button>
          <Button>List of Architect</Button>
          <Button>Articles</Button>
          <Button>How it Works</Button>
        </StyledSectionsButtonsContainer>
        <StyledActionsButtonsContainer>
          <Button disabledHover padding="0">
            <Image
              src="/images/icons/search.svg"
              width={18}
              height={18}
              alt="this is an icon to search in page"
            />
          </Button>
          <Button margin="0 0 0 24px">Sign In</Button>
          <Button
            backgroundColor="#FD665E"
            titleColor="#fff"
            titleWeight="600"
            disabledHover
            margin="0 0 0 16px"
          >
            Sign Up
          </Button>
        </StyledActionsButtonsContainer>
      </StyledHeaderContent>
    </StyledHeader>
  );
};

export default Header;
