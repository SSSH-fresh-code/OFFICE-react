import { useSearch } from "@tanstack/react-router";
import { TMenu } from "@sssh-fresh-code/types-sssh";
import Table, { TableOptions } from "../../../shared/component/Table/Table";
import useGetMenusQuery from "../../../data/Menus/menus.get";
import { MenusIconFactory } from "../../../widgets/Menus/MenusIconFactoryProps";

export default function AuthsMenusListPage() {
  const search = useSearch({ from: "" });
  const page = search.page || 1;

  const query = useGetMenusQuery(page);

  const tableOptions: TableOptions<TMenu> = {
    from: {
      href: "/auths/menus/",
      key: "id",
    },
    overrideClass: {
      order: " w-1/4",
      name: " w-1/4",
      icon: " w-1/4 flex justify-center items-center",
      link: " w-1/4 text-center",
    },
    overrideTdClass: {
      icon: " text-lg",
    },
    value: {
      icon: (icon?: number) =>
        !icon || icon === null ? (
          <></>
        ) : (
          <div>
            <MenusIconFactory
              iconName={icon}
              props={{ width: "24px", height: "24px" }}
            />
          </div>
        ),
      link: (link?: string) =>
        !link || link === null ? <></> : <span>{link}</span>,
    },
  }

  const tableHeaderNames: { [K in keyof TMenu]?: string } = {
    order: "순서",
    name: "이름",
    icon: "아이콘",
    link: "주소",
  };

  return (
    <Table
      query={query}
      headerNames={tableHeaderNames}
      options={tableOptions}
    />
  );
}
