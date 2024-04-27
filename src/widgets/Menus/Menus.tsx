import { useEffect, useState } from "react";
import ParentMenuItem from "./MenuItem";
import { AnimatePresence } from "framer-motion";
import useGetParentMenusQuery from "../../data/Menus/menu.all.get";
import { ParentMenuListItem } from "../../shared/types/menus";
import { MenuDetail } from "./MenuDetail";
import { MenuCreate } from "./MenuCreate";

export default function Menus() {
  const [selectedMenu, setSelectedMenu] = useState<ParentMenuListItem>();
  const [menus, setMenus] = useState<ParentMenuListItem[]>([]);

  const { isSuccess, data, refetch } = useGetParentMenusQuery();

  const selectMenu = (m: ParentMenuListItem) => {
    if (selectedMenu && selectedMenu.id === m.id) {
      setSelectedMenu(undefined);
    } else {
      setSelectedMenu(m);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setMenus(data);
    }
  }, [isSuccess, data]);

  return (
    <AnimatePresence key="Menus">
      <div className="grid grid-cols-1 md:grid-cols-3 w-full min-h-96 gap-2">
        <div className="bg-white rounded-lg shadow-md overflow-y max-h-60 md:col-span-1">
          <div className="p-4">
            <div className="flex flex-col items-center justify-between gap-2">
              {menus.length > 0 &&
                menus.map((m, idx) => (
                  <ParentMenuItem
                    key={idx}
                    menu={m}
                    setMenu={selectMenu}
                    isSelected={selectedMenu?.id === m.id}
                  />
                ))}
              <div className="border-gray-100 w-full shadow-sm">
                <div
                  className="p-3 hover:bg-gray-200 rounded-lg cursor-pointer"
                  onClick={() => setSelectedMenu(undefined)}
                >
                  <div className="text-center w-full">+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {selectedMenu && (
          <MenuDetail
            menu={selectedMenu}
            refetchList={refetch}
            setSelectedMenu={setSelectedMenu}
          />
        )}
        {!selectedMenu && (
          <MenuCreate refetch={refetch} setSelectedMenu={setSelectedMenu} />
        )}
      </div>
    </AnimatePresence>
  );
}
