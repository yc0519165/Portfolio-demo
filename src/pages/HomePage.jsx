import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-[87vh] w-screen bg-[#000] selection:text-gray-400 flex flex-col items-center justify-center text-[#fff]">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-8xl w-[50%] sm:w-full text-center font-main font-normal mb-3"
        >
          YUVRAJ CHAVHAN
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl w-[50%] sm:w-full text-center font-main1 tracking-main1"
        >
          Frontend-Developer
        </motion.p>
      </div>
      <div className="h-auto w-full selection:bg-gray-500 flex flex-col items-center justify-center">
        <div className="w-full sm:w-[42%] px-4 py-12 flex flex-col gap-3">
          <h2 className="text-2xl sm:text-3xl font-bold font-main1">
            About me
          </h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum.
          </p>
        </div>
        <div className="w-full sm:w-[42%] ml-14 px-4 flex flex-col gap-3">
          <h2 className="text-3xl font-bold font-main1">My Skills</h2>
          <div className="grid grid-cols-5 grid-rows-5 gap-8  ">
            <div className="flex items-center gap-3">
              <img className="w-[20%]" src={assets.html_logo} />
              <p className="text-base font-medium font-roboto">HTML</p>
            </div>
            <div className="flex items-center gap-3">
              <img className="w-[20%]" src={assets.css_logo} />
              <p className="text-base font-medium font-roboto">CSS</p>
            </div>
            <div className="flex items-center gap-3">
              <img className="w-[20%]" src={assets.javaScript_logo} />
              <p className="text-base font-medium font-roboto">JavaScript</p>
            </div>
            <div className="flex items-center gap-3">
              <img className="w-[20%]" src={assets.react_logo} />
              <p className="text-base font-medium font-roboto">React</p>
            </div>
            <div className="flex items-center gap-3">
              <img className="w-[20%]" src={assets.node_logo} />
              <p className="text-base font-medium font-roboto">Node JS</p>
            </div>
            <div className="flex items-center gap-3">
              <img className="w-[20%]" src={assets.figma_logo} />
              <p className="text-base font-medium font-roboto">Figma</p>
            </div>
            <div className="flex items-center gap-3">
              <img className="w-[20%]" src={assets.google_logo} />
              <p className="text-base font-medium font-roboto">Chrome</p>
            </div>
            <div className="flex items-center gap-3">
              <img className="w-[20%]" src={assets.vscode_logo} />
              <p className="text-base font-medium font-roboto">VS Code</p>
            </div>
            <div className="flex items-center gap-3">
              <img className="w-[20%]" src={assets.git_logo} />
              <p className="text-base font-medium font-roboto">Git</p>
            </div>
            <div className="flex items-center gap-3">
              <img className="w-[20%]" src={assets.npm_logo} />
              <p className="text-base font-medium font-roboto">NPM</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center mb-5 selection:bg-gray-500">
        <div className=" grid grid-cols-3 grid-rows-1 gap-8">
          <div className="w-80 p-3 h-96 flex flex-col gap-3 border rounded-md transition-[1s] hover:-translate-y-8 hover:shadow-lg">
            <img
              className="rounded-t-md grayscale transition-[0.10s] hover:grayscale-0"
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
          <div className="w-80 p-3 h-96 flex flex-col gap-3 border rounded-md transition-[1s] hover:-translate-y-8 hover:shadow-lg">
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
          <div className="w-80 p-3 h-96 flex flex-col gap-3 border rounded-md transition-[1s] hover:-translate-y-8 hover:shadow-lg">
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
      <div className="w-full p-5 mb-5 flex gap-4 items-center justify-center selection:bg-gray-500">
        <button
          onClick={() => navigate("/project")}
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            More Projects
          </span>
        </button>
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
