import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
    index("routes/main.tsx"),
    {
        id: "routes/home",
        file: "routes/home.tsx",
        path: "/home"
    },
] satisfies RouteConfig;
