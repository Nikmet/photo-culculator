import Input from "../../components/Input/Input";
import styles from "./MainLayout.module.scss";

export function MainLayout() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <h1 className={styles["header__title"]}>PHOTO-CALCULATOR</h1>
                <div className={styles["header__inputs"]}>
                    <Input id="width" type="number" label="Ширина (мм)" appearance="small" />
                    <Input id="height" type="number" label="Высота (мм)" appearance="small" titlePosition="center"/>
                    <Input id="square" type="number" label="Площадь (мм)" appearance="small" />
                </div>
            </div>
        </header>
    );
}
