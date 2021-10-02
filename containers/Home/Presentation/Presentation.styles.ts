import styled from "styled-components";

export const StyledPresentationContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 48px;
`;
export const StyledPresentationContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  padding: 0 165px;
`;

export const StyledTitleContainer = styled.div`
  width: 100%;
  padding-bottom: 48px;
`;

export const StyledTitleContent = styled.div`
  max-width: 870px;
  padding-bottom: 48px;
`;
export const StyledTitle = styled.h1`
  font-weight: 700;
  letter-spacing: 4%;
  line-height: 11.2rem;
  font-size: 11.2rem;
`;

export const StyledHightlight = styled.span`
  color: #fd665e;
`;

export const StyledContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 48px;
  width: 100%;
`;

export const StyledDescriptionContainer = styled.div`
  max-width: 290px;
  margin: 8px 56px 0 0;
`;

export const StyledDescription = styled.p`
  margin-bottom: 48px;
  font-size: 16px;
  line-height: 160%;
  letter-spacing: 0.01em;
  color: #000000;
`;

export const StyledImageContainer = styled.div`
  min-width: 768px;
  min-height: 480px;
`;
