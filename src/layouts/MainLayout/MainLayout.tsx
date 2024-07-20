import { Outlet } from "react-router-dom";
import Input from "../../components/Input/Input";
import styles from "./MainLayout.module.scss";
import { ChangeEvent, useEffect, useState } from "react";
import Menu from "../../components/Menu/Menu";

export function MainLayout() {
    const [isMenu, setMenu] = useState<boolean>(false);
    const [width, setWidth] = useState<number | undefined>();
    const [height, setHeight] = useState<number | undefined>();
    const [square, setSquare] = useState<number | undefined>();

    const openMenu = () => {
        setMenu((s) => !s);
    };

    const getWidth = (e: ChangeEvent<HTMLInputElement>) => {
        setWidth(Number(e.target.value));
        if (width && height) {
            setSquare((width * height) / 1000000);
        } else {
            setSquare(0);
        }
    };
    const getHeight = (e: ChangeEvent<HTMLInputElement>) => {
        setHeight(Number(e.target.value));
        if (width && height) {
            setSquare((width * height) / 1000000);
        } else {
            setSquare(0);
        }
    };

    useEffect(() => {
        if (width && height) {
            setSquare((width * height) / 1000000);
        } else {
            setSquare(0);
        }
    }, [width, height]);

    return (
        <>
            <header className={styles.header}>
                <Menu isActive={isMenu} />
                <div className={styles["menu__container"]} onClick={openMenu}>
                    {!isMenu ? (
                        <button className={styles.menu}></button>
                    ) : (
                        <img src="/close.svg" alt="close" />
                    )}
                </div>

                <div className={styles.container}>
                    <h1 className={styles["header__title"]}>PHOTO-CALCULATOR</h1>
                    <div className={styles["header__inputs"]}>
                        <Input
                            id="width"
                            type="number"
                            label="Ширина (мм)"
                            appearance="small"
                            onChange={getWidth}
                        />
                        <Input
                            id="height"
                            type="number"
                            label="Высота (мм)"
                            appearance="small"
                            titlePosition="center"
                            onChange={getHeight}
                        />
                        <Input
                            id="square"
                            type="number"
                            label="Площадь (м²)"
                            appearance="small"
                            value={square}
                        />
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
