import { useLoaderData } from "react-router-dom";

import { Hero } from "../../components/Hero/Hero";
import { Products } from "../../components/Products/Products";

export function MainPage() {
  const { bestsellers, heroImageUrl } = useLoaderData();

  return (
    <>
      <Hero heroImage={heroImageUrl} />
      <Products headerText="Sprawdź nasze bestellery" products={bestsellers} />
    </>
  );
}
