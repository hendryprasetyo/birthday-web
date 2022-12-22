import React from "react";
import { Link } from "react-router-dom";
import "../components/styles/index.css";

function Card() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className=" w-11/12 h-80 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex justify-center">
        <div className="flex justify-center items-center">
          <div className="transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 duration-300 ">
            <Link to={"/box"}>
              <img
                src="/assets/image/kado1.png"
                alt=""
                className="img w-52 h-52"
              />
            </Link>
          </div>
          <h1 className="text-white absolute">asdasd</h1>
        </div>
      </div>
    </div>
  );
}

export default Card;
