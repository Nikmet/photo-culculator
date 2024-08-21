import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout/MainLayout";
import BannerPage from "./pages/BannerPage/BannerPage";
import TapePage from "./pages/TapePage/TapePage";
import CutPage from "./pages/CutPage/CutPage";
import TermoPage from "./pages/TermoPage/TermoPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import { INITIAL_ARRAY } from "./helpers/localstorage";
import AdminLayout from "./layouts/AdminLayout/AdminLayout";
import MinPricePage from "./pages/MinPricePage/MinPricePage";
import PWABadge from "./PWABadge";

const router = createBrowserRouter([
    {
        path: "/photo-culculator",
        element: <MainLayout />,
        children: [
            {
                path: "/photo-culculator/banner",
                element: <BannerPage />
            },
            {
                path: "/photo-culculator/tape",
                element: <TapePage />
            },
            {
                path: "/photo-culculator/cut",
                element: <CutPage />
            },
            {
                path: "/photo-culculator/termo",
                element: <TermoPage />
            }
        ]
    },
    {
        path: "/photo-culculator/admin",
        element: <AdminLayout />,
        children: [
            {
                path: "/photo-culculator/admin/startPrices",
                element: <AdminPage />
            },
            {
                path: "/photo-culculator/admin/minPrice",
                element: <MinPricePage />
            }
        ]
    }
]);

if (!localStorage.getItem("data")) {
    localStorage.setItem("data", JSON.stringify(INITIAL_ARRAY));
}

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
        <PWABadge />
    </React.StrictMode>
);
