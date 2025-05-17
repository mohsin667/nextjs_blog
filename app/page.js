import Image from "next/image";
import Posts from "@/components/Posts";
import Category from "@/components/Category";
import Trending from "@/components/Trending.jsx.js";

export default function Home() {
  return (
    <div className="flex container gap-6">
      <div className="w-full md:w-7/12p-4">
        <Posts />
      </div>
      <div className="w-full md:w-5/12 lg:pl-8">
        <Category />
        <Trending />
      </div>
    </div>
  );
}
