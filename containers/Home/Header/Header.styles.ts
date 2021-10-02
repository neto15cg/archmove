import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0%;
  background-color: #fff;
  z-index: 1;
`;

export const StyledHeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  padding: 24px 50px;
`;

export const StyledSectionsButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledActionsButtonsContainer = styled.div`
  display: flex;
`;

export const StyledLogoContainer = styled.div`
  margin-right: 37px;
  width: 60px;
  height: 38px;
`;
