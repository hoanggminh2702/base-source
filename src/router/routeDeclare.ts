import Test from "@/pages/Test";
import Layout from "src/layout";
import HomePage from "src/pages/home";
import { CustomRoute } from "src/types/route";

export const routes: Array<CustomRoute> = [
  {
    name: "Trang chủ",
    path: "",
    isRoot: true,
    layoutElement: Layout,
    component: HomePage,
    children: [
      {
        name: "Test",
        path: "/test",
        component: Test,
      },
    ],
  },
];
