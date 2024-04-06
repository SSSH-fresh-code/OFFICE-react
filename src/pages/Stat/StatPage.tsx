import { AnimatePresence } from "framer-motion";
import Alarms from "../../widgets/Stat/Alarms/Alarms";
import Works from "../../widgets/Stat/Work/Works";

function StatPage() {

  return (
    <AnimatePresence key="StatPage">
      <div className="flex flex-col">
        <Alarms />
        <Works />
      </div >
    </AnimatePresence >
  )
}

export default StatPage;



