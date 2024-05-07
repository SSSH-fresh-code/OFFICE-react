import { useState } from "react";
import Tabs from "../../../shared/component/Tabs/Tabs";
import TabBtn from "../../../shared/component/Tabs/TabBtn";
import SeriesListByTopic from "./SeriesListByTopic";
import PostsByTopic from "./PostsByTopic";

interface TopicTabsProps {
  name: string;
}

export default function TopicTabs({ name }: TopicTabsProps) {
  const [tabIdx, setTabIdx] = useState<0 | 1>(0);

  return (
    <>
      <Tabs>
        <TabBtn
          isActive={tabIdx === 0}
          onClick={() => setTabIdx(0)}
        >
          해당 주제의 시리즈
        </TabBtn>
        <TabBtn
          isActive={tabIdx === 1}
          onClick={() => setTabIdx(1)}
        >
          해당 주제의 게시글
        </TabBtn>
      </Tabs>
      {
        tabIdx === 0 && (
          <SeriesListByTopic name={name} />
        )
      }
      {
        tabIdx === 1 && (
          <PostsByTopic name={name} />
        )
      }
    </>
  );
}
