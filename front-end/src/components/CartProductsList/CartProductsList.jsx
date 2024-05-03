import styled from "styled-components";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import { CartProduct } from "../CartProduct/CartProduct";
import { Theme } from "../../styles/Theme";

const StyledCartList = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background-color: ${Theme.color.grey};
`;

export function CartProductList({ products }) {
  return (
    <CenteredContent>
      <StyledCartList>
        <h2>Koszyk</h2>
        <div>
          {products.map((product) => {
            return <CartProduct key={product.id} product={product} />;
          })}
        </div>
      </StyledCartList>
    </CenteredContent>
  );
}
