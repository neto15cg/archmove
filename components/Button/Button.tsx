import React from "react";
import { StyledButton, StyledButtonTitle } from "./Button.styles";

const Button = ({
  children,
  backgroundColor,
  titleColor,
  titleWeight,
  disabledHover,
  margin,
  padding,
  ...otherProps
}: any) => {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      disabledHover={disabledHover}
      margin={margin}
      padding={padding}
      {...otherProps}
    >
      <StyledButtonTitle titleColor={titleColor} titleWeight={titleWeight}>
        {children}
      </StyledButtonTitle>
    </StyledButton>
  );
};

export default Button;
