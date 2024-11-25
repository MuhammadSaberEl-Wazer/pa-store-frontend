import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from "react-router-dom";
import { getOneProduct } from "../../API/Products/getOneProduct";
import { REACT_APP_IMG_BASE_URL } from "../../../Statics";

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

const ProductDetails: React.FC = () => {
  const { id: productId } = useParams();

  const goToLink = (): void => {
    const url: string =
      "https://drive.google.com/file/d/10T-iT0l-6Bbrsmt3_aXwz6F04fbBw9GF/view";
    window.open(url, "_blank"); // Open the link in a new tab
  };

  // const images = [
  //   "/img/home/start-work-category.jpeg",
  //   "/img/home/books-category.jpg",
  //   "/img/home/courses-category.webp",
  // ];

  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch products on component mount
  useEffect(() => {
    if (productId) {
      const fetchProduct = async () => {
        try {
          const data = await getOneProduct(productId); // Fetch products from the API
          console.log("data.data", productId, data);
          setProduct(data);
        } catch (error) {
          console.error("Failed to fetch products:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchProduct();
    }
  }, [productId]);

  console.log("product", product);

  if (loading) {
    return <p className="text-center text-primary-text">Loading products...</p>;
  }

  return (
    product && (
      <div className="section">
        {/* container */}
        <div className="container">
          {/* row */}
          <div className="row  space-between">
            <div className=" col-md-6">
              {/* <Slider {...settings}>
              {images.map((src, index) => (
                <div className="product-preview" key={index}>
                  <img
                    src={src}
                    className="object-cover "
                    alt={`Product ${index + 1}`}
                  />
                </div>
              ))}
            </Slider> */}
              <div className="product-preview">
                <img
                  src={`${REACT_APP_IMG_BASE_URL}/${product.avatar}`}
                  className="object-cover "
                  alt={`Product ${product.id + 1}`}
                />
              </div>
            </div>

            {/* Product details */}
            <div className="col-md-6 h-full " dir="rtl">
              <div className="product-details lg:translate-y-1/4 flex  flex-col  !justify-center">
                <h2 className="product-name">{product?.name}</h2>
                <div>
                  <div className="product-rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                  </div>
                  <a className="review-link" href="#">
                    10 تقييم(ات) | أضف تقييمك
                  </a>
                </div>
                <div>
                  <h3 className="product-price">
                    {product.price}$
                    {/* <del className="product-old-price">20.00$</del> */}
                  </h3>
                  <span className="product-available">متوفر في المخزون</span>
                </div>
                <p className="justify-centerw-full text-justify text-2xl leading-tight">
                  {product.short_description}
                </p>

                <div className="add-to-cart w-full mt-[20px]">
                  <button className="add-to-cart-btn w-full">
                    <i className="fa fa-shopping-cart"></i> أضف إلى السلة
                  </button>
                </div>

                <div className="add-to-cart w-full my-3">
                  <button className="add-to-cart-btn w-full">
                    <i className="fa fa-shopping-cart"></i> شراء الآن
                  </button>
                </div>

                <div className="add-to-cart w-full">
                  <button
                    className="add-to-cart-btn w-full"
                    onClick={() => goToLink()}
                  >
                    <i className="fa fa-shopping-cart"></i> تصفح أول صفحتين
                  </button>
                </div>

                {/* <ul className="product-links">
                <li className="text-primary-text font-bold !text-[1.3rem]">
                  الفئة:
                </li>
                <li>
                  <a href="#">سماعات رأس</a>
                </li>
                <li>
                  <a href="#">إكسسوارات</a>
                </li>
              </ul> */}
              </div>
            </div>

            {/* /Product details */}

            {/* Product tab */}
            <div className="col-md-12">
              <div id="product-tab">
                {/* product tab nav */}
                <ul className="tab-nav" dir="rtl">
                  <li className="active">
                    <a data-toggle="tab" href="#tab1">
                      التفاصيل
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#tab3">
                      المراجعات (3)
                    </a>
                  </li>
                </ul>
                {/* /product tab nav */}

                {/* product tab content */}
                <div className="tab-content">
                  {/* tab1 */}
                  <div id="tab1" className="tab-pane fade in active">
                    <div className="row">
                      <div className="col-md-12">
                        <p>التفاصيل وكلام كتير عن المنتج وما الي ذلك</p>
                      </div>
                    </div>
                  </div>
                  {/* /tab1 */}

                  {/* tab3 */}
                  <div id="tab3" className="tab-pane fade in">
                    <div className="row">
                      {/* Rating */}
                      <div className="col-md-3">
                        <div id="rating">
                          <div className="rating-avg">
                            <span>4.5</span>
                            <div className="rating-stars">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star-o"></i>
                            </div>
                          </div>
                          <ul className="rating">
                            {[5, 4, 3, 2, 1].map((star, index) => (
                              <li key={index}>
                                <div className="rating-stars">
                                  {Array.from({ length: star }, (_, i) => (
                                    <i className="fa fa-star" key={i}></i>
                                  ))}
                                  {Array.from({ length: 5 - star }, (_, i) => (
                                    <i className="fa fa-star-o" key={i}></i>
                                  ))}
                                </div>
                                <div className="rating-progress">
                                  <div style={{ width: `${star * 20}%` }}></div>
                                </div>
                                <span className="sum">{star}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      {/* /Rating */}

                      {/* Reviews */}
                      <div className="col-md-6" dir="rtl">
                        <div id="reviews">
                          <ul className="reviews">
                            {["John", "Jane", "Doe"].map((name, index) => (
                              <li key={index}>
                                <div className="review-heading">
                                  <h5 className="name">{name}</h5>
                                  <p className="date">27 DEC 2018, 8:0 PM</p>
                                  <div className="review-rating">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star-o empty"></i>
                                  </div>
                                </div>
                                <div className="review-body">
                                  <p>
                                    منتج زي العسل , شكرا للشركة القائمة علي هذا
                                    المنتج , الوصيل كويس وشوية تطبيل
                                  </p>
                                </div>
                              </li>
                            ))}
                          </ul>
                          <ul className="reviews-pagination">
                            <li className="active">1</li>
                            <li>
                              <a href="#">2</a>
                            </li>
                            <li>
                              <a href="#">3</a>
                            </li>
                            <li>
                              <a href="#">4</a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-angle-right"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* /Reviews */}

                      {/* Review Form */}
                      <div className="col-md-3">
                        <div id="review-form">
                          <form className="review-form">
                            <input
                              className="input"
                              type="text"
                              placeholder="Your Name"
                            />
                            <input
                              className="input"
                              type="email"
                              placeholder="Your Email"
                            />
                            <textarea
                              className="input"
                              placeholder="Your Review"
                            ></textarea>
                            <div className="input-rating">
                              <span>Your Rating: </span>
                              <div className="stars">
                                {[5, 4, 3, 2, 1].map((star) => (
                                  <React.Fragment key={star}>
                                    <input
                                      id={`star${star}`}
                                      name="rating"
                                      value={star}
                                      type="radio"
                                    />
                                    <label htmlFor={`star${star}`}></label>
                                  </React.Fragment>
                                ))}
                              </div>
                            </div>
                            <button className="primary-btn">Submit</button>
                          </form>
                        </div>
                      </div>
                      {/* /Review Form */}
                    </div>
                  </div>
                  {/* /tab3 */}
                </div>
                {/* /product tab content */}
              </div>
            </div>
            {/* /product tab */}
          </div>
          {/* /row */}
        </div>
        {/* /container */}
      </div>
    )
  );
};

export default ProductDetails;
