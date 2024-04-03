import { motion } from "framer-motion";
import WriteIcon from "../../shared/icons/write.icon";
import React from "react";

interface TodayWorkBtn {
  onClick: () => void,
  className: string,
  children: React.ReactNode
}

export default function TodayWorkBtn({ onClick, className, children }: TodayWorkBtn) {
  return <motion.div
    className={"cursor-pointer px-4 py-8 flex flex-col gap-3 rounded-md font-extrabold text-white text-lg items-center " + className}
    transition={{ duration: 0.3 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
  >
    {children}
  </motion.div>;
}
