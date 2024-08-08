import { FunctionComponent, useEffect } from "react";
import styles from "./AdminLayout.module.scss";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import classNames from "classnames";

interface AdminLayoutProps {}

const AdminLayout: FunctionComponent<AdminLayoutProps> = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
        navigate("/admin/startPrices");
    }, [navigate]);

    return (
        <>
            <div className={styles.header}>
                <NavLink to="/" className={styles["main-link"]}>
                    &lt; На главную
                </NavLink>
                <div className={styles.slider}>
                    <NavLink
                        to="/admin/startPrices"
                        className={classNames(styles.link, [
                            pathname === "/admin/startPrices" ? styles["link-active"] : ""
                        ])}
                    >
                        Начальные цены
                    </NavLink>
                    <NavLink
                        to="/admin/minPrice"
                        className={classNames(styles.link, [
                            pathname === "/admin/minPrice" ? styles["link-active"] : ""
                        ])}
                    >
                        Минимальные цены
                    </NavLink>
                </div>
            </div>
            <div className={styles.outlet}>
                <Outlet />
            </div>
        </>
    );
};

export default AdminLayout;
