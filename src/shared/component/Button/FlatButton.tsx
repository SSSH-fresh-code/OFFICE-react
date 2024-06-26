import { motion } from "framer-motion";
import React from "react";

interface FlatButtonProps {
  type: "submit" | "reset" | "button" | undefined;
  text?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  disabled?: boolean;
}
export default function FlatButton({ children, type, text, onClick, disabled, className = "bg-black" }: FlatButtonProps) {
  return <motion.button
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.96 }}
    className={"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 px-4 py-2 w-full h-10  text-white " + className}
    type={type}
    onClick={onClick}
    disabled={disabled}
    key={className + type + text || children?.toString()}
  >
    {text}
    {children}
  </motion.button>;
}
