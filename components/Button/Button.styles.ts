import styled, { css } from "styled-components";

export const StyledButtonTitle = styled.div<any>`
  position: relative;
  font-size: 1.4rem;
  color: ${(props: any) => props.titleColor || "#585858"};
  font-weight: ${(props) => props.titleWeight || 400};

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    border-bottom: 1px solid ${(props: any) => props.titleColor || "#585858"};
    width: 0%;
    transition: width 150ms linear;
  }
`;

export const StyledButton = styled.button<any>`
  position: relative;
  cursor: pointer;
  background-color: ${(props: any) => props.backgroundColor || "#fff"};
  font-style: normal;
  font-weight: normal;
  border: none;
  border-radius: 0;
  white-space: nowrap;
  text-decoration: none;
  padding: 24px 24px;
  border-radius: 4px;

  ${(props) =>
    props.margin &&
    css`
      margin: ${props.margin};
    `}

  ${(props) =>
    props.padding &&
    css`
      padding: ${props.padding};
    `}

  ${(props) =>
    !props.disabledHover &&
    css`
      &:hover {
        ${StyledButtonTitle} {
          &:after {
            content: "";
            width: 100%;
          }
        }
      }
    `}
`;
