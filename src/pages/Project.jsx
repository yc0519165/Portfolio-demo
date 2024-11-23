import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

export const Project = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-[87vh] w-full bg-[#000] flex flex-col items-center justify-center text-[#fff] selection:bg-gray-500">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-8xl font-main font-normal mb-3">MY PROJECTS</h1>
          <p className="text-2xl font-main1 tracking-main1">MADE WITH LOVE</p>
        </motion.div>
      </div>
      <div className="w-full flex items-center justify-center mt-16 mb-10 selection:bg-gray-500">
        <div className=" grid grid-cols-3 grid-rows-1 gap-12">
          <div className="w-80 p-3 flex flex-col gap-3 border rounded-md transition-[1s] hover:-translate-y-8 hover:shadow-lg">
            <img
              className=" rounded-t-md grayscale transition-[0.10s] hover:grayscale-0"
              src={assets.project_4}
              alt=""
            />
            <h1 className="mb-4 text-2xl font-medium font-roboto">
              My Projects
            </h1>
            <p className="text-sm font-roboto">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
              unde voluptatibus a at! Perferendis quae, exercitationem
              aspernatur est molestiae
            </p>
          </div>
          <div className="w-80 p-3 flex flex-col gap-3 border rounded-md transition-[1s] hover:-translate-y-8 hover:shadow-lg">
            <img
              className=" rounded-t-md grayscale transition-[0.10s] hover:grayscale-0"
              src={assets.project_5}
              alt=""
            />
            <h1 className="mb-4 text-2xl font-medium font-roboto">
              My Projects
            </h1>
            <p className="text-sm font-roboto">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
              unde voluptatibus a at! Perferendis quae, exercitationem
              aspernatur est molestiae
            </p>
          </div>
          <div className="w-80 p-3 flex flex-col gap-3 border rounded-md transition-[1s] hover:-translate-y-8 hover:shadow-lg">
            <img
              className=" rounded-t-md grayscale transition-[0.10s] hover:grayscale-0"
              src={assets.project_2}
              alt=""
            />
            <h1 className="mb-4 text-2xl font-medium font-roboto">
              My Projects
            </h1>
            <p className="text-sm font-roboto">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
              unde voluptatibus a at! Perferendis quae, exercitationem
              aspernatur est molestiae
            </p>
          </div>
          <div className="w-80 p-3 flex flex-col gap-3 border rounded-md transition-[1s] hover:-translate-y-8 hover:shadow-lg">
            <img
              className="h-[189px] rounded-t-md grayscale transition-[0.10s] hover:grayscale-0"
              src={assets.project_7}
              alt=""
            />
            <h1 className="mb-4 text-2xl font-medium font-roboto">
              My Projects
            </h1>
            <p className="text-sm font-roboto">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
              unde voluptatibus a at! Perferendis quae, exercitationem
              aspernatur est molestiae
            </p>
          </div>
          <div className="w-80 p-3 flex flex-col gap-3 border rounded-md transition-[1s] hover:-translate-y-8 hover:shadow-lg">
            <img
              className=" rounded-t-md grayscale transition-[0.10s] hover:grayscale-0"
              src={assets.project_8}
              alt=""
            />
            <h1 className="mb-4 text-2xl font-medium font-roboto">
              My Projects
            </h1>
            <p className="text-sm font-roboto">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
              unde voluptatibus a at! Perferendis quae, exercitationem
              aspernatur est molestiae
            </p>
          </div>
          <div className="w-80 p-3 flex flex-col gap-3 border rounded-md transition-[1s] hover:-translate-y-8 hover:shadow-lg">
            <img
              className=" rounded-t-md grayscale transition-[0.10s] hover:grayscale-0"
              src={assets.project_3}
              alt=""
            />
            <h1 className="mb-4 text-2xl font-medium font-roboto">
              My Projects
            </h1>
            <p className="text-sm font-roboto">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
              unde voluptatibus a at! Perferendis quae, exercitationem
              aspernatur est molestiae
            </p>
          </div>
        </div>
      </div>
      <div className="w-full p-5 mb-5 flex gap-4 items-center justify-center">
        <button
          onClick={() => navigate("/contact")}
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Contact Me
          </span>
        </button>
      </div>
      <Footer />
    </>
  );
};
