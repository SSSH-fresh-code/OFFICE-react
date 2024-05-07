import { useEffect, useRef, useState } from "react";
import useGetSeriesQuery from "../../../data/Blog/Series/series.get";
import FlatButton from "../../../shared/component/Button/FlatButton";
import { Input } from "../../../shared/component/Form/Input";
import { Select } from "../../../shared/component/Form/Select";
import useGetAllTopicsQuery from "../../../data/Blog/Topics/topics.all.get";
import usePopSotre from "../../../data/store/pop.store";
import { UpdateSeriesDto } from "@sssh-fresh-code/types-sssh";
import useDeleteSeriesMutation from "../../../data/Blog/Series/series.delete";
import usePatchSeriesMutation from "../../../data/Blog/Series/series.patch";
import PostsBySeries from "./PostsBySeries";

export default function SeriesDetail({ seriesId }: { seriesId: number }) {
  const [id, setId] = useState<number>(0);
  const [dto, setDto] = useState<UpdateSeriesDto>();
  const [isModify, setIsModify] = useState<boolean>(false);

  const { pop } = usePopSotre();
  const topicRef = useRef<HTMLSelectElement>(null);

  const topics = useGetAllTopicsQuery();
  const { isSuccess, data } = useGetSeriesQuery(seriesId);
  const seriesPatchMutation = usePatchSeriesMutation(dto);
  const deleteSeries = useDeleteSeriesMutation(id);

  useEffect(() => {
    if (topics.isSuccess && topics.data && data && isSuccess) {
      topicRef.current!.value = data.topic.id.toString();
    }
  }, [topics.isSuccess, topics.data, data, isSuccess]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    if (!isSuccess || !data) return;
    e.preventDefault();

    const name = e.currentTarget.name_.value;
    const topicId = e.currentTarget.topicId.value;

    const updateDto: UpdateSeriesDto = {
      id: data.id,
      name,
      topicId: parseInt(topicId)
    }

    setDto(updateDto);

    await seriesPatchMutation.mutate();
  }

  const handleModify = () => {
    setIsModify(!isModify);
  }

  const handleDelete = () => {
    if (!data) return;
    setId(data.id);
    pop("해당 시리즈를 삭제하시겠습니까?", "info", () => deleteSeries.mutate(), true);
  }

  return (
    <>
      {
        isSuccess && data && (
          <>
            <div
              className="w-full bg-gray-50 p-6 rounded-lg shadow mb-3"
            >
              <form id="topicDetailForm" className="space-y-4" onSubmit={handleSubmit}>
                <Select
                  title="주제"
                  id="topicId"
                  option={{ required: true, readonly: !isModify, ref: topicRef }}
                >
                  <option value="">주제를 선택해주세요.</option>
                  {
                    topics.isSuccess && topics.data && topics.data.map((t, idx) => (
                      <option value={t.id} key={idx}>{t.name}</option>
                    ))
                  }
                </Select>
                <div className="grid grid-cols-2 gap-4">
                  <Input className="!col-span-1" title="시리즈명" id="name_" defaultValue={data.name} option={{ readonly: !isModify }} />
                  <Input className="!col-span-1" title="게시글 개수" id="posts" defaultValue={data.postsCnt} option={{ readonly: true }} />
                </div>
                <div className="flex flex-col justify-end gap-3 lg:flex-row">
                  {
                    isModify
                      ?
                      (<>
                        <FlatButton text="저장" type="submit" className="w-full lg:w-1/12 bg-blue-500" />
                        <FlatButton text="취소" type="button" className="w-full lg:w-1/12 bg-black" onClick={handleModify} />
                      </>)
                      : (
                        <>
                          <FlatButton text="수정" type="button" className="w-full lg:w-1/12 bg-blue-500" onClick={handleModify} />
                          <FlatButton text="삭제" type="button" className="w-full lg:w-1/12 bg-red-500" disabled={data.postsCnt > 0} onClick={handleDelete} />
                        </>
                      )
                  }
                </div>
              </form>
            </div>
            {
              isSuccess && data && (
                <PostsBySeries id={data.id} />
              )
            }
          </>
        )
      }
    </>
  );
}