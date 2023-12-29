// types.ts

interface Rating {
    rate: number;
    count: number;
  }
  
  interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
  }

  export interface RootState {
    products: {
      productsStatus: string;
      products: Product[];  // Assuming Product is an array type
     // productsStatus: "IDLE" | "LOADING" | "SUCCESS" | "FAIL";
      productDetail: Product | null;
      productsDetailStatus: "IDLE" | "LOADING" | "SUCCESS" | "FAIL";
    };
  }
  
  export default Product;
  