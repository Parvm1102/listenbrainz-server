import * as React from "react";

import { Navigate, Outlet } from "react-router";
import type { LoaderFunctionArgs, RouteObject } from "react-router";
import RouteLoader, { RouteQueryLoader } from "../../utils/Loader";

const getUserRoutes = (): RouteObject[] => {
  const routes = [
    {
      path: "/user/:username/",
      lazy: {
        Component: async () => {
          return (await import("../layout")).default;
        },
      },
      children: [
        {
          index: true,
          lazy: {
            loader: async () => {
              return RouteQueryLoader("dashboard", true);
            },
            Component: async () => {
              return (await import("../Dashboard")).default;
            },
          },
        },
        {
          path: "stats/",
          element: <Outlet />,
          children: [
            {
              index: true,
              lazy: {
                loader: async () => {
                  return RouteLoader;
                },
                Component: async () => {
                  return (await import("../stats/UserReports")).default;
                },
              },
              shouldRevalidate: () => false,
            },
            {
              path: "top-artists/",
              lazy: {
                loader: async () => {
                  return (await import("../charts/UserEntityChart"))
                    .UserEntityChartLoader;
                },
                Component: async () => {
                  return (await import("../charts/UserEntityChart")).default;
                },
              },
            },
            {
              path: "top-albums/",
              lazy: {
                loader: async () => {
                  return (await import("../charts/UserEntityChart"))
                    .UserEntityChartLoader;
                },
                Component: async () => {
                  return (await import("../charts/UserEntityChart")).default;
                },
              },
            },
            {
              path: "top-tracks/",
              lazy: {
                loader: async () => {
                  return (await import("../charts/UserEntityChart"))
                    .UserEntityChartLoader;
                },
                Component: async () => {
                  return (await import("../charts/UserEntityChart")).default;
                },
              },
            },
          ],
        },
        {
          path: "history/",
          element: <Navigate to="../stats/top-artists/" replace />,
        },
        {
          path: "artists/",
          element: <Navigate to="../stats/top-artists/" replace />,
        },
        {
          path: "reports/",
          element: <Navigate to="../stats/" replace />,
        },
        {
          path: "taste/",
          lazy: {
            loader: async () => {
              return RouteLoader;
            },
            Component: async () => {
              return (await import("../taste/UserTaste")).UserTastesWrapper;
            },
          },
        },
        {
          path: "playlists/",
          lazy: {
            loader: async () => {
              return RouteLoader;
            },
            Component: async () => {
              return (await import("../playlists/Playlists"))
                .UserPlaylistsWrapper;
            },
          },
        },
        {
          path: "collaborations/",
          element: <Navigate to="playlists/" replace />,
        },
        {
          path: "recommendations/",
          lazy: {
            loader: async () => {
              return RouteLoader;
            },
            Component: async () => {
              return (await import("../recommendations/RecommendationsPage"))
                .default;
            },
          },
        },
      ],
    },
    {
      path: "/user/:username/year-in-music/",
      lazy: {
        Component: async () => {
          return (await import("../../explore/layout")).default;
        },
      },
      children: [
        {
          index: true,
          element: <Navigate to="./2025" replace />,
        },
        {
          path: ":year/",
          lazy: {
            loader: async () => {
              return RouteQueryLoader(`year-in-music`);
            },
            Component: async () => {
              return (await import("../year-in-music/YearInMusic")).default;
            },
          },
        },
      ],
    },
  ];
  return routes;
};

export default getUserRoutes;
