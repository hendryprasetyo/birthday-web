import React from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const index = () => {
  AOS.init();
  return (
    <>
      <div className="bg-index bg-center bg-fixed bg-150%">
        <div
          className="w-full h-screen flex justify-center items-center"
          data-aos="zoom-out-down"
        >
          <div className=" w-11/12 h-80 bg-gray-400 border rounded-lg shadow-md hover:bg-gray-300 dark:border-gray-700 transition flex justify-center">
            <div className="flex justify-center items-center flex-col">
              <div className="text-2xl text-gray-900 mt-5 -mb-5 bg-green-300 px-3 py-2 rounded-xl">
                <h2>Ada ucapan digital nih</h2>
              </div>
              <div className="transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 duration-300 ">
                <Link to={"/box"}>
                  <img
                    src="/assets/image/amplop.png"
                    alt=""
                    className="animate-shake w-60 h-60 "
                  />
                </Link>
              </div>
              <h2 className="text-gray-900 text-xl  mb-5 -mt-5 bg-yellow-300 px-4 py-1 rounded-xl">
                Coba deh kamu click
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
