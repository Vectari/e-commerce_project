import styled from "styled-components";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import { FavouriteProduct } from "../FavouriteProduct/FavouriteProduct";
import { Theme } from "../../styles/Theme";

const StyledFavouritesList = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background-color: ${Theme.color.grey};
`;

export function FavouritesList({ products }) {
  return (
    <CenteredContent>
      <StyledFavouritesList>
        <h2>Ulubione</h2>
        <div>
          {products.map((product) => {
            return <FavouriteProduct key={product.id} product={product} />;
          })}
        </div>
      </StyledFavouritesList>
    </CenteredContent>
  );
}
