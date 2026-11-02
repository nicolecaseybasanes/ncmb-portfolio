import { motion } from 'framer-motion';

export default function TextReveal({ text, className, delay = 0 }) {
  // Hahatiin natin sa words para hindi mabali sa gitna ang mga salita
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className={`flex flex-wrap justify-center ${className}`}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="flex mr-[0.25em]">
          {Array.from(word).map((char, charIndex) => (
            <motion.span variants={child} key={charIndex}>
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  );
}