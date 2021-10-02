import Image from "next/image";
import React, { useRef } from "react";
import {
  StyledGalleryButton,
  StyledGalleryButtonsContainer,
  StyledGalleryContainer,
  StyledGalleryListContainer,
  StyledGalleryListContent,
  StyledGalleryTitle,
  StyledImageContainer,
  StyledTitleWithButtonsContent,
} from "./Gallery.styles";

const Images = [
  {
    id: 1,
    color: "red",
    name: "gallery-01",
  },
  {
    id: 2,
    color: "pink",
    name: "gallery-02",
  },
  {
    id: 3,
    color: "green",
    name: "gallery-03",
  },
  {
    id: 4,
    color: "grey",
    name: "gallery-04",
  },
  {
    id: 5,
    color: "grey",
    name: "gallery-04",
  },
  {
    id: 6,
    color: "grey",
    name: "gallery-04",
  },
];

const Gallery = () => {
  const refGallery = useRef(null);

  const handleScrollRight = () => {
    if (refGallery?.current) {
      (refGallery.current as any).scrollLeft += 345;
    }
  };

  const handleScrollLeft = () => {
    if (refGallery?.current) {
      (refGallery.current as any).scrollLeft -= 345;
    }
  };

  return (
    <>
      <StyledGalleryContainer>
        <StyledTitleWithButtonsContent>
          <StyledGalleryTitle>
            Build professional valuable room for you
          </StyledGalleryTitle>
          <StyledGalleryButtonsContainer>
            <StyledGalleryButton onClick={handleScrollLeft}>
              <Image
                src={`/images/icons/arrow-left.svg`}
                width={20}
                height={20}
                alt="this is an icon to scroll left"
              />
            </StyledGalleryButton>
            <StyledGalleryButton
              onClick={handleScrollRight}
              backgroundColor={"rgba(#000, 0.03)"}
            >
              <Image
                src={`/images/icons/arrow-right.svg`}
                width={20}
                height={20}
                alt="this is an icon to scroll right"
              />
            </StyledGalleryButton>
          </StyledGalleryButtonsContainer>
        </StyledTitleWithButtonsContent>
      </StyledGalleryContainer>
      <StyledGalleryListContainer>
        <StyledGalleryListContent ref={refGallery}>
          {Images.map((item) => (
            <StyledImageContainer key={item.id} color={item.color}>
              <Image
                src={`/images/illustrations/${item.name}.png`}
                width={305}
                height={432}
                alt="this is an illustration of an office"
              />
            </StyledImageContainer>
          ))}
        </StyledGalleryListContent>
      </StyledGalleryListContainer>
    </>
  );
};

export default Gallery;
