import { motion } from 'framer-motion';

import { splitText } from '../../../utils';

export default function AnimatedText({ text }) {
  const characters = splitText(text);

  return (
    <div>
      {characters.map(({ char, index }) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
}
