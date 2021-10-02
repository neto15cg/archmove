import styled from "styled-components";

export const StyledGalleryContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 48px;
  margin-bottom: 40px;
`;

export const StyledTitleWithButtonsContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1440px;
  padding: 0 165px;
`;

export const StyledGalleryTitle = styled.h2`
  font-size: 4.8rem;
  max-width: 535px;
  font-weight: 700;
  line-height: 124%;
  letter-spacing: -0.04em;
  color: #000000;
`;
export const StyledGalleryListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 64px;
`;

export const StyledGalleryListContent = styled.div`
  display: flex;
  overflow-x: hidden;
  scroll-behavior: smooth;
  max-width: 1440px;
`;

export const StyledImageContainer = styled.div`
  min-width: 305px;
  min-height: 432px;
  margin: 0 20px;

  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`;

export const StyledGalleryButtonsContainer = styled.div`
  margin-right: 8px;
`;

export const StyledGalleryButton = styled.button<any>`
  cursor: pointer;
  border: none;
  border-radius: 4px;
  padding: 14px;
  background-color: ${(props) => props.backgroundColor || "#fff"};
  min-width: 40px;
  min-height: 40px;
`;
