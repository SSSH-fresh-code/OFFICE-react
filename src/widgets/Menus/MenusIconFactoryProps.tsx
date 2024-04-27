import UsersIcon from "../../shared/icons/menus/users.icon";
import DashboardIcon from "../../shared/icons/menus/dashboard.icon";
import AlarmsIcon from "../../shared/icons/menus/alarms.icon";
import AuthsIcon from "../../shared/icons/menus/auths.icon";
import MenusIcon from "../../shared/icons/menus/menus.icon";
import MenusIconProps from "../../shared/icons/icons.interface";
import MenusEnum from "../../shared/constant/menus.enum";

interface MenusIconFactoryProps {
  iconName: MenusEnum;
  props?: MenusIconProps;
}
export function MenusIconFactory({ iconName, props = {} }: MenusIconFactoryProps) {
  if (iconName == 0) return UsersIcon(props);
  else if (iconName == 1) return AlarmsIcon(props);
  else if (iconName == 2) return AuthsIcon(props);
  else if (iconName == 3) return MenusIcon(props);

  return <DashboardIcon />;
}
