import { useState } from "react";
import useGetTopicQuery from "../../../data/Blog/Topics/topic.get";
import usePopSotre from "../../../data/store/pop.store";
import FlatButton from "../../../shared/component/Button/FlatButton";
import { Input } from "../../../shared/component/Form/Input";
import TopicTabs from "./TopicTabs";
import useDeleteTopicsMutation from "../../../data/Blog/Topics/topics.delete";

interface TopicDetailProps {
  name: string;
}

export default function TopicsDetail({ name }: TopicDetailProps) {
  const [id, setId] = useState<number>(0);
  const { isSuccess, data } = useGetTopicQuery(name);
  const { pop } = usePopSotre();

  const deleteTopic = useDeleteTopicsMutation(id);

  const handleDelete = () => {
    if (!data) return;

    setId(data.id);

    pop("해당 토픽을 삭제하시겠습니까?", "info", () => deleteTopic.mutate(), true);
  }

  return (
    <>
      {
        isSuccess && data && (
          <>
            <div
              className="w-full bg-gray-50 p-6 rounded-lg shadow"
            >
              <form id="topicDetailForm" className="space-y-4">
                <Input title="주제명" id="name" value={data.name} option={{ readonly: true }} />
                <div className="grid grid-cols-2 gap-4">
                  <Input className="!col-span-1" title="시리즈 개수" id="series" value={data.seriesCnt} option={{ readonly: true }} />
                  <Input className="!col-span-1" title="게시글 개수" id="posts" value={data.postsCnt} option={{ readonly: true }} />
                </div>
                <div className="flex justify-end">
                  <FlatButton text="삭제" type="button" className=" w-1/12 bg-red-500" disabled={data.seriesCnt > 0 || data.postsCnt > 0} onClick={handleDelete} />
                </div>
              </form>
            </div>
            <TopicTabs name={data.name} />
          </>
        )
      }
    </>
  );
}