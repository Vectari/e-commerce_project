import styled from "styled-components";
import { CURRENCIES } from "../../constants/currencies";

const StyledSelect = styled.select`
  padding: 0.5rem;
`;

export function CurrencySelector() {
  return (
    <StyledSelect>
      <option value={CURRENCIES.PLN}>{CURRENCIES.PLN}</option>
      <option value={CURRENCIES.USD}>{CURRENCIES.USD}</option>
    </StyledSelect>
  );
}
