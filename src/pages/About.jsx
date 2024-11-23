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
          <h1 className="text-8xl text-center font-main font-normal mb-3">
            ABOUT ME
          </h1>
          <p className="text-2xl text-center font-main1 tracking-main1">
            IT’S A-ME, MARIO!
          </p>
        </motion.div>
      </div>
      <div className="h-auto w-full mt-7 flex flex-col items-center justify-center selection:bg-gray-500">
        <div className="w-[49%] px-4 pt-12 pb-6 flex flex-col gap-3">
          <h2 className="text-3xl font-bold font-main1">My Backbround</h2>
          <div className="flex flex-col gap-5">
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
            <p className="text-sm">
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua.
            </p>
            <p className="text-sm">
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
            <p className="text-sm">
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </p>
            <p className="text-sm">
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit
              esse molestie consequat, vel illum dolore eu feugiat nulla
            </p>
          </div>
        </div>
        <div className="w-[49%] px-4 py-12 flex flex-col gap-3">
          <h2 className="text-3xl font-bold font-main1">
            My Hobbies and Interests
          </h2>
          <div className="flex flex-col gap-5">
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
            <p className="text-sm">
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. <br /> Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
              accusam et justo duo dolores et ea rebum. Stet clita kasd
              gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
            <p className="text-sm">
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
