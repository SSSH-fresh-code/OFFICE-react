import { motion } from "framer-motion";
import WorkingIcon from "../../shared/icons/working.icon";
import { Loading } from "../../shared/component/Loading";
import { getDate } from "../../shared/util/date.util";
import useGetWorksQuery from "../../data/Work/work.get";
import usePostWorkMutation from "../../data/Work/work.post";
import TodayGoToWork from "./TodayGoToWork";
import WorkCheckIcon from "../../shared/icons/workCheck.icon";
import TodayWorkBtn from "./TodayWorkBtn";
import WriteIcon from "../../shared/icons/write.icon";
import { useState } from "react";
import usePatchWorkMutation from "../../data/Work/work.patch";

export function TodayWork() {
  const [workDetail, setWorkDetail] = useState<string>("");
  const [off, setOff] = useState<boolean>(false);

  const today = getDate();
  const { isPending, isSuccess, data, refetch } = useGetWorksQuery(today, today);
  const postWorkMutation = usePostWorkMutation(() => { refetch() });
  const patchWorkMutation = usePatchWorkMutation(off, workDetail, () => { refetch() });

  return <motion.div
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
    <div id="goToWork" className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
      {isPending && (
        <TodayGoToWork subtitle="오늘 출근 기록을 확인하는 중이에요!">
          <Loading />
        </TodayGoToWork>
      )}
      {
        (isSuccess && data.length === 0) && (
          <TodayGoToWork subtitle="출근 버튼을 눌러 업무를 시작하세요!">
            <TodayWorkBtn className="grid-cols-1 bg-black" onClick={() => postWorkMutation.mutate()}>
              <span><WorkingIcon /></span>
              <span>출근하기</span>
            </TodayWorkBtn>
          </TodayGoToWork>
        )
      }
      {
        (isSuccess && data[0] && !data[0].offTime) && (
          <TodayGoToWork subtitle="업무를 기록하거나 퇴근할 수 있어요.">
            <textarea
              id="workDetail"
              className=" border-2 border-gray-300 flex col-span-2 w-full rounded-md border-input bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 p-4 min-h-[200px]"
              placeholder="업무 내용을 기록하세요!"
              onChange={(e) => setWorkDetail(e.target.value)}
              defaultValue={data[0].workDetail}
            ></textarea>
            <div className="grid gap-2 grid-cols-2 mt-3">
              <TodayWorkBtn className="grid-cols-1 bg-gray-500" onClick={async () => {
                setOff(false)
                patchWorkMutation.mutate();
              }}>
                <span><WriteIcon /></span>
                <span>기록하기</span>
              </TodayWorkBtn>
              <TodayWorkBtn className="grid-cols-1 bg-gray-900 font-black" onClick={async () => {
                setOff(true)
                patchWorkMutation.mutate();
              }}>
                <span><WorkCheckIcon /></span>
                <span>퇴근하기</span>
              </TodayWorkBtn>
            </div>
          </TodayGoToWork>
        )
      }
      {
        (isSuccess && data[0] && data[0].offTime) && (
          <TodayGoToWork subtitle="오늘 업무는 이미 마쳤어요.">
            <div className="col-span-1 px-4 py-8 flex flex-col gap-3 bg-gray-500 rounded-md font-extrabold text-white text-lg items-center">
              <span><WorkCheckIcon /></span>
              <span>고생하셨어요!</span>
            </div>
          </TodayGoToWork>
        )
      }
    </div>
  </motion.div >;
}


