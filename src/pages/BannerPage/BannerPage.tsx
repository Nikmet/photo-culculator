import { FunctionComponent, useEffect } from "react";
import Title from "../../components/Title/Title";
import styles from "./BannerPage.module.scss";
import Input from "../../components/Input/Input";

interface BannerPageProps {}

const BannerPage: FunctionComponent<BannerPageProps> = () => {
    useEffect(() => {
        document.title = "Баннер";
    }, []);

    return (
        <>
            <Title appearance="title">Баннер</Title>
            <div className={styles["price"]}>
                <Input id="b300" type="number" label="Б-300 за 1 м2(Рублей)" appearance="big" />
                <Input id="b400" type="number" label="Б-400 за 1 м2(Рублей)" appearance="big" />
                <Input id="luv" type="number" label="Цена люверса (Рублей)" appearance="big" />
                <Input id="luv-step" type="number" label="Шаг люверсов (мм)" appearance="big" />
            </div>
            <Title appearance="subtitle">Цены</Title>
            <div className={styles["price"]}>
                <Input
                    id="b300-price"
                    type="number"
                    label="Б-300 без люверсов (Рублей)"
                    appearance="big"
                />
                <Input
                    id="b400-price"
                    type="number"
                    label="Б-400 без люверсов(Рублей)"
                    appearance="big"
                />
                <Input
                    id="b300-price-luv"
                    type="number"
                    label="Б-300 с люверсами (Рублей)"
                    appearance="big"
                />
                <Input
                    id="b400-price-luv"
                    type="number"
                    label="Б-400 с люверсами (Рублей)"
                    appearance="big"
                />
            </div>
        </>
    );
};

export default BannerPage;
