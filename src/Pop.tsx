import usePopSotre from "./data/store/pop.store";
import { motion } from "framer-motion"
import InfoIcon from "./shared/icons/info.icon";
import ErrorIcon from "./shared/icons/error.icon";

export function Pop() {
  const { message, type, disappear, onResolved } = usePopSotre();

  return (
    <>
      <div
        className={`absolute top-0 left-0 z-30 bg-white opacity-30 w-screen h-screen flex justify-center items-center overflow-hidden touch-none`}
      />
      <motion.div
        className={`absolute top-0 left-0 z-40 bg-transparent w-screen h-screen flex justify-center items-center`}
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, type: "spring" }}
      >
        <div className="w-[400px] rounded-lg border-2 bg-card text-card-foreground shadow-sm bg-white" data-v0-t="card">
          <div className="flex  space-y-1.5 p-6 flex-col items-center">
            <h3 className="font-semibold whitespace-nowrap tracking-tight text-2xl">
              {type === "info" ? <InfoIcon w="50px" h="50px" /> : <ErrorIcon w="50px" h="50px" />}
            </h3>
          </div>
          <div className="text-center">{message}</div>
          <div className="flex justify-center items-center p-6 pt-12">
            <button
              onClick={async () => {
                await onResolved();
                await disappear();
              }}
              className={`bg-white  ${type === "info" ? "border-blue-300" : "border-red-300"} border-2 shadow-sm flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2`}
            >
              확인
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}
