import api from "../axiosInstance";

interface Product {
  id: number;
  name: string;
  price: number;
  avatar: string;
  sub_category_id: number;
  short_description: string;
  sub_category: {
    id: number;
    name: string;
  };
}

interface ProductResponse {
  data: Product;
  id: number;
  name: string;
  price: number;
  avatar: string;
  sub_category_id: number;
  short_description: string;
  sub_category: {
    id: number;
    name: string;
  };
  // [key: string]: any; // To account for other properties like links, paths, etc.
}

export const getOneProduct = async (id: string): Promise<ProductResponse> => {
  try {
    const response = await api.get(`/product/${id}`);
    return response.data.data; // Extract data object from the API response
  } catch (error) {
    throw new Error(`Failed to fetch products: ${error}`);
  }
};
