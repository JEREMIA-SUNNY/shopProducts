import { url } from "inspector";
import Link from "next/link";

const OrderPlacedMessage = () => {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${"/3d.jpg"})`,
          backgroundSize: "cover",
          backgroundColor: "rgb(0,0,0)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="md:container  min-h-screen md:mx-auto">
          <div className="flex flex-col   items-center justify-center pt-4">
            <p className="pt-60 font-fuzzyBubbles text-center text-4xl font-extrabold">
              🎉🎉🎉HOORAY🎉🎉🎉 order Placed.
              <br />
              Your package is on its way!
            </p>
            <div>
              <Link href={"/products/profile"}>
                <button className="mt-4 px-4 py-2 text-white bg-red-600 rounded-lg">
                  ORDERS
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default OrderPlacedMessage;
