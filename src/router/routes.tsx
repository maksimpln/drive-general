import type { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { DriveLayoutComponent } from "@components/drive-layout";
import {
  MainPage,
  CatalogPage,
  CarsPage,
  CreditPage,
  ChatsPage,
  ProfilePage,
  TradeInPage,
  TestDrivePage,
  AiChatPage,
  ComparePage,
} from "@pages";

export const Routes: RouteObject[] = [
  {
    element: <DriveLayoutComponent />,
    children: [
      { index: true, element: <MainPage /> },
      { path: "catalog", element: <CatalogPage /> },
      { path: "car/:id", element: <CarsPage /> },
      { path: "car", element: <Navigate to="/catalog" replace /> },
      { path: "credit", element: <CreditPage /> },
      { path: "chat", element: <ChatsPage /> },
      { path: "profile", element: <ProfilePage /> },
      { path: "trade-in", element: <TradeInPage /> },
      { path: "test-drive", element: <TestDrivePage /> },
      { path: "ai-chat", element: <AiChatPage /> },
      { path: "compare", element: <ComparePage /> },
    ],
  },
];
