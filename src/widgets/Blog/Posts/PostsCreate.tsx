import React, { useEffect, useState } from "react";
import { CreatePostItem, SeriesSelectItem } from "@sssh-fresh-code/types-sssh";
import useGetAllTopicsQuery from "../../../data/Blog/Topics/topics.all.get";
import { Select } from "../../../shared/component/Form/Select";
import { Input } from "../../../shared/component/Form/Input";
import FlatButton from "../../../shared/component/Button/FlatButton";
import useGetAllSeriesMutation from "../../../data/Blog/Series/series.all.get";
import TextArea from "../../../shared/component/Form/TextArea";
import { marked } from "marked";
import usePostPostsMutation from "../../../data/Blog/Posts/posts.post";

export default function PostsCreate() {
  const [dto, setDto] = useState<CreatePostItem>();
  const [isPreview, setIsPreview] = useState<boolean>(false);
  const [contents, setContents] = useState<string>("");
  const [topicId, setTopicId] = useState<number>(0);
  const [series, setSeries] = useState<SeriesSelectItem[]>([]);

  const topics = useGetAllTopicsQuery();
  const seriesMutation = useGetAllSeriesMutation(topicId, setSeries);

  const postsMutation = usePostPostsMutation(dto);

  const submit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const title = e.currentTarget.title_.value;
    const description = e.currentTarget.description.value;
    const topicId = e.currentTarget.topicId.value;
    const seriesId = e.currentTarget.seriesId.value;

    const dto: CreatePostItem = {
      title,
      description,
      contents,
      topicId
    }

    if (seriesId) dto.seriesId = seriesId;

    setDto(dto);

    await postsMutation.mutate();
  }

  useEffect(() => {
    if (topicId) seriesMutation.mutate();
  }, [topicId])

  return <div className="px-2 py-10 flex flex-col items-center justify-center bg-white text-black">
    <form className="w-full max-w-2xl space-y-4" onSubmit={submit}>
      <Input
        title="제목"
        id="title_"
        type="text"
        option={{ required: true, min: 2, max: 300 }}
      />
      <Select
        title="주제"
        id="topicId"
        option={{ required: true }}
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
        option={{ required: false }}
      >
        <option value="">시리즈를 선택해주세요.</option>
        {
          series.map((t, idx) => (
            <option value={t.id} key={idx}>{t.name}</option>
          ))
        }
      </Select>
      <TextArea title="설명" id="description" rows={3} />
      {
        isPreview
          ? <div dangerouslySetInnerHTML={{ __html: marked.parse(contents) }} />
          : <TextArea title="내용" id="contents" rows={20} setter={setContents} />
      }

      <FlatButton text="미리보기" type="button" onClick={() => setIsPreview(!isPreview)} />
      <FlatButton text="저장" type="submit" className="bg-blue-500" />
    </form>
  </div>;
}


