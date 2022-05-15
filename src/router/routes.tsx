import { CustomRoute, MyRoute } from "@/types/route";
import { genKeyFollowName } from "@/utils/utils";
import { routes } from "./routeDeclare";

export const genPath = (route: CustomRoute): CustomRoute => {
  const clonePath = Object.assign({}, route) as CustomRoute;

  // Gen key if route does not have key
  const parKey =
    clonePath.key || genKeyFollowName(clonePath.name.toLocaleLowerCase());
  // const parKey = clonePath.key || clonePath.path;
  clonePath.key = parKey;

  // If route has children gen new children with new path
  if (clonePath.children) {
    const newChildren = clonePath.children.map((child) => {
      // Gen new path and key to children
      const childPath = route.path + child.path;
      const childKey = child.key
        ? `${parKey}-${child.key}`
        : `${parKey}-${genKeyFollowName(child.name.toLocaleLowerCase())}`;

      // const childKey = child.key || childPath;
      const returnChild = Object.assign({}, child) as CustomRoute;
      returnChild.path = childPath;
      returnChild.key = childKey;

      // De quy de thuc hien gen path cho children khac
      if (returnChild.children) {
        return genPath(returnChild);
      } else return returnChild;
    });

    return {
      ...clonePath,
      children: newChildren,
    };
  }
  return {
    ...clonePath,
  };
};

export const menuItem = routes.map((child) => {
  return genPath(child);
}) as MyRoute[];
