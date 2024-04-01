import { useParams, useRouterState } from "@tanstack/react-router";
import SummaryBox from "../../widgets/Stat/SummaryBox";
import { AnimatePresence, motion } from "framer-motion";
import WorkCheckIcon from "../../shared/icons/workCheck.icon";
import WorkXIcon from "../../shared/icons/workX.icon";
import WorkingIcon from "../../shared/icons/working.icon";
import NotYetIcon from "../../shared/icons/notyet";

function StatPage() {
  const params = useParams({ strict: false });
  const pathname = useRouterState().location.pathname;

  return (
    <AnimatePresence>
      <div className="flex flex-col ">
        <div className="flex overflow-x-auto gap-4 p-4 bg-gray-100 mb-3">
          <SummaryBox />
          <SummaryBox order={2} />
          <SummaryBox order={3} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <motion.div
            transition={{ delay: 0.6, duration: 0.5 }}
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            className="lg:col-span-2"
          >
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
              <div className="flex flex-col space-y-1.5 p-6 pb-3">
                <h3 className="text-2xl font-light whitespace-nowrap leading-none tracking-wide">
                  출근하기
                </h3>
                <p className="text-sm text-muted-foreground text-gray-400 font-light">
                  오늘 아직 출근한 상태가 아니네요.
                  <br />아래 버튼을 눌러 출근해주세요!
                </p>
              </div>
              <div className="p-6">
                <div
                  dir="ltr"
                  className="relative overflow-hidden space-y-2"
                >
                  <div
                    data-radix-scroll-area-viewport=""
                    className="h-full w-full rounded-[inherit]"
                    style={{ overflow: "hidden" }}
                  >
                  </div>
                  <motion.div
                    className="cursor-pointer px-4 py-8 flex flex-col gap-3 bg-black rounded-md font-extrabold text-white text-lg items-center"
                    transition={{ duration: 0.3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span><WorkingIcon /></span>
                    <span>출근하기</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            transition={{ delay: 1.1, duration: 0.7 }}
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            className="lg:col-span-2"
          >
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
              <div className="flex flex-col space-y-1.5 p-6 pb-3">
                <h3 className="text-2xl font-light whitespace-nowrap leading-none tracking-tight">
                  최근 7일 출입기록
                </h3>
              </div>
              <div className="p-6">
                <div
                  dir="ltr"
                  className="relative overflow-hidden space-y-2"
                >
                  <div
                    data-radix-scroll-area-viewport=""
                    className="h-full w-full rounded-[inherit]"
                    style={{ overflow: "hidden" }}
                  >
                    <div className="flex flex-col gap-2">
                      <div className="p-4 flex justify-between bg-white rounded-md font-extrabold text-gray-500 text-lg items-center border-2 border-gray-500">
                        <span><NotYetIcon /></span>
                        <span>Not yet...</span>
                      </div>
                      <div className="p-4 flex justify-between bg-blue-500 rounded-md font-extrabold text-white text-lg items-center">
                        <span><WorkingIcon /></span>
                        <span>Working!</span>
                      </div>
                      <div className="p-4 flex justify-between bg-green-500 rounded-md font-extrabold text-white text-lg items-center">
                        <span><WorkCheckIcon /></span>
                        <span>Worked!<span className="text-xs font-light">(09:37~17:23)</span></span>
                      </div>
                      <div className="p-4 flex justify-between bg-gray-500 rounded-md font-extrabold text-white text-lg items-center">
                        <span><WorkXIcon /></span>
                        <span>Day off!</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence >
  )
}

export default StatPage;