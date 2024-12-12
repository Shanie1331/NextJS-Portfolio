import { FunctionComponent } from "react";
import { Category } from "../types";

export const NavItem: FunctionComponent<{
  value: Category | "all";
  handlerFilterCategory: Function;
  active: string;
}> = ({ value, handlerFilterCategory, active }) => {
  let className =
    "capitalize cursor-pointer hover:text-green dark:hover:text-white";
  if (active === value) className += " text-green dark:text-white border-b-2 ";

  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectsNavbar: FunctionComponent<{
  handlerFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="all" {...props} />
      <NavItem value="react native" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="next" {...props} />
      <NavItem value="mongo" {...props} />
      <NavItem value="node" {...props} />
      <NavItem value="expo" {...props} />
    </div>
  );
};

export default ProjectsNavbar;
