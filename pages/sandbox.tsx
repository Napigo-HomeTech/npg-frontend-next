import React from "react";
import {
  MdOutlineSettings as GeneralIcon,
  MdOutlineSecurity as AuthIcon,
} from "react-icons/md";
import { DrawerMenu } from "../components/Navigations/DrawerMenu";

const exampleMenus = [
  {
    icon: <GeneralIcon />,
    name: "general",
    displayText: "General",
    goto: "general",
  },
  {
    icon: <AuthIcon />,
    name: "authentication",
    displayText: "Authentication",
    goto: "authentication",
  },
];

const Sandbox: React.FC = () => {
  return <DrawerMenu menus={exampleMenus} title="Example" />;
};

export default Sandbox;
