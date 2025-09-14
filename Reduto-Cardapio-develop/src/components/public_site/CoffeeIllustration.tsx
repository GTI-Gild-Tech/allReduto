import { motion } from 'motion/react';
import svgPaths from "../../imports/logo";

export function CoffeeIllustration() {
  return (
    <motion.div 
      className="flex justify-center mb-16"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
    >
      <motion.div 
        className="md:w-[500px]  max-w-full w-[250px]"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <motion.svg 
          className="w-full h-full" 
          fill="none" 
          preserveAspectRatio="xMidYMid meet" 
          viewBox="0 0 663 455"
          initial={{ rotate: -5 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <g clipPath="url(#clip0_1_1169)">
            <g>
              <path d={svgPaths.p34ed4580} fill="#E4DDCD" />
              <path d={svgPaths.pc665b00} fill="#E4DDCD" />
              <path d={svgPaths.pdcc5180} fill="#E4DDCD" />
              <path d={svgPaths.p46fe500} fill="#E4DDCD" />
              <path d={svgPaths.p23d9ca80} fill="#E4DDCD" />
              <path d={svgPaths.p15e99a00} fill="#E4DDCD" />
              <path d={svgPaths.p10ace700} fill="#E4DDCD" />
            </g>
            <g>
              <path d={svgPaths.p1bdb7f00} fill="#E4DDCD" />
              <path d={svgPaths.p23493a00} fill="#E4DDCD" />
            </g>
            <path d={svgPaths.p895d200} fill="#C1A07B" />
          </g>
          <defs>
            <clipPath id="clip0_1_1169">
              <rect fill="white" height="455" width="663" />
            </clipPath>
          </defs>
        </motion.svg>
      </motion.div>
    </motion.div>
  );
}