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
  flex-wrap: wrap;
`;

export function Products({ products, headertext }) {
  return (
    <CenteredContent>
      <StyledH2 headertext="Sprawdź nasze bestellery">{headertext}</StyledH2>
      <ProductWrapper>
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </ProductWrapper>
    </CenteredContent>
  );
}
