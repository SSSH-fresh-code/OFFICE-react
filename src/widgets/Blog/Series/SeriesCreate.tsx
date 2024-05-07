import React, { useState } from "react";
import { Input } from "../../../shared/component/Form/Input";
import { CreateSeriesDto } from "@sssh-fresh-code/types-sssh";
import FlatButton from "../../../shared/component/Button/FlatButton";
import usePostSeriesMutation from "../../../data/Blog/Series/series.post";
import { Select } from "../../../shared/component/Form/Select";
import useGetAllTopicsQuery from "../../../data/Blog/Topics/topics.all.get";

export default function SeriesCreate() {
  const [dto, setDto] = useState<CreateSeriesDto>({ topicId: -1, name: "" });

  const { isSuccess, data } = useGetAllTopicsQuery();
  const seriesMutation = usePostSeriesMutation(dto);

  const submit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const name = e.currentTarget.name_.value;
    const topicId = e.currentTarget.topicId.value;

    setDto({ name, topicId });

    await seriesMutation.mutate();
  }

  return <div className="px-2 py-10 flex flex-col items-center justify-center bg-white text-black">
    <form className="w-full max-w-lg space-y-4" onSubmit={submit}>
      <Select
        title="주제"
        id="topicId"
        option={{ required: true }}
      >
        <option value="">주제를 선택해주세요.</option>
        {
          isSuccess && data && data.map((t, idx) => (
            <option value={t.id} key={idx}>{t.name}</option>
          ))
        }
      </Select>
      <Input
        title="이름"
        id="name_"
        type="text"
        option={{ required: true, min: 2, max: 50 }}
      />
      <FlatButton text="저장" type="submit" />
    </form>
  </div>;
}


