import styled from "styled-components";
import CAR_ICON from "../../assets/car.svg";
import RETURN_ICON from "../../assets/return.svg";
import { FullWidthButton } from "../../components/FullWidthButton/FullWidthButton";
import { Theme } from "../../styles/Theme";
import { Accordion } from "../Accordion/Accordion";

const StyledDetails = styled.div`
  width: 100%;
  padding-right: 1rem;
`;

const ProductName = styled.h2`
  margin: 0.5rem 0;
  font-weight: 700;
`;

const StyledPrice = styled.p`
  font-size: 1.5rem;
  color: ${Theme.color.price};
  margin-bottom: 2rem;
`;

const StyledExtraInfo = styled.ul`
  margin-top: 2rem;

  li {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    margin-bottom: 1rem;
  }
`;

export function Details({ product }) {
  const accordionContent = [
    {
      title: "Opis produktu",
      content: product.description,
    },
    {
      title: "Wskazówki pielęgnacyjne",
      content: product.maintenanceInfo,
    },
  ];

  return (
    <StyledDetails>
      <h2>{product.brand}</h2>
      <ProductName>{product.productName}</ProductName>
      <StyledPrice>{product.pricePLN} zł</StyledPrice>

      <FullWidthButton isBlack={true}>Dodaj do koszyka</FullWidthButton>

      <StyledExtraInfo>
        <li>
          <img src={CAR_ICON} alt="car icon" />
          Dostawa do 24h
        </li>
        <li>
          <img src={RETURN_ICON} alt="return icon" />
          Zwrot do 100 dni
        </li>
      </StyledExtraInfo>

      <Accordion items={accordionContent} />
    </StyledDetails>
  );
}
