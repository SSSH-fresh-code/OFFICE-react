import React, { useState } from "react";
import { Input } from "../../../shared/component/Form/Input";
import { CreateTopicDto } from "@sssh-fresh-code/types-sssh";
import usePostTopicMutation from "../../../data/Blog/Topics/topics.post";
import FlatButton from "../../../shared/component/Button/FlatButton";
import usePopSotre from "../../../data/store/pop.store";

export default function TopicsCreate() {
  const { pop } = usePopSotre();
  const [dto, setDto] = useState<CreateTopicDto>({ name: "" });

  const topicsMutation = usePostTopicMutation(dto);

  const submit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const name = e.currentTarget.name_.value;

    if (!name) return pop("이름을 입력해주세요.", "error");

    setDto({ name });

    await topicsMutation.mutate();
  }

  return <div className="px-2 py-10 flex flex-col items-center justify-center bg-white text-black">
    <form className="w-full max-w-lg space-y-4" onSubmit={submit}>
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


