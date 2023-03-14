import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Profile() {
  const [allorderList, setAllorderList] = useState([]);
  useEffect(() => {
    console.log("hi");
    fetchOrders();
  }, []);

  const fetchOrders = async (context) => {
    const token = context?.req?.cookies["access-token"];
    try {
      const { data } = await axios.get("/api/allorderDetsails", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data, "thi is inside funtion");
      setAllorderList(data.orders);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* <div className="md:container pt-8 md:mx-auto">
        <div className="flex gap-2">
          <div className="w-[200px] h-[200px] border rounded-full"></div>
          <div className="flex flex-col justify-center ">
            <p className="text-2xl text-black  ">sonika</p>
            <p className=" text-black">Iam Here to say</p>
          </div>
        </div>
      </div> */}
      <div className="md:container pt-4 pb-5 md:mx-auto">
        <p className="mt-4 ml-4 text-2xl font-notosans font-bold">
          Your Orders
        </p>
      </div>

      <div className="md:container min-h-screen  text-black pb-8  md:mx-auto">
        <div className="flex justify-center gap-4 flex-wrap">
          {allorderList.map((item) => {
            return (
              <div
                key={item.id}
                className="flex w-[45%] transform 
                                transition duration-500 hover:scale-110 rounded-2xl border-2  flex-col border-coustom1"
              >
                <div className="flex w-full gap-12 rounded-2xl  p-7">
                  <div>
                    <img
                      src={item.iconpic}
                      className="w-[200px] rounded-lg h-[200px]"
                      alt=""
                    />
                  </div>

                  <div>
                    <p className=" text-lg  font-notosans font-bold ">
                      {item.productid}
                    </p>
                    <p className="font-notosans text-sm font-semibold">
                      Price: {item.currency}
                    </p>
                    <div className="flex gap-8 justify-between">
                      <div className=" flex text-sm text-black font-notosans mt-4 mb-4 flex-col">
                        <p>order placed</p>
                        <p> dec 12 2023</p>
                      </div>
                    </div>
                    <div className="flex gap-5 my-4">
                      <p className="underline font-bold">View invoice</p>
                    </div>
                    <div className="">
                      <div className="flex gap-3 font-semibold font-fuzzyBubbles my-4">
                        <div className="border hover:cursor-pointer border-slate-800 text-black rounded-3xl py-1 px-8">
                          cancel
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* ////////////////////////// */}

          {/* sdfkjhlhlhlhlhlhlhlhlhlllll */}
        </div>
      </div>
    </>
  );
}
