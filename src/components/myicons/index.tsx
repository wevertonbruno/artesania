import { Icon, MyIconsMap } from "my-icons";
import {
  BiCode,
  BiCopy,
  BiDownload,
  BiEdit,
  BiMinus,
  BiPlus,
  BiSearch,
  BiShare,
  BiSolidEyedropper,
  BiTask,
  BiTrash,
  BiWindowOpen,
} from "react-icons/bi";

export const IconMap: MyIconsMap = new Map<Icon, JSX.Element>();
IconMap.set("edit", <BiEdit />);
IconMap.set("copy", <BiCopy />);
IconMap.set("download", <BiDownload />);
IconMap.set("search", <BiSearch />);
IconMap.set("plus", <BiPlus />);
IconMap.set("minus", <BiMinus />);
IconMap.set("code", <BiCode />);
IconMap.set("share", <BiShare />);
IconMap.set("eye", <BiSolidEyedropper />);
IconMap.set("trash", <BiTrash />);
IconMap.set("task", <BiTask />);
IconMap.set("windowOpen", <BiWindowOpen />);
