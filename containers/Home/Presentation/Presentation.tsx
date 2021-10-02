import Image from "next/image";
import React from "react";
import { Button } from "../../../components";
import {
  StyledContent,
  StyledDescription,
  StyledDescriptionContainer,
  StyledHightlight,
  StyledImageContainer,
  StyledPresentationContainer,
  StyledPresentationContent,
  StyledTitle,
  StyledTitleContainer,
  StyledTitleContent,
} from "./Presentation.styles";

const Presentation = () => {
  return (
    <StyledPresentationContainer>
      <StyledPresentationContent>
        <StyledTitleContainer>
          <StyledTitleContent>
            <StyledTitle>
              Build Your Dream <StyledHightlight>House</StyledHightlight>
            </StyledTitle>
          </StyledTitleContent>
        </StyledTitleContainer>
        <StyledContent>
          <StyledDescriptionContainer>
            <StyledDescription>
              The first and most trusted marketplace of design & build house in
              The World. 100% guaranteed Build safe, comfortable and transparent
              with a project management for the best result
            </StyledDescription>
            <Button
              backgroundColor="#FD665E"
              titleColor="#fff"
              titleWeight="600"
              disabledHover
            >
              Free Consultation
            </Button>
          </StyledDescriptionContainer>
          <StyledImageContainer>
            <Image
              src="/images/illustrations/office.png"
              width={768}
              height={480}
              alt="this is an illustration of an office"
            />
          </StyledImageContainer>
        </StyledContent>
      </StyledPresentationContent>
    </StyledPresentationContainer>
  );
};

export default Presentation;
