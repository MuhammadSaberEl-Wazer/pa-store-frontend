import Header from "../components/Header";
import Footer from "../components/Footer";
import Newsletter from "../components/Home/NewsLetter";
import { Outlet, useLocation } from "react-router-dom";
import HomeNavigation from "../components/Home/HomeNavigation";
import { useEffect, useState } from "react";
import Loader from "../components/helpers/Loader";
import Cookies from "js-cookie";

export interface UserInfo {
  id?: number;
  name?: string;
  email?: string;
  phone?: string;
}
const HomeLayout = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo>();

  useEffect(() => {
    // Scroll to top on location change
    window.scrollTo(0, 0);

    // Simulate loading
    setIsLoading(true);
    const timeOut = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => {
      clearTimeout(timeOut);
    };
  }, [location]);

  const checkLoginStatus = () => {
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";
    setLoggedInUser(isLoggedIn);
    if (isLoggedIn) {
      const userInfo: UserInfo = {
        id: JSON.parse(Cookies.get("userData") as string)?.id,
        email: JSON.parse(Cookies.get("userData") as string)?.email,
        phone: JSON.parse(Cookies.get("userData") as string)?.phone,
        name: JSON.parse(Cookies.get("userData") as string)?.name,
      };
      setUserInfo(userInfo);
    } else {
      setUserInfo({});
    }
  };

  useEffect(() => {
    checkLoginStatus();

    const intervalId = setInterval(checkLoginStatus, 300);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header loggedInUser={loggedInUser} userInfo={userInfo} />
          <HomeNavigation />
          <Outlet />
          <Newsletter />
          <Footer />
        </>
      )}
    </div>
  );
};

export default HomeLayout;
