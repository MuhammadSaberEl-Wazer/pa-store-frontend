import api from "../axiosInstance";
import Cookies from "js-cookie";

export const logoutUser = async (): Promise<void> => {
  try {
    const token = Cookies.get("userData")
      ? JSON.parse(Cookies.get("userData") as string).token
      : null;

    if (!token) {
      throw new Error("No token found in cookies.");
    }

    const response = await api.get("/auth/logout", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (Cookies?.get("userData")) {
      Cookies.remove("userData");
    }
    if (Cookies?.get("token")) {
      Cookies.remove("token");
    }
    if (localStorage.getItem("loggedIn")) {
      localStorage.removeItem("loggedIn");
    }

    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    console.error("error", error);
    throw new Error("An unknown error occurred during logout.");
  }
};
