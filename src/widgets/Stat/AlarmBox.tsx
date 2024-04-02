import { motion } from "framer-motion";
import React from "react";
import { GoToWorkIcon } from "./GoToWorkIcon";
import AlarmBoxIconFactory from "./AlarmBoxIconFactory";
import { useNavigate } from "@tanstack/react-router";

interface SummaryBoxProps {
  order?: number;
  icon: string;
  title: string;
  contents: string;
  path?: string;
}

export default function AlarmBox({ order = 1, icon, title, contents, path }: SummaryBoxProps) {
  const navigate = useNavigate();
  if (!title && !contents && !icon) return <></>;

  const idxUnderline = title.indexOf("!!");

  let pathFunc = () => { };
  let titleComponent = (
    <h3 className="font-bold text-lg mb-2">
      {title}
    </h3>
  );

  if (idxUnderline > -1) {
    const startIdx = idxUnderline + 2;
    const endIdx = title.indexOf("!!", startIdx);

    const word = (
      <span className="underline mr-1">
        {title.substring(startIdx, endIdx)}
      </span>
    );

    titleComponent = (
      <h3 className="font-bold text-lg mb-2">
        {title.substring(0, startIdx).replace("!!", "")}
        {word}
        {title.substring(endIdx, title.length).replace("!!", "")}
      </h3>
    )
  }

  const contentComponent = (
    <p
      className="text-sm text-gray-500"
      dangerouslySetInnerHTML={{
        __html: contents.replace("\\n", "<br />")
      }}
    >
    </p>
  )

  if (path) {
    pathFunc = () => navigate({ to: path });
  }


  return (
    <motion.div
      transition={{ duration: 0.3 }}
      initial={{
        opacity: 0,
        x: 20
      }}
      animate={{
        transition: { delay: 0.2 * order, duration: 0.5 },
        opacity: 1,
        x: 0
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className=" cursor-pointer flex-shrink-0 w-64 h-56 bg-white border-gray-100 border rounded-lg shadow-md p-4"
      onClick={pathFunc}
    >
      <AlarmBoxIconFactory iconName={icon} />
      {titleComponent}
      {contentComponent}
    </motion.div>
  )
}


