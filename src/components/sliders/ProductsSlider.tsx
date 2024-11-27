import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import OutlineButton from "../helpers/buttons/OutlineButton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style/slidersMain.css"; // ملف CSS الخاص بك
import { getProducts } from "../../API/Products/getAllProducts";
import { REACT_APP_IMG_BASE_URL } from "../../../Statics";

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const CustomPrevArrow: React.FC<ArrowProps> = (props) => (
  <button
    {...props}
    className="slick-arrow slick-prev !border !border-primary-text"
    onClick={props.onClick}
  >
    <i className="fa fa-chevron-left"></i>
  </button>
);

const CustomNextArrow: React.FC<ArrowProps> = (props) => (
  <button
    {...props}
    className="slick-arrow slick-next !border !border-primary-text"
    onClick={props.onClick}
  >
    <i className="fa fa-chevron-right"></i>
  </button>
);

interface Product {
  id: number;
  name: string;
  price: number;
  avatar: string;
  sub_category: {
    name: string;
  };
}

interface ProductSliderProps {
  title: string;
  types?: string[];
  selectedType?: string;
  buttonTitle?: string;
}

const ProductSlider: React.FC<ProductSliderProps> = ({
  title,
  buttonTitle,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts(); // Fetch products from the API
        setProducts(data.data); // Set the fetched products
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const settings = {
    dots: true,
    infinite: products.length > 4, // Only enable infinite scroll if there are more than 4 products
    speed: 500,
    slidesToShow: 4, // Show the number of available products or 4
    slidesToScroll: 1,
    pagination: true,
    draggable: true,
    swipe: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: Math.min(products.length, 4),
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(products.length, 3),
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(products.length, 2),
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: Math.min(products.length, 1),
        },
      },
    ],
  };

  if (loading) {
    return <p className="text-center text-primary-text">Loading products...</p>;
  }


  return (
    <div className="section overflow-hidden">
      <div className="container overflow-hidden mb-[20px]">
        <div className="row">
          <div className="col-md-12">
            <h3 className="title text-7xl text-center font-bold text-primary-text">
              {title}
            </h3>
          </div>

          <div className="col-md-12 py-[50px]">
            <div className="row">
              <div className="products-tabs">
                <div id="tab1" className="tab-pane w-full active">
                  <Slider {...settings} className="products-slick">
                    {products.map((product) => {
                      return (
                        <div
                          className="product !scale-[0.95] hover:!scale-1 product-slider-card"
                          key={product.id}
                        >
                          <Link to={`/products/${product.id}`}>
                            <div className="product-img">
                              <img
                                src={`${REACT_APP_IMG_BASE_URL}/${product.avatar}`}
                                alt={product.name}
                                className="w-full h-[200px] object-cover"
                              />
                              <div className="product-label">
                                <span className="new">جديد</span>
                              </div>
                            </div>
                            <div className="product-body">
                              <p className="product-category">
                                {product.sub_category.name}
                              </p>
                              <h3 className="product-name">
                                <a href="#">{product.name}</a>
                              </h3>
                              <h4 className="product-price">
                                ${product.price.toFixed(2)}
                                {/* <del className="product-old-price">
                                  ${(product.price * 1.1).toFixed(2)}
                                </del> */}
                              </h4>
                            </div>
                          </Link>
                          <div className="add-to-cart">
                            <button className="add-to-cart-btn">
                              <i className="fa fa-shopping-cart"></i> إضافة إلى
                              السلة
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {buttonTitle ? (
        <OutlineButton
          isLink={true}
          link="/products"
          LinkclassNames="flex justify-center"
          classNames=""
          text={buttonTitle}
        />
      ) : null}
    </div>
  );
};

export default ProductSlider;
