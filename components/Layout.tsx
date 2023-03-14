import Link from "next/link";
import { ReactNode } from "react";
type Props = {
  children: ReactNode;
  pageTitle?: string;
};

const Layout = ({ children, pageTitle = "Products" }: Props) => {
  return (
    <>
      <nav className="w-full text-black h-24 flex  justify-between shadow-lg  border px-10">
        <Link
          className="flex flex-col items-center justify-center"
          href={"/products"}
        >
          <div className=" font-fuzzyBubbles font-extrabold text-3xl">
            Tk Store
          </div>
        </Link>
        <div className="flex flex-col items-center justify-center">
          <Link href={"/"}>
            <div className="w-[80px] h-[80px] rounded-full bg-black"></div>
          </Link>
        </div>
      </nav>
      <main className="text-zinc-900 font-sans bg-white ">{children}</main>
      <footer className="w-full h-24  bg-white border-t-2 shadow-lg k">
        <div className="flex justify-center">
          <p className="font-fuzzyBubbles text-black font-extrabold pt-7">
            Welcome to Tk Store
          </p>
        </div>
      </footer>
    </>
  );
};
export default Layout;
