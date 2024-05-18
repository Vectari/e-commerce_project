import styled from "styled-components";
import { FlexContainer } from "../FlexContainer/FlexContainer";
import { Theme } from "../../styles/Theme";
import { useState } from "react";

const StyledThumbnails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  img {
    width: 85px;
    height: 120px;
    cursor: pointer;
  }

  img.active {
    border: 2px solid ${Theme.color["text-default"]};
  }
`;

const StyledMainPhoto = styled.img`
  width: 500px;
  height: 700px;
`;

export function Photos({ product }) {
  const [currentPhoto, setCurrentPhoto] = useState(product.photos[0]);

  return (
    <FlexContainer>
      <StyledThumbnails>
        {product &&
          product.photos.map((photo) => {
            return (
              <img
                className={currentPhoto === photo ? "active" : ""}
                onClick={() => {
                  setCurrentPhoto(photo);
                }}
                key={photo}
                src={photo}
              />
            );
          })}
      </StyledThumbnails>
      <StyledMainPhoto src={currentPhoto} alt="product image" />
    </FlexContainer>
  );
}

// TEST
