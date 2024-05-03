import CAR_ICON from "../../assets/car.svg";
import styled from "styled-components";
import { FullWidthButton } from "../../components/FullWidthButton/FullWidthButton";
import { Theme } from "../../styles/Theme";

const StyledCartSummary = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 1rem;
  margin-top: 1rem;
  gap: 1rem;
  width: 28rem;

  h2 {
    border-bottom: 1px solid ${Theme.color["text-grey"]};
    padding-bottom: 1rem;
  }
`;

const StyledCartRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledCartSummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
`;

const StyledDeliveryInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  font-weight: 700;
  background-color: ${Theme.color.grey};
`;

export function CartSummary({ products }) {
  const deliverCost = 49;
  const minSumForFreeDelivery = 500;

  let sum = 0;
  products.forEach((product) => {
    sum += product.pricePLN;
  });

  const totalCost = sum > minSumForFreeDelivery ? sum : sum + deliverCost;

  return (
    <StyledCartSummary>
      <h2>Podsumowanie</h2>
      <StyledCartRow>
        <p>Wartość produktów:</p>
        <p>{sum} zł</p>
      </StyledCartRow>
      <StyledCartRow>
        <p>Koszyk dostawy:</p>
        <p>{sum > minSumForFreeDelivery ? 0 : deliverCost} zł</p>
      </StyledCartRow>
      <StyledCartSummaryRow>
        <p>Do zapłaty:</p>
        <p>{totalCost}zł</p>
      </StyledCartSummaryRow>
      <FullWidthButton isBlack={true}>Do Kasy</FullWidthButton>
      <StyledDeliveryInfo>
        <img src={CAR_ICON} alt="car icon image" />
        <p>Darmowa dostawa od {minSumForFreeDelivery} zł</p>
      </StyledDeliveryInfo>
    </StyledCartSummary>
  );
}
