import api from "../axiosInstance";

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export const registerUser = async (data: RegisterData): Promise<void> => {
  try {
    // const response = await api.post("/register", data);
    const response = await api.post("/auth/register", data, {
      headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    });

    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    console.log("error", error);

    throw new Error("An unknown error occurred during registration.");
  }
};
