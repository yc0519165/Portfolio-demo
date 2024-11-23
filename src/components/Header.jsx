import { useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { RxCross1 } from "react-icons/rx";

const DropdownMenu = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handelClickRemove = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <div className="flex w-full justify-between p-6 px-8 bg-black text-[#fff] selection:bg-gray-500">
      <div>
        <img
          onClick={() => navigate("/")}
          className="w-[60%] cursor-pointer"
          src={assets.menu_logo}
        />
      </div>
      <div className="relative inline-block w-full text-end">
        {/* Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          onClick={toggleMenu}
          className="inline-flex justify-center right-0 rounded-md mt-2 text-sm font-medium text-gray-700"
        >
          {!isOpen ? (
            <img className="w-[100%]" src={assets.menu_icon} />
          ) : (
            <RxCross1 className="text-[#fff] text-4xl" />
          )}
        </motion.button>

        {/* Dropdown content */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute h-[85vh] w-full  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden translate-x-10"
          >
            <div className="h-full w-full flex justify-center gap-96 px-10 py-14 items-center">
              <div className="relative bottom-[106px]">
                <p className="text-sm  text-black -rotate-90">MENU</p>
                <div className="absolute -top-5 left-10 flex flex-col gap-3 items-start">
                  <span
                    onClick={() => handelClickRemove("/")}
                    className="text-[#000] text-5xl font-roboto font-medium cursor-pointer"
                  >
                    HOME
                  </span>
                  <span
                    onClick={() => handelClickRemove("/project")}
                    className="text-[#000] text-5xl font-roboto font-medium cursor-pointer"
                  >
                    PROJECTS
                  </span>
                  <span
                    onClick={() => handelClickRemove("/about")}
                    className="text-[#000] text-5xl font-roboto font-medium cursor-pointer"
                  >
                    ABOUT
                  </span>
                  <span
                    onClick={() => handelClickRemove("/contact")}
                    className="text-[#000] text-5xl font-roboto font-medium cursor-pointer"
                  >
                    CONTACT
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-start gap-4">
                <span className="text-xl text-black font-roboto font-medium">
                  yc0519165@gmail.com
                </span>
                <span className="text-xl text-black font-roboto font-medium">
                  +91 123456789
                </span>
                <div className="text-[#000] flex gap-4 mt-10">
                  <img src={assets.inst_icon} alt="" />
                  <img src={assets.twitter_icon} alt="" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default DropdownMenu;
