import { FunctionComponent } from "react";
import styles from "./Menu.module.scss";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

interface MenuProps {
    isActive: boolean;
}

const Menu: FunctionComponent<MenuProps> = ({ isActive }) => {
    return (
        <div className={classNames(styles.menu, [isActive ? styles["menu-active"] : ""])}>
            <NavLink className={styles.link} to="/photo-culculator/banner">
                Расчет банеров
            </NavLink>
            <NavLink className={styles.link} to="/photo-culculator/tape">
                Пленка ПВX
            </NavLink>
            <NavLink className={styles.link} to="/photo-culculator/cut">
                Лазерная резка
            </NavLink>
            <NavLink className={styles.link} to="/photo-culculator/termo">
                Термотрансфер
            </NavLink>
            <NavLink
                className={classNames(styles.link, styles["link__admin"])}
                to="/photo-culculator/admin"
            >
                Панель администратора
            </NavLink>
        </div>
    );
};

export default Menu;
