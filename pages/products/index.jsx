import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { Pagination, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Link from "next/link";
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";
import axios from "axios";

function Products() {
  const route = useRouter();
  const [allProductsList, setAllProductsList] = useState([]);
  const [swiperRef, setSwiperRef] = useState(0);
  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };

  useEffect(() => {
    fetchTopics();
  }, []);

  const fetchTopics = async (context) => {
    console.log(context);
    const token = context?.req?.cookies["access-token"];
    try {
      const { data } = await axios.get("/api/fetchProducts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data);
      setAllProductsList(data);
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.error || "Something went wrong");
    }
  };

  const product = [1, 2, 3, 4, 5];
  return (
    <div>
      <div className="bg-coustom1 min-h-screen ">
        <div className="md:container  md:mx-auto">
          <div className=" py-10  flex justify-between container ">
            <div className="flex   justify-between">
              <p className="w-fit p-2 text-balck  text-4xl">Electronics</p>
            </div>
            <div className="flex gap-1 mt-5 mr-6">
              <div>
                <button onClick={prevHandler}>
                  <BiChevronLeftCircle color={"Black"} size={50} />
                </button>
              </div>
              <div>
                <button onClick={nextHandler}>
                  <BiChevronRightCircle color={"black"} size={50} />
                </button>
              </div>
            </div>
          </div>
          <div className="pb-8 p-4 md:p-0 md:mt-0 pt-5 ">
            <Swiper
              onSwiper={(swiper) => setSwiperRef(swiper)}
              modules={[Pagination, Autoplay, Navigation]}
              slidesPerView={1}
              spaceBetween={10}
              slidesPerGroup={1}
              breakpoints={{
                350: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,

                  speed: 800,

                  pagination: {},
                },
                769: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                  spaceBetween: 10,

                  speed: 800,

                  pagination: {},
                },
                1024: {
                  slidesPerView: 4,
                  slidesPerGroup: 3,
                  spaceBetween: 10,
                  speed: 800,
                  pagination: {},
                },
              }}
              // pagination={{ clickable: true }}
              effect=""
            >
              {allProductsList.map(
                ({ id, name, description, price, iconpic }) => {
                  return (
                    <SwiperSlide key={id} className="">
                      <div className=" md:p-2  rounded-3xl md:mb-5 ">
                        {" "}
                        <div className="flex flex-col transform 
                                transition duration-500 hover:scale-110  border transition duration-300 h-80   md:h-[600px] bg-white rounded-3xl shadow-sm hover:shadow">
                          <div className="relative  w-full h-fit p-2">
                            <img
                              src={iconpic}
                              className="object-cover    z-40  w-full h-44 md:h-80 rounded-2xl"
                              alt="Plan"
                            />
                          </div>

                          <div className="flex flex-col justify-between  p-1 ">
                            <div>
                              <div className="text-xs text-center mt-4 font-semibold">
                                {" "}
                                {/* {product.node.title} */}
                              </div>
                              <p className="text-sm text-center text-gray-900">
                                {name}
                              </p>
                              <div className="mt-1 text-center font-notosans mb-4 mr-1 text-xl font-bold ">
                              ₹{price}
                                {/* {product.node.priceRange.minVariantPrice.amount} */}
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-center">
                            <button className="w-[100px] border z-50 shadow-2xl bg-white text-buttonRed font-notosans font-medium  rounded-3xl = p-2">
                              <Link href={`/products/${id}`}>BUY</Link>
                            </button>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                }
              )}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
