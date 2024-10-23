import { useQuery } from "@tanstack/react-query";
import axios from "axios";
type Tproduct = {
  id: number;
  name: string;
  email: string;
  role: string;
  avatar: string;
};
const ProductPage = () => {
  const url = "https://api.escuelajs.co/api/v1/users"
  const fetchProduct = async () => {
    const response = await axios.get(url);
    return response.data;
  }
  const { data } = useQuery<Tproduct[]>({
    queryKey: ["product"],
    queryFn: fetchProduct,
  });
  return (
    <>
     <div className="container mx-auto">
       <h1>ProductPage</h1>
       <div className="product_list">
         {data && data.length > 0 && data.map((product) => {
           return (
             <div key={product.id}>
               <div>{product.name}</div>
               <img src={product.avatar} alt={product.name} />
             </div>
           );
         })}
       </div>
     </div>
    </>
  );
};

export default ProductPage;
