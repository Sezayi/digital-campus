import "../styles/globals.css";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

function MyApp({ Component, pageProps, router }) {

  useEffect(() => {
    const threeScript = document.createElement("script");
    threeScript.setAttribute("id", "threeScript");
    threeScript.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
    );
    document.getElementsByTagName("head")[0].appendChild(threeScript);
    return () => {
      if (threeScript) {
        threeScript.remove();
      }
    };
  }, []);
  
  return (
    <AnimatePresence>
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        variants={{
          pageInitial: {
            opacity: 0,
            transition: {
              ease: "easeIn", duration: 1,
              delay: 1
           }
          },
          pageAnimate: {
            opacity: 1,
            transition: {
               ease: "easeIn", duration: 1,
               delay: 1
            }
          },
          pageExit: {
            opacity: 0,
            transition: {
               ease: "easeOut", duration: 1
            }
          },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
