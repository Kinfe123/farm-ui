import { useEffect , useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
type RotatedString = {
    rotatedString: string[]
    className?:string
}

export default function RotateText({rotatedString , className}: RotatedString) {
  const words = rotatedString;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, []);
  return (
    <AnimatePresence mode="wait">
      <motion.h1
        key={words[index]}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className={cn(className , "inline text-center tracking-[-0.02em] drop-shadow-sm md:leading-[5rem]")}
      >
        {words[index]}
      </motion.h1>
    </AnimatePresence>
  );
}
