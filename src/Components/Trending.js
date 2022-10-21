import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { GoChevronRight } from "react-icons/go";
import Product from "./Products"

function Trending() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      await axios
        .get("https://fakestoreapi.com/products")
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    };

    return () => {
      getData();
    };
  }, []);

  let stl = {
    size: "mx-auto w-[93%] h-[670px]",
    top: "flex justify-between items-center w-full h-[60px]",
    title: "text-[35px]",
    browse: "text-red-500 uppercase mr-[5px]",
    box: "relative w-[255px] h-[500px] hover:shadow-xl mt-[40px]",
    heart: "hover:animate-beat text-red-500 text-[22px] absolute top-3 right-2",
    forward:
      "group flex justify-center items-center w-[35px] h-[35px]  text-red-500  text-[22px] absolute top-12 right-0",
    soc_media:
      "invisible group-hover:visible flex flex flex-col justify-center items-center absolute z-20 top-1 left-8 w-[220px] h-[200px] bg-white rounded-[5px] shadow-lg text-black ",
    text_so_media: "text-[18px] mb-[10px] hover:text-blue-600",
    icons: "text-[22px] inline mr-[10px] text-blue-600",
    img: "w-full h-[50%] object-contain",
    delivery:
      "absolute left-1 top-[215px] z-100 shadow-2xl  p-1.5 rounded-md  bg-black",
    price: "text-[22px] px-[12px] font-[500] py-[8px]",
    box_title: "text-[18px]  px-[12px] leading-[26px]",
    btn: "flex justify-between items-center absolute bottom-3 left-0 right-0 mx-auto w-[85%] h-[50px] ",
    btn_self:
      "rounded-full border-[1px] border-black shadow-lg w-[70%] h-[40px]",
  };
  return (
    <div className={stl.size}>
      <div className={stl.top}>
        <p className={stl.title}>Trending products</p>
        <a href="https://olcha.uz/oz/new" className={stl.browse}>
          <p>
            Browse all <GoChevronRight className="inline" />
          </p>
        </a>
      </div>

      <div className=" w-full grid grid-cols-5">
        {data.slice(0, 5).map((product) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
}

export default Trending;
