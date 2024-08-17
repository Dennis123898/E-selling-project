import Container from "./components/Container";
import HomeBannerSale from "./components/HomeBannerSale";

import { truncateText } from "@/utils/TruncateText";
import ProductCard from "./components/products/ProductCard";
import { products } from "@/utils/products";

export default function Home() {
  return (
    <div className="p-8">
      <Container>
        <HomeBannerSale />      
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 
        x1:grid-cols-5 2x1:grid-cols-6 gap-8">
          {products.map((product: any) => {
            return <ProductCard data={product} />
          })}
        </div>
      </Container>
    </div>
  );
}
