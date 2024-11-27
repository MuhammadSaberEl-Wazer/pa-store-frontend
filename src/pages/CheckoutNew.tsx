import { useEffect, useState } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumbs";
import { getOneProduct } from "../API/Products/getOneProduct";
import { payment } from "../API/Payment/payment";

interface Product {
  id: number;
  name: string;
  price: number;
  avatar: string;
  short_description: string;
  sub_category: {
    name: string;
  };
}

const CheckoutNew = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const productId = searchParams.get("productId");
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [paymentLoading, setPaymentLoading] = useState<boolean>(false);
  const [amount, setAmount] = useState<number>(1);
  const [address, setAddress] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const [loggedInUser, setLoggedInUser] = useState(false);

  // Fetch product on mount
  useEffect(() => {
    if (productId) {
      const fetchProduct = async () => {
        try {
          const data = await getOneProduct(productId);
          setProduct(data);
        } catch (error) {
          console.error("Failed to fetch product:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchProduct();
    }
  }, [productId]);

  // Validate form inputs and handle payment
  const handleSubmit = async () => {
    if (!termsAccepted) {
      setMessage("يجب الموافقة على الشروط والأحكام لإتمام الطلب.");
      setIsError(true);
      return;
    }

    if (!address && !city && !country) {
      setMessage("يرجى إدخال العنوان أو المدينة أو الدولة.");
      setIsError(true);
      return;
    }

    const fullAddress = `${address}, ${city}, ${country}`;
    const paymentData = {
      amount: amount,
      address: fullAddress,
      currency: "usd",
      payment_method_id: "pm_card_visa",
      product_id: product?.id,
    };

    setPaymentLoading(true); // Start loader
    try {
      await payment(paymentData);
      setMessage("تمت عملية الدفع بنجاح");
      setIsError(false);
      setTimeout(() => navigate(`/products/${productId}`), 2500);
    } catch (error) {
      console.error("Payment failed:", error);
      setMessage("فشل في إتمام العملية. يرجى المحاولة مرة أخرى.");
      setIsError(true);
    } finally {
      setPaymentLoading(false); // Stop loader
    }
  };

  const checkLoginStatus = () => {
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";
    setLoggedInUser(isLoggedIn);
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const goToLogin = () => {
    navigate(`/login?refer=checkout&productId=${productId}`);
  };

  if (loading) {
    return <p className="text-center text-primary-text">Loading checkout...</p>;
  }

  return (
    <div dir="rtl">
      <Breadcrumb />
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="billing-details">
                <div className="section-title">
                  <h3 className="title">عنوان الفوترة</h3>
                </div>
                <div className="form-group">
                  <input
                    className="input"
                    type="text"
                    name="address"
                    placeholder="العنوان"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="input"
                    type="text"
                    name="city"
                    placeholder="المدينة"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="input"
                    type="text"
                    name="country"
                    placeholder="الدولة"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="col-md-5 order-details">
              <div className="section-title text-center">
                <h3 className="title">طلبك</h3>
              </div>
              <div className="order-summary">
                <div className="order-col">
                  <div>
                    <strong>المنتج</strong>
                  </div>
                  <div>
                    <strong>الإجمالي</strong>
                  </div>
                </div>
                <div className="order-products">
                  <div className="order-col">
                    <div>
                      <input
                        type="number"
                        min="1"
                        max="10000"
                        value={amount}
                        onChange={(e) =>
                          setAmount(
                            Math.max(1, Math.min(10000, +e.target.value))
                          )
                        }
                        className="input input-amount max-w-[100px]"
                      />
                      <span> </span>
                      {product?.name}
                      <strong>x</strong>
                    </div>
                    <div>{product?.price.toFixed(2)}</div>
                  </div>
                </div>
                <div className="order-col">
                  <div>الشحن</div>
                  <div>
                    <strong>مجاني</strong>
                  </div>
                </div>
                <div className="order-col">
                  <div>
                    <strong>الإجمالي</strong>
                  </div>
                  <div>
                    <strong className="order-total">
                      {(amount * (product?.price || 0)).toFixed(2)} USD
                    </strong>
                  </div>
                </div>
              </div>
              <div className="payment-method">
                <div className="input-radio">
                  <input
                    type="radio"
                    name="payment"
                    id="payment-4"
                    defaultChecked
                  />
                  <label htmlFor="payment-4">
                    <span></span> نظام فيزا
                  </label>
                </div>
              </div>
              <div className="input-checkbox">
                <input
                  type="checkbox"
                  id="terms"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                />
                <label htmlFor="terms">
                  <span></span>
                  لقد قرأت وأقبل <Link to="#">الشروط والأحكام</Link>
                </label>
              </div>
              {!loggedInUser ? (
                <button
                  className="mt-[4rem] bg-[#f24906dd] p-[1rem] text-[white] duration-300	 hover:-translate-y-1"
                  onClick={goToLogin}
                >
                  يجب عليك تسجيل الدخول أولًا لاستكمال عملية الدفع!
                </button>
              ) : null}
              <button
                onClick={handleSubmit}
                className={
                  paymentLoading || !loggedInUser
                    ? "primary-btn-disabled order-submit"
                    : "primary-btn order-submit"
                }
                disabled={paymentLoading || !loggedInUser}
              >
                {paymentLoading ? "جاري معالجة الدفع..." : "تقديم الطلب"}
              </button>

              {/* Display status message */}
              {message && (
                <div
                  className={`mt-4 p-4 text-center rounded-md ${
                    isError
                      ? "bg-red-200 text-red-600"
                      : "bg-green-200 text-green-600"
                  }`}
                >
                  {message}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutNew;
