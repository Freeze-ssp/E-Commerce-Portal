import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
        Indulge in luxury with our premium bedsheets - soft, silky, and made to last. Elevate your wardrobe with our stylish 
        women's clothing collection - from classic staples to trendy pieces, we've got you covered. Shop now and experience 
        the ultimate in comfort and fashion.
        </p>
      </div>
      <div className="bottom">
        {error
          ? ""
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;