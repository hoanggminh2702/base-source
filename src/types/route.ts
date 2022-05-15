import { FunctionComponent, ReactNode } from "react";
import { RemoveOptionalProperty } from "./util";

export type CustomRoute = {
  key?: string;
  path: string;
  name: string;
  isRoot?: boolean; // If this route is root route, in case you want more than 1 root routes, set isRoot to true to make it a root route,
  icon?: ReactNode | string;
  layoutLabel?: string; // In case this route is layout route, and want layout label different from index route label, set label for this layout route
  hideInMenu?: boolean; // If needs to hide this route on menu bar, set it by true
  permission?: boolean; // In case need authen the route
  layoutElement?: FunctionComponent<any> | FunctionComponent<RootLayoutProps>; // If route is layout route, this is the Layout Component of the route
  component?: FunctionComponent<any>; // If route is layout route, this will be component the index route, else this route will be the component of the route
  children?: Array<CustomRoute>;
  hideChildren?: boolean;
};

export type MyRoute = RemoveOptionalProperty<CustomRoute, "key">;

type RootLayoutProps = {
  routes: MyRoute[];
};
