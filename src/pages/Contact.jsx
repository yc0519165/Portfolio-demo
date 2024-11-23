import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";

export const Contact = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="scroll-smooth selection:bg-gray-500">
        <div className="h-[87vh] w-full bg-[#000] flex flex-col items-center justify-center text-[#fff]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-8xl text-center font-main font-normal mb-3">
              CONTACT ME
            </h1>
            <p className="text-2xl text-center font-main1 tracking-main1">
              SAY HELLO TO ME
            </p>
          </motion.div>
        </div>
        <div className=" px-36 py-24 flex flex-col gap-12">
          <h2 className="text-3xl font-bold font-main1">Contact me</h2>
          <div className="w-[95%] h-auto">
            <div className="flex mt-5 justify-center items-center gap-20">
              <div className="flex flex-col gap-4 border-b-2 border-black w-[470px] ">
                <label className="font-main1 font-bold text-base">Name</label>
                <input
                  type="text"
                  placeholder="Yuvraj Chavhan"
                  className="outline-0 w-full text-sm"
                />
              </div>
              <div className="flex flex-col gap-4 border-b-2 border-black w-[470px]">
                <label className="font-main1 font-bold text-base">Email</label>
                <input
                  type="text"
                  placeholder="yc0519165@gmail.com"
                  className="outline-0 w-full text-sm"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 border-b-2 border-black w-[95.5%]">
            <label className="font-main1 font-bold text-base">Nachricht</label>
            <input
              type="text"
              placeholder="Hello, my name is . . ."
              className="outline-0 w-full text-sm"
            />
          </div>
        </div>
        <div className="w-full p-5 mb-5 flex gap-4 items-center justify-center">
          <button
            onClick={() => navigate("/")}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Send Message
            </span>
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
};
