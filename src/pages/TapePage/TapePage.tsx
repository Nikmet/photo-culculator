import { FunctionComponent, useEffect } from "react";
import Title from "../../components/Title/Title";
import styles from "./TapePage.module.scss";
import Input from "../../components/Input/Input";
import Checkbox from "../../components/Checkbox/Checkbox";

interface TapePageProps {}

const TapePage: FunctionComponent<TapePageProps> = () => {
    useEffect(() => {
        document.title = "Пленка ПВX";
    }, []);
    return (
        <>
            <Title appearance="title">ПЛЕНКА ПВХ</Title>
            <div className={styles.price}>
                <div className={styles["price__wrapper"]}>
                    <Input
                        id="b400"
                        type="number"
                        label="Широкоформатная печать за 1 м2(Рублей)"
                        appearance="big"
                    />
                    <Checkbox id="withPlastic" label="С пластиком" />
                </div>
            </div>
        </>
    );
};

export default TapePage;
