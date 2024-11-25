import api from "../axiosInstance";

interface Product {
  id: number;
  name: string;
  price: number;
  avatar: string;
  sub_category_id: number;
  sub_category: {
    id: number;
    name: string;
  };
}

interface ProductsResponse {
  current_page: number;
  data: Product[];
  total: number;
  per_page: number;
  // [key: string]: any; // To account for other properties like links, paths, etc.
}

export const getProducts = async (): Promise<ProductsResponse> => {
  try {
    const response = await api.get(`/product`);
    return response.data.data; // Extract data object from the API response
  } catch (error) {
    throw new Error(`Failed to fetch products: ${error}`);
  }
};
