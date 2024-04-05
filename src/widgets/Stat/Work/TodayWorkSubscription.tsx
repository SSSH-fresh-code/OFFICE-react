import { motion } from "framer-motion";
import React from "react";

export function TodayWorkSubscription({ children }: { children: React.ReactNode; }) {
  return <motion.p
    className="text-sm text-muted-foreground text-gray-400 font-light"
    transition={{ duration: 0.5 }}
    initial={{
      opacity: 0,
    }}
    animate={{
      opacity: 1,
    }}
    exit={{
      opacity: 0
    }}
  >
    {children}
  </motion.p>;
}
