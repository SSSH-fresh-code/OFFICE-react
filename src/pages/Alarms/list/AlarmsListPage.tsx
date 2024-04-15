import { useSearch } from "@tanstack/react-router";
import useGetAlarmListQuery from "../../../data/Alarms/alarms.list.get"
import { AnimatePresence } from "framer-motion";
import AlarmList from "./AlarmList";

export default function AlarmsListPage() {

  const search = useSearch({ from: "" });
  const page = search.page || 1;

  const query = useGetAlarmListQuery(page);

  return (
    <AnimatePresence key="AlarmsListPage">
      <AlarmList query={query} pathPrefix="/alarms/" />
    </AnimatePresence>
  )
}

