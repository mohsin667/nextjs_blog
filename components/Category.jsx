"use client";
import React, { useState } from "react";
import Link from "next/link";
import SideHeading from "./SideHeading";

const Category = () => {
  const [categories] = useState([
    "Data Science",
    "Self Improvement",
    "Technology",
    "Writing",
    "Relationships",
    "Politics",
    "Cryptocurrency",
  ]);

  return (
    <div className="pb-10">
      <SideHeading heading="Category" />
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Link className="flex" href={`/category/${category}`} key={category}>
            <span className="px-4 py-2 bg-[#f5f5f5] rounded-[3px] inline">{category}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
