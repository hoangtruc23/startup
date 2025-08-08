"use client"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation";
import ArtistContentCreation from "./components/artist-content-creation";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="mx-25">
        <div className="screen-center h-[calc(100vh-150px)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center "
          >
            <div className="text-center">
              <TypeAnimation
                sequence={[
                  'Transforming',
                  500,
                  'Transforming Ideas',
                  500,
                  'Transforming Ideas into',
                  500
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-H1 color-main"
              />
              <h2 className="text-H1">Digital Excellence</h2>
              <p className="text-3xl tracking-wider w-1/2 my-20 m-auto">We build cutting-edge software solutions that drive innovation, enhance user experiences, and accelerate business growth.</p>
            </div>

          </motion.div>
          <div className="flex gap-5">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <Button className="bg-main dark:text-gray-200 p-6">Start Your Project</Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center "
            >
              <Button variant="outline" className="p-6">View Our Work</Button>
            </motion.div>
          </div>
        </div>
        <ArtistContentCreation />
      </div>
    </>
  );
}