import { motion } from "framer-motion";

interface SummaryBoxProps {
  order?: number;
}
export default function SummaryBox({ order = 1 }: SummaryBoxProps) {

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
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="h-12 w-12 mb-4"
      >
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </svg>
      <h3 className="font-bold text-lg mb-2">승인 요청 계정 <span className="underline mr-1">3</span>건</h3>
      <p className="text-sm text-gray-500">현재 미승인된 계정이 존재합니다.<br />해당 버튼을 눌러 미승인된 계정들 검토해주세요.</p>
    </motion.div>
  )
}