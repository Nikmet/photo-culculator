import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout/MainLayout";
import BannerPage from "./pages/BannerPage/BannerPage";
import TapePage from "./pages/TapePage/TapePage";
import CutPage from "./pages/CutPage/CutPage";
import TermoPage from "./pages/TermoPage/TermoPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/banner",
                element: <BannerPage />
            },
            {
                path: "/tape",
                element: <TapePage />
            },
            {
                path: "/cut",
                element: <CutPage />
            },
            {
                path: "/termo",
                element: <TermoPage />
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
