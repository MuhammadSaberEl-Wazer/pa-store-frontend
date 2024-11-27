// src/utils/payment.ts
import api from "../axiosInstance";
import Cookies from "js-cookie";

// Define types for the payment request
interface PaymentData {
  amount: number;
  address: string;
  currency: string;
  payment_method_id: string;
  product_id: number | undefined;
}

export const payment = async (paymentData: PaymentData) => {
  const token = Cookies.get("token");
  const { amount, address, currency, payment_method_id, product_id } =
    paymentData;

  if (!token) {
    throw new Error("No token found. Please log in.");
  }

  try {
    const response = await api.post(
      "/process-payment",
      {
        amount,
        address,
        currency,
        payment_method_id,
        product_id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  
    return response.data;
  } catch (error) {
    console.error("Payment failed:", error);
    throw new Error("Failed to process payment. Please try again.");
  }
};
