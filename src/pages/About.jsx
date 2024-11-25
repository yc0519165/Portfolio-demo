import { Footer } from "../components/Footer";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <>
      <div className="h-[87vh] w-full bg-[#000] flex flex-col items-center justify-center text-[#fff] selection:bg-gray-500">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="md:text-8xl text-7xl md:w-full  text-center font-main font-normal mb-3">
            ABOUT ME
          </h1>
          <p className="md:text-2xl text-xl md:w-full text-center font-main1 tracking-main1">
            IT’S A-ME, MARIO!
          </p>
        </motion.div>
      </div>
      <div className="h-auto w-full mt-7 flex flex-col items-center justify-center selection:bg-gray-500">
        <div className="md:w-[49%] w-full px-12 md:px-4 pt-12 pb-6 flex flex-col gap-3">
          <h2 className="md:text-3xl text-2xl font-bold font-main1">
            My Backbround
          </h2>
          <div className="flex flex-col gap-5">
            <p className="md:text-sm text-xs">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
            <p className="md:text-sm text-xs">
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua.
            </p>
            <p className="md:text-sm text-xs">
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
            <p className="md:text-sm text-xs">
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </p>
            <p className="md:text-sm text-xs">
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit
              esse molestie consequat, vel illum dolore eu feugiat nulla
            </p>
          </div>
        </div>
        <div className="md:w-[49%] w-full px-12 md:px-4 py-12 flex flex-col gap-3">
          <h2 className="md:text-3xl text-2xl font-bold font-main1">
            My Hobbies and Interests
          </h2>
          <div className="flex flex-col gap-5">
            <p className="md:text-sm text-xs">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
            <p className="md:text-sm text-xs">
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. <br /> Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
              accusam et justo duo dolores et ea rebum. Stet clita kasd
              gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
            <p className="md:text-sm text-xs">
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit
              esse molestie consequat, vel illum dolore eu feugiat nulla
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
