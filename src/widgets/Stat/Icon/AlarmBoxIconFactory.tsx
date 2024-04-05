import { CertificationIcon } from "./CertificationIcon";
import { GoToWorkIcon } from "./GoToWorkIcon";

interface AlarmBoxIconFactoryProps {
  iconName: string;
}

export default function AlarmBoxIconFactory({ iconName }: AlarmBoxIconFactoryProps) {

  function getIconByName(name: string): JSX.Element {
    switch (name) {
      case "Certification":
        return <CertificationIcon />
      case "GoToWork":
        return <GoToWorkIcon />
    }
    return <></>;
  }

  return getIconByName(iconName);
}