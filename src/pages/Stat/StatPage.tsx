import AlarmBox from "../../widgets/Stat/Alarm/AlarmBox";
import { AnimatePresence } from "framer-motion";
import { TodayWork } from "../../widgets/Stat/Work/TodayWork";
import { RecentWorks } from "../../widgets/Stat/Work/RecentWorks";

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
          <RecentWorks />
        </div>
      </div >
    </AnimatePresence >
  )
}

export default StatPage;