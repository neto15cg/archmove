import Image from "next/image";
import React from "react";
import { Button } from "../../../components";
import OptionCard from "./OptionCard";
import {
  StyledButtonContainer,
  StyledDescriptionsContainer,
  StyledImageContainer,
  StyledOptions,
  StyledOptionsContainer,
  StyledOptionsContent,
  StyledOptionsTitle,
} from "./Options.styles";

const Options = () => {
  return (
    <StyledOptionsContainer>
      <StyledOptionsContent>
        <StyledOptionsTitle>Build your needs with Archmove</StyledOptionsTitle>
        <StyledOptions>
          <StyledImageContainer>
            <Image
              src="/images/illustrations/gallery-5.png"
              width={535}
              height={610}
              alt="this an image with software engineers working their computers. they look happy"
            />
          </StyledImageContainer>
          <StyledDescriptionsContainer>
            <OptionCard
              icon="defense"
              title="100% guaranteed project completion"
              description="Build safe, comfortable and transparent with a project management application with a joint account."
            />
            <OptionCard
              icon="money"
              title="No additional fees"
              description="There are no hidden costs. The value of the offer you get is the value you paid."
            />
            <OptionCard
              icon="house"
              title="Get escort from the Team"
              description="Monitor reports from the Arsitag team who check directly in the field."
            />
            <StyledButtonContainer>
              <Button
                backgroundColor="#FD665E"
                titleColor="#fff"
                titleWeight="600"
                disabledHover
                margin="24px 0 0 0"
              >
                FREE CONSULTATION
              </Button>
            </StyledButtonContainer>
          </StyledDescriptionsContainer>
        </StyledOptions>
      </StyledOptionsContent>
    </StyledOptionsContainer>
  );
};

export default Options;
