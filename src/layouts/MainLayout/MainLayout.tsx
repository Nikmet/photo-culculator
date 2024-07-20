import { Outlet } from "react-router-dom";
import Input from "../../components/Input/Input";
import styles from "./MainLayout.module.scss";
import { useState } from "react";
import Menu from "../../components/Menu/Menu";

export function MainLayout() {
    const [isMenu, setMenu] = useState<boolean>(false);

    const openMenu = () => {
        setMenu((s) => !s);
    };

    return (
        <>
            {" "}
            <header className={styles.header}>
                <Menu isActive={isMenu} />
                <div className={styles["menu__container"]} onClick={openMenu}>
                    <button className={styles.menu}></button>
                </div>

                <div className={styles.container}>
                    <h1 className={styles["header__title"]}>PHOTO-CALCULATOR</h1>
                    <div className={styles["header__inputs"]}>
                        <Input id="width" type="number" label="Ширина (мм)" appearance="small" />
                        <Input
                            id="height"
                            type="number"
                            label="Высота (мм)"
                            appearance="small"
                            titlePosition="center"
                        />
                        <Input id="square" type="number" label="Площадь (мм)" appearance="small" />
                    </div>
                </div>
            </header>
            <main className={styles.main}>
                <div className={styles.container}>
                    <Outlet />
                </div>
            </main>
        </>
    );
}
