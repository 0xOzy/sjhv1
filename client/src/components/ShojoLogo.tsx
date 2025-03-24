import { motion } from "framer-motion";
import BinaryText from "./BinaryText";

export default function ShojoLogo() {
  return (
    <motion.h1 
      className="text-2xl font-bold font-display text-white"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <BinaryText className="text-neon-blue">Shojo</BinaryText>
    </motion.h1>
  );
}
