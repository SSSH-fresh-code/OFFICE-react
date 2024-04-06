import { motion } from "framer-motion";
import NotYetIcon from "../../../shared/icons/notyet";

export default function EmptyAlarms() {
  return <motion.div
    key="EmptyAlarms"
    transition={{ duration: 0.3 }}
    initial={{
      opacity: 0,
      y: 20
    }}
    animate={{
      transition: { delay: 0.2, duration: 0.5 },
      opacity: 1,
      y: 0
    }}
    whileHover={{ scale: 1.02 }}
    className="flex-shrink-0 w-full h-56 bg-white border-gray-100 border rounded-lg shadow-md p-4 flex justify-center items-center flex-col gap-2"
  >
    <NotYetIcon w="30px" h="30px" />
    <h3 className="font-bold text-lg mb-2">
      알람이 없습니다.
    </h3>
    <p
      className="text-sm text-gray-500"
    >착실하군요...</p>
  </motion.div>;
}
