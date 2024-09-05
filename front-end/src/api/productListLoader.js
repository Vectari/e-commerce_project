import { redirect } from "react-router-dom";
import { BACK_END_URL, PATH_TO_ENDPOINT_MAPPING } from "../constants/api";
import { CATEGORIES } from "../constants/categories";

export function productListLoader({
  params: { gender, category, subcategory },
}) {
  const foundCategory = CATEGORIES.find((c) => c.path === category);
  const foundGender = PATH_TO_ENDPOINT_MAPPING[gender];

  if (foundGender && foundCategory) {
    let url = `${BACK_END_URL}/products/?gender=${foundGender}&category=${category}`;

    if (subcategory) {
      const foundSubcategory = foundCategory.subcategories.find(
        (sc) => sc.path === subcategory
      );
      if (foundSubcategory) {
        url = `${url}&subcategory=${subcategory}`;
      } else {
        return redirect("/kobieta");
      }
    }

    url = `${url}&_limit=8&_page=1`;

    return fetch(url).then((response) => {
      console.log(response.headers.get("X-Total-Count"));
      const numberOfPages = Math.ceil(
        Number(response.headers.get("X-Total-Count")) / 8
      );
      console.log(numberOfPages);
    });
  } else {
    redirect("/kobieta");
  }
}
