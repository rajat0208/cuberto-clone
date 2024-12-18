import { easeOut, useInView, motion } from "framer-motion";
import { Container,Text } from "@mantine/core";
import React , {useRef} from "react";


export default function MainConttenet (){
   

    const riseUp={
        hidden:{opacity:0,y:100},
        visible:{opacity:1,y:0,transition:{duration:1, ease:"easeout"}}
    }

    return(
        <Container  size="lg" className="h-screen flex flex-col justify-center">
            <motion.h1 className="text-6xl font-bold text-center leading-tight" variants={riseUp} initial="hidden" animate="visible">
            We are a digital {" "}
            <Text component="span" inherit className="text-pink-400 italic">
                design
            </Text>{" "}
            and motion agency
            </motion.h1>

            <motion.div className="w-24 bg-pink-400 rounded-full mt-6" variants={riseUp} initial="hidden" animate="visible" transition={{delay:0.5}}>

            </motion.div>
        </Container>
    )
}

