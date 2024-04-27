import { Page, TUsers } from "@sssh-fresh-code/types-sssh";
import Table from "../../../shared/component/Table/Table";
import { UseQueryResult } from "@tanstack/react-query";
import usePopSotre from "../../../data/store/pop.store";
import usePostUserCertMutation from "../../../data/Users/users.cert.post";

interface UsersCertProps {
  query: UseQueryResult<Page<TUsers>, Error>
  headers: object,
  overrideClass?: object,
  overrideTdClass?: object,
  value: object;
  stateList: [string[], React.Dispatch<React.SetStateAction<string[]>>];
}

export default function UsersCert({ stateList, query, value, headers, overrideClass, overrideTdClass }: UsersCertProps) {
  const { pop } = usePopSotre();
  const [list, setList] = stateList;
  const usersCertMutation = usePostUserCertMutation(list, query.refetch);


  return (
    <>
      <div className="flex items-end justify-end gap-2">
        <span className="text-xs text-gray-400">승인 된 계정은 "직원" 등급으로 업데이트 됩니다.</span>
        <button
          disabled={query.isSuccess && query.data.data.length === 0}
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md bg-gray-300 px-5"
          onClick={() => {
            if (query && query.data && query.data.data) {
              pop(
                "목록의 모든 유저들을 승인 하시겠습니까?",
                "info",
                () => {
                  setList(query.data.data.map((i) => i.id));
                  usersCertMutation.mutate()
                },
                true
              );
            } else {
              pop("준비중 입니다. 잠시 후 다시 시도해주세요.", "error");
            }
          }}
        >
          전체 승인
        </button>
        <button
          disabled={list.length === 0}
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md bg-gray-300 px-5"
          onClick={() => {
            if (list) {
              pop(
                "체크한 유저들을 승인 하시겠습니까?",
                "info",
                () => usersCertMutation.mutate(),
                true
              );
            } else {
              pop("선택된 유저가 없습니다.", "error");
            }
          }}
        >
          승인
        </button>
      </div>
      <Table
        query={query}
        headerNames={headers}
        overrideClass={overrideClass}
        overrideTdClass={overrideTdClass}
        value={value}
      />
    </>
  )
}