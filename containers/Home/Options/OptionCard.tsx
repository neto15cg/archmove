import React from "react";
import Image from "next/image";
import {
  StyledOptionCardTitle,
  StyledOptionCardContainer,
  StyledOptionCardDescription,
  StyledOptionCardContent,
  StyledOptionCardIconContainer,
} from "./Options.styles";

const OptionCard = ({ icon, title, description }: any) => {
  return (
    <StyledOptionCardContainer>
      <StyledOptionCardIconContainer>
        <Image
          src={`/images/icons/${icon}.svg`}
          width={48}
          height={55}
          alt="this is an icon"
        />
      </StyledOptionCardIconContainer>
      <StyledOptionCardContent>
        <StyledOptionCardTitle>{title}</StyledOptionCardTitle>
        <StyledOptionCardDescription>{description}</StyledOptionCardDescription>
      </StyledOptionCardContent>
    </StyledOptionCardContainer>
  );
};

export default OptionCard;
