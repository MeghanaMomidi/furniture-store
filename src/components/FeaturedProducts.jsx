import SectionTitle from "./SectionTitle";
import ProductsGrid from "./ProductsGrid";

const FeaturedProducts = () => {
  return (
    <div className=" align-element pt-24">
      <SectionTitle text="featured products" />
      <ProductsGrid/> 
    </div>
  );
};

export default FeaturedProducts;
