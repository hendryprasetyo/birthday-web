import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AiOutlineArrowDown } from "react-icons/ai";
import Modal from "../components/Modal";
import { runFireworks } from "../lib/utils";

export default function Box() {
  useEffect(() => {
    runFireworks();
  });
  const [open, setOpen] = useState(false);
  AOS.init();

  function modalHandler() {
    setOpen(!open);
  }
  return (
    <>
      <div className="bg-box bg-center bg-fixed  bg-100%">
        <div className="w-full h-full flex justify-center">
          <div className="flex justify-center items-center flex-col gap-64 w-10/12">
            <div
              className="w-full rounded-xl  h-[24rem] mt-[21rem] flex justify-center flex-col items-center text-center"
              data-aos="zoom-out-down"
              data-aos-duration="600"
            >
              <img
                src="/assets/image/foto1.jpeg"
                alt=""
                className="rotate-270 w-[185px] rounded-xl absolute top-[-4.4rem]"
              />
              <div className="flex justify-center bg-blue-200 absolute top-[14.8rem]  w-[4rem] animate-bounce rounded-full">
                <AiOutlineArrowDown className="text-[4rem]" />
              </div>
              <div className="absolute w-11/12 rounded-3xl bottom-0 bg-green-200 h-[3rem] flex justify-center items-center text-xl font-semibold">
                <h2>SCROLL PERLAHAN YAH</h2>
              </div>
            </div>
            <div
              className="w-full h-28 bg-yellow-300 rounded-lg shadow-md hover:bg-yellow-200 flex justify-center items-center text-xl font-semibold"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <h1>Hey kamu</h1>
            </div>
            <div
              className="w-full h-28 bg-blue-400 rounded-lg shadow-md hover:bg-blue-300 flex text-center font-semibold justify-center items-center text-xl"
              data-aos="fade-left"
              data-aos-duration="500"
            >
              <h1 className="p-10 ">
                Cie hari ini ulang tahun yang ke 18x yah
              </h1>
            </div>
            <div
              className="w-full h-28 bg-red-400 rounded-lg shadow-md hover:bg-red-300 flex justify-center items-center text-xl font-semibold"
              data-aos="fade-right"
              data-aos-duration="500"
            >
              <h1>Selamat ulang tahun yah</h1>
            </div>
            <div
              className="w-full h-28 bg-green-400 rounded-lg shadow-md hover:bg-green-300 font-semibold flex justify-center text-center items-center text-xl"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <h1>Semoga kamu jadi yang disemogakan</h1>
            </div>
            <div
              className="w-full h-28 bg-blue-400 rounded-lg shadow-md hover:bg-blue-300 flex justify-center items-center text-xl font-semibold"
              data-aos="fade-right"
              data-aos-duration="500"
            >
              <h1>hehe... gajelas yah aku</h1>
            </div>
            <div
              className="w-full h-28 bg-yellow-400 rounded-lg shadow-md hover:bg-yellow-300  font-semibold flex text-center justify-center items-center text-xl"
              data-aos="fade-left"
              data-aos-duration="500"
            >
              <h1 className="p-10 ">Aku ga mau kasih doa yang mainstream ah</h1>
            </div>
            <div
              className="w-full h-28 bg-red-400 rounded-lg shadow-md hover:bg-red-300 flex text-center justify-center items-center text-xl font-semibold"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <h1 className="p-10 ">
                Yang penting kamu sehat dan bisa ulang tahun lagi
              </h1>
            </div>
            <div
              className="w-full h-28 bg-green-400 rounded-lg shadow-md hover:bg-green-300 font-semibold flex text-center justify-center items-center text-xl"
              data-aos="fade-left"
              data-aos-duration="500"
            >
              <h1 className="p-10 ">Maaf yah ditahun sebelumnya aku ga ada </h1>
            </div>
            <div
              className="w-full h-28 bg-yellow-400 rounded-lg shadow-md hover:bg-yellow-300 font-semibold flex text-center justify-center items-center text-xl"
              data-aos="fade-right"
              data-aos-duration="500"
            >
              <h1 className="p-10 ">Sama aku terus yah</h1>
            </div>
            <div
              className="w-full h-28 bg-blue-400 rounded-lg shadow-md hover:bg-blue-300 font-semibold flex text-center justify-center items-center text-xl"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <h1 className="p-10 ">
                Kita harus jadi sesuatu bareng di kemudian hari
              </h1>
            </div>
            <div
              className="w-full h-28 bg-red-400 rounded-lg shadow-md hover:bg-red-300 font-semibold flex text-center justify-center items-center text-xl"
              data-aos="fade-down"
              data-aos-duration="500"
            >
              <h1 className="p-10 ">
                Gausah keseringan mikir yang tidak seharusnya yah
              </h1>
            </div>
            <div
              className="w-full h-28 bg-green-400 rounded-lg shadow-md hover:bg-green-300 font-semibold flex text-center justify-center items-center text-xl"
              data-aos="fade-left"
              data-aos-duration="500"
            >
              <h1 className="p-10 ">Coba deh klik box dibawah ini</h1>
            </div>
            <button
              className="transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 duration-300 mb-60"
              onClick={modalHandler}
            >
              <img
                src="/assets/image/kado1.png"
                alt=""
                className="img w-60 h-60 "
                data-aos="zoom-in"
                data-aos-duration="500"
              />
            </button>
            <Modal trigger={open} />
          </div>
        </div>
      </div>
    </>
  );
}
