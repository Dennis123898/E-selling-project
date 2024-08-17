import Container from "@/app/components/Container";
import { product } from "@/utils/product";
import ProductDetails from "./ProductDetails";
import ListRating from "./ListRating";


interface Iprams{
    productId?: string;
}

const Product = ({ params }: { params: Iprams }) => {
    console.log("prams", params)
    
    return (
        <div className="p-8">
            <Container>
               <ProductDetails product={product} />
               <div className="flex flex-col mt-20 gap-4">
                <div>Add Rating</div>
                <ListRating product={product} />
               </div>
            </Container>
        </div>
    );
};
 
export default Product;