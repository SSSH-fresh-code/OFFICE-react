import { useEffect, useRef, useState } from "react";
import FlatButton from "../../../shared/component/Button/FlatButton";
import { Input } from "../../../shared/component/Form/Input";
import { Select } from "../../../shared/component/Form/Select";
import useGetAllTopicsQuery from "../../../data/Blog/Topics/topics.all.get";
import usePopSotre from "../../../data/store/pop.store";
import { SeriesSelectItem, UpdatePostItem } from "@sssh-fresh-code/types-sssh";
import useGetPostQuery from "../../../data/Blog/Posts/post.get";
import useGetAllSeriesMutation from "../../../data/Blog/Series/series.all.get";
import TextArea from "../../../shared/component/Form/TextArea";
import usePatchPostsMutation from "../../../data/Blog/Posts/posts.patch";
import useDeletePostsMutation from "../../../data/Blog/Posts/posts.delete";

export default function PostsDetail({ title }: { title: string }) {
  const [id, setId] = useState<number>(0);
  const [topicId, setTopicId] = useState<number>(0);
  const [series, setSeries] = useState<SeriesSelectItem[]>([]);
  const [dto, setDto] = useState<UpdatePostItem>();
  const [isModify, setIsModify] = useState<boolean>(false);

  const { pop } = usePopSotre();
  const topicRef = useRef<HTMLSelectElement>(null);
  const seriesRef = useRef<HTMLSelectElement>(null);

  const topics = useGetAllTopicsQuery();
  const seriesMutation = useGetAllSeriesMutation(topicId, setSeries);
  const postsMutation = usePatchPostsMutation(dto);

  const deletePosts = useDeletePostsMutation(id);
  const { isSuccess, data } = useGetPostQuery(title);

  useEffect(() => {
    if (topics.isSuccess && topics.data && data && isSuccess) {
      topicRef.current!.value = data.topic.id.toString();
      setTopicId(data.topic.id);
    }
  }, [topics.isSuccess, topics.data, data, isSuccess]);

  useEffect(() => {
    if (data && isSuccess && data.series) {
      seriesRef.current!.value = data.series.id.toString();
    }
  }, [series]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    if (!isSuccess || !data) return;
    e.preventDefault();

    const title = e.currentTarget.title_.value;
    const description = e.currentTarget.description.value;
    const topicId = e.currentTarget.topicId.value;
    const seriesId = e.currentTarget.seriesId.value;
    const contents = e.currentTarget.contents.value;

    const updateDto: UpdatePostItem = {
      id: data.id,
      title,
      description,
      contents,
      topicId: parseInt(topicId),
      seriesId: seriesId ? parseInt(seriesId) : undefined
    }

    setDto(updateDto);

    await postsMutation.mutate();
  }

  const handleModify = () => {
    setIsModify(!isModify);
  }

  const handleDelete = () => {
    if (!data) return;
    setId(data.id);
    pop("해당 게시글을 삭제하시겠습니까?", "info", () => deletePosts.mutate(), true);
  }

  useEffect(() => {
    if (topicId) seriesMutation.mutate();
  }, [topicId])


  return (
    <>
      {
        isSuccess && data && (
          <>
            <div
              className="w-full bg-gray-50 p-6 rounded-lg shadow mb-3"
            >
              <form id="topicDetailForm" className="space-y-4" onSubmit={handleSubmit}>
                <Input
                  title="제목"
                  id="title_"
                  type="text"
                  defaultValue={data.title}
                  option={{ required: true, min: 2, max: 300, readonly: !isModify }}
                />
                <Select
                  title="주제"
                  id="topicId"
                  option={{ required: true, ref: topicRef, readonly: !isModify }}
                  setter={setTopicId}
                >
                  <option value="">주제를 선택해주세요.</option>
                  {
                    topics.isSuccess && topics.data && topics.data.map((t, idx) => (
                      <option value={t.id} key={idx}>{t.name}</option>
                    ))
                  }
                </Select>
                <Select
                  title="시리즈"
                  id="seriesId"
                  option={{ required: false, ref: seriesRef, readonly: !isModify }}
                >
                  <option value="">시리즈를 선택해주세요.</option>
                  {
                    series.map((t, idx) => (
                      <option value={t.id} key={idx}>{t.name}</option>
                    ))
                  }
                </Select>
                <TextArea title="설명" id="description" rows={3} defaultValue={data.description} option={{ readonly: !isModify }} />
                <TextArea title="내용" id="contents" rows={20} defaultValue={data.contents} option={{ readonly: !isModify }} />

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
                          <FlatButton text="삭제" type="button" className="w-full lg:w-1/12 bg-red-500" onClick={handleDelete} />
                        </>
                      )
                  }
                </div>
              </form>
            </div>
          </>
        )
      }
    </>
  );
}