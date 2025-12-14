import Arrow from "@/public/arrow";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="relative w-full max-w-xl flex justify-center mb-8 mt-6 ">
      <Link
        href="/"
        className="absolute left-0 flex items-center justify-center w-10 h-10 rounded-full bg-bkg-indigo-100 hover:bg-bkg-indigo-200 text-text-indigo-600 transition-colors ml-5"
      >
        <Arrow />
      </Link>
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-gradient1 to-gradient2">
        Posts Search
      </h1>
    </div>
  );
};
