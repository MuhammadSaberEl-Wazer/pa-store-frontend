import api from "../axiosInstance";
import Cookies from "js-cookie";

export interface LoginData {
  email: string;
  password: string;
}

interface LoginResponse {
  data: {
    avatar: string;
    created_at: string;
    email: string;
    email_verified_at: string;
    id: number;
    name: string;
    pm_last_four: string;
    pm_type: string;
    stripe_id: number;
    token: string;
    trial_ends_at: string;
    updated_at: string;
  };
  error: boolean;
  message: string;
  status: number;
}

export const loginUser = async (data: LoginData): Promise<LoginResponse> => {
  try {
    const response = await api.post("/auth/login", data, {
      headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    });

   

    if (response.data && response.data.data) {
      Cookies.set("userData", JSON.stringify(response.data.data), {
        expires: 7,
        secure: true,
        sameSite: "strict",
      });
      Cookies.set("token", response.data.data.token, {
        expires: 7,
        secure: true,
        sameSite: "strict",
      });
    }
    localStorage.setItem("loggedIn", JSON.stringify(true));
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    console.error("error", error);
    throw new Error("An unknown error occurred during login.");
  }
};
