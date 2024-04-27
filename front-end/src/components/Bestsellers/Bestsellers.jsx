import styled from "styled-components";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import { Product } from "../Product/Product";

const StyledH2 = styled.h2`
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const ProductWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export function Bestsellers({ products }) {
  return (
    <CenteredContent>
      <StyledH2>Sprawdź nasze bestellery</StyledH2>
      <ProductWrapper>
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </ProductWrapper>
    </CenteredContent>
  );
}
