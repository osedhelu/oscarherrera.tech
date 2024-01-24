import type { FC } from "react";
import { dataIcon } from "./nav.data";

interface Props {
  props: React.SVGProps<SVGSVGElement>;
  nameIcon: keyof typeof dataIcon;
}
export const SvgComponent: FC<Props> = ({ nameIcon, props }) => {
  const IconSvg = dataIcon[nameIcon];
  return <IconSvg {...props} />;
};
