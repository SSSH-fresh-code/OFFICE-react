import { useSearch } from "@tanstack/react-router";
import useGetAlarmListQuery from "../../../data/Alarms/alarms.list.get"
import { AnimatePresence } from "framer-motion";
import AlarmList from "../../Alarms/list/AlarmList";

export default function AuthsAlarmListPage() {

  const search = useSearch({ from: "" });
  const page = search.page || 1;

  const query = useGetAlarmListQuery(page);

  return (
    <AnimatePresence key="AlarmsListPage">
      <AlarmList query={query} pathPrefix="/auths/alarms/" />
    </AnimatePresence>
  )
}

