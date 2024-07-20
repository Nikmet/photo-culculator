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
            <NavLink className={styles.link} to="/banner">
                Расчет банеров
            </NavLink>
            <NavLink className={styles.link} to="/tape">
                Пленка ПВX
            </NavLink>
            <NavLink className={styles.link} to="/cut">
                Лазерная резка
            </NavLink>
            <NavLink className={styles.link} to="/termo">
                Термотрансфер
            </NavLink>
        </div>
    );
};

export default Menu;
