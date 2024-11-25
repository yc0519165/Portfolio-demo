import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

export const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full h-[300px] flex-col md:flex-row flex items-start justify-between bg-black md:p-36 p-9 selection:bg-gray-500">
        <div className="flex gap-7">
          <p
            onClick={() => navigate("/project")}
            className="text-[#fff] font-roboto font-medium cursor-pointer"
          >
            PROJECTS
          </p>
          <p
            onClick={() => navigate("/about")}
            className="text-[#fff] font-roboto font-medium cursor-pointer"
          >
            ABOUT
          </p>
          <p
            onClick={() => navigate("/contact")}
            className="text-[#fff] font-roboto font-medium cursor-pointer"
          >
            CONTACT
          </p>
        </div>
        <div className="flex flex-col">
          <span className="text-[#fff] text-sm font-roboto font-medium mb-4">
            yc0519165@gmail.com
          </span>
          <span className="text-[#fff] text-sm font-roboto font-medium">
            +91 1234567890
          </span>
        </div>
        <div>
          <img
            onClick={() => navigate("/")}
            className="cursor-pointer"
            src={assets.menu_logo}
            alt=""
          />
        </div>
      </div>
    </>
  );
};
