import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
interface products {
  id: string;
  name: string;
  description: string;
  price: string;
  product_score: string;
  iconpic: string;
}
function Handle() {
  const route = useRouter();
  const [productId, setProductId] = useState("");
  const [singleProductDetails, setSingleProductDetails] = useState<products>({
    id: "",
    name: "",
    description: "",
    price: "",
    product_score: "",
    iconpic: "",
  });
  const [firstProductDetail, setFirstProductDetail] = useState(null);

  useEffect(() => {
    const id: string = Array.isArray(route.query.id)
      ? route.query.id[0]
      : route.query.id || "";
    setProductId(id);
    fetchTopicDetails(id);
  }, [route.query]);

  const fetchTopicDetails = async (id: string) => {
    try {
      const { data } = await axios.get(`/api/singleProduct/?id=${id}`);
      setSingleProductDetails(data);
    } catch (error) {
      console.log(error);
    }
  };
  const createOrderPostReq = async () => {
    // const id = productId;
    try {
      const { data } = await axios.post(`/api/placeOrder`, {
        currency: singleProductDetails.price,
        productid: singleProductDetails.name,
        iconpic: singleProductDetails.iconpic,
      });
      route.push("/products/orderplacedMessage");
    } catch (error) {
      console.log(error);
      // alert("order not placed")
    }
  };
  return (
    <>
      <div className="container min-h-screen text-black py-12 mx-auto">
        <div className="lg:w-full gap-5 md:container md:mx-auto flex md:flex-row flex-col ">
          <div className="lg:w-[45%] w-full flex justify-center h-fit ">
            <img
              src={singleProductDetails.iconpic}
              className="w-[70%] transform 
              transition duration-500 hover:scale-125 h-[50%]"
              alt=""
            />
          </div>
          <div className="lg:w-1/2 w-full  lg:mt-0">
            <h1 className=" text-3xl title-font font-medium mb-1">
              {singleProductDetails.name}
            </h1>
            <div className="flex mb-4">
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                <a className="text-gray-100">Games</a>
              </span>
            </div>
            {/* <p className="leading-relaxed text-subtext overflow-hidden text-justify p-1 md:h-32">
                {product.description}
              </p> */}
            <div className="flex flex-col  mt-3 border-black ">
              <div className="flex md:justify-start justify-center ">
                <span className="title-font font-medium text-2xl ">
                  {singleProductDetails.description}
                </span>
              </div>

              {/* Avialabilityyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy */}
              <div className="flex gap-5 mt-4  md:justify-start justify-center  items-center">
                <p className="border-b font-semibold w-[100px]  ">
                  {" "}
                  ₹ {singleProductDetails.price}
                </p>
              </div>

              <div>
                <p className="font-bold mt-2">🛍️ Available offers</p>
                <p className="font-semibold mt-2">
                  🛍️ Special PriceGet extra 25% off (price inclusive of
                  cashback/coupon)T&C
                </p>
                <p className="font-semibold mt-2">🛍️ Tk Pay Later?</p>
                <p className="font-semibold mt-2">
                  🛍️ Bank Offer₹15 off on UPI Txns upto 5 times per userT&C
                </p>
              </div>
              <div className="mt-4">
                <p className="text-xs font-semibold ">
                  <span>Product Available.</span>it will deliver 🚚 to you{" "}
                  <span>20 feb</span>
                </p>
              </div>
              {/* rating starrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr */}
              <div className="flex gap-2">
                <div className="flex mt-5 md:justify-start justify-center  items-center">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>First star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Second star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Third star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Fourth star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-300 dark:text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Fifth star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
                <p className="underline mt-5  ">
                  {singleProductDetails.product_score}
                </p>
              </div>
              {/* item grammmm buttton................................. */}

              {/* certificationnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn */}

              {/* Butoooooonnn of orderrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr */}
              <div className="flex gap-5 mt-5">
                <button
                  onClick={createOrderPostReq}
                  className="flex  text-white bg-[#BD2B23] border-0 py-2 px-6 focus:outline-none  rounded-3xl"
                >
                  Add To Cart
                </button>
              </div>
            </div>

            {/* item details...............................abaoutetc
                 ////////////////
                 .
                 .
                  /////////////////////////////////
                 */}
          </div>
        </div>
      </div>
    </>
  );
}
export default Handle;
