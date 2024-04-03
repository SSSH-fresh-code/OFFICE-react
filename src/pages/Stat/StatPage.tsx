import AlarmBox from "../../widgets/Stat/AlarmBox";
import { AnimatePresence, motion } from "framer-motion";
import WorkCheckIcon from "../../shared/icons/workCheck.icon";
import WorkXIcon from "../../shared/icons/workX.icon";
import WorkingIcon from "../../shared/icons/working.icon";
import NotYetIcon from "../../shared/icons/notyet";
import { TodayWork } from "./TodayWork";

function StatPage() {

  return (
    <AnimatePresence>
      <div className="flex flex-col">
        <div className="flex overflow-x-auto gap-4 p-4 bg-gray-100 mb-3">
          <AlarmBox icon="Certification" path="/users/cert" title="승인 요청 계정 !!3!!건" contents="현재 미승인된 계정이 존재합니다.\n해당 버튼을 눌러 미승인된 계정들 검토해주세요." />
          <AlarmBox order={2} icon="GoToWork" path="#goToWork" title="아직 출근 전이네요" contents="업무 준비 후 출근 버튼을 눌러주세요." />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <TodayWork />

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
      </div >
    </AnimatePresence >
  )
}

export default StatPage;


