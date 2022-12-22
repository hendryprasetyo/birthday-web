import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
export default function Modal(props) {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  AOS.init();
  return props.trigger ? (
    <>
      <div
        className="fixed top-0 h-screen z-50 p-4 overflow-x-hidden overflow-y-auto"
        data-aos="zoom-in"
      >
        <div className="relative w-full h-full  max-w-md md:h-auto flex items-center">
          <div className="relative w-80 h-72 rounded-lg bg-[#f8e45c]">
            <div className="p-6 text-center">
              <div className="flex justify-center mt-[-20px]">
                <img
                  src="https://media.tenor.com/nSYuBMLsck8AAAAi/cute.gif"
                  alt=""
                  className="w-32"
                />
              </div>
              <h2 className="text-lg text-gray-800 font-medium  mt-4">
                Aku sayang banget sama kamu... maaf yah kalo akunya kurang
              </h2>
              <div className="flex justify-center">
                <button
                  type="button"
                  className="bg-[#2ec27e] text-white font-bold py-2 px-5 border-b-4 border-[#8ff0a4] hover:bg-purple-500 rounded-lg absolute bottom-5"
                  onClick={() => setOpen(!open)}
                >
                  Iyah
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {open && (
        <div
          className="fixed top-0 h-screen z-50 p-4 overflow-x-hidden overflow-y-auto"
          data-aos="zoom-in"
        >
          <div className="relative w-full h-full  max-w-md md:h-auto flex items-center">
            <div className="relative w-80 h-72 rounded-lg bg-[#57e389]">
              <div className="p-6 text-center">
                <div className="flex justify-center mt-[-20px]">
                  <img
                    src="https://media.tenor.com/dOruKWm4Vq8AAAAi/tease-annoy.gif"
                    alt=""
                    className="w-32"
                  />
                </div>
                <h2 className="text-lg text-gray-800 font-medium  mt-4">
                  Aku harap ulang tahun berikut nya aku bisa bikin web yang
                  lebih menarik dari ini yah
                </h2>
                <div className="flex justify-center">
                  <button
                    type="button"
                    className="bg-[#f6d32d] text-white font-bold py-2 px-5 border-b-4 border-purple-500 hover:bg-purple-500 rounded-lg absolute bottom-5"
                    onClick={() => setOpen2(!open2)}
                  >
                    I Hope so
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {open2 && (
        <div
          className="fixed top-0 h-screen z-50 p-4 overflow-x-hidden overflow-y-auto"
          data-aos="zoom-in"
        >
          <div className="relative w-full h-full  max-w-md md:h-auto flex items-center">
            <div className="relative w-80 h-72 rounded-lg bg-[#62a0ea]">
              <div className="p-6 text-center">
                <div className="flex justify-center mt-[-15px]">
                  <img
                    src="https://media.tenor.com/g8LwF4tAoAYAAAAi/bye-sticker-goodbye-sticker.gif"
                    alt=""
                    className="w-28"
                  />
                </div>
                <h2 className="text-lg text-gray-800 font-medium  mt-2">
                  maaf yah aku cuma bisa bikin ini, Kalo kamu mau nyampein
                  sesuatu kamu bisa klik tombol dibawah ini yah
                </h2>
                <div className="flex justify-center">
                  <button
                    type="button"
                    className="bg-[#ed333b] text-white font-bold py-2 px-5 border-b-4 border-purple-500 hover:bg-purple-500 rounded-lg absolute bottom-3"
                  >
                    <a href="https://api.whatsapp.com/send?phone=6288809773289&text=Iyah%20Aku%bt">
                      <button onclick="next()" class="btn1">
                        Iyah
                      </button>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  ) : (
    ""
  );
}
