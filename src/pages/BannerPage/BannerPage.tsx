import { FunctionComponent, useEffect, useState } from "react";
import Title from "../../components/Title/Title";
import styles from "./BannerPage.module.scss";
import Input from "../../components/Input/Input";
import { useSquareStore } from "../../models/SquareStore";
import { roundValue } from "../../helpers/roundValue";
import { getLocalStorageValue } from "../../helpers/localstorage";

interface BannerPageProps {}

const BannerPage: FunctionComponent<BannerPageProps> = () => {
    const { square, perimeter } = useSquareStore();
    const [b300, setB300] = useState<number | undefined>(getLocalStorageValue("b300"));
    const [b400, setB400] = useState<number | undefined>(440);
    const [luvers, setLuvers] = useState<number | undefined>(20);
    const [luversStep, setLuversStep] = useState<number | undefined>(500);
    const [b300Total, setB300Total] = useState<number | undefined>(0);
    const [b400Total, setB400Total] = useState<number | undefined>(0);
    const [b300TotalLuvers, setB300TotalLuvers] = useState<number | undefined>(0);
    const [b400TotalLuvers, setB400TotalLuvers] = useState<number | undefined>(0);

    useEffect(() => {
        document.title = "Баннер";
    }, []);

    useEffect(() => {
        if (luversStep && luvers && b400 && b300) {
            const luversCount = perimeter / luversStep;
            setB300Total(roundValue(b300 * square) <= 100 ? 100 : roundValue(b300 * square));
            setB400Total(roundValue(b400 * square) <= 100 ? 100 : roundValue(b400 * square));
            setB300TotalLuvers(
                roundValue(b300 * square + luversCount * luvers) <= 100
                    ? 100
                    : roundValue(b300 * square + luversCount * luvers)
            );
            setB400TotalLuvers(
                roundValue(b400 * square + luversCount * luvers) <= 100
                    ? 100
                    : roundValue(b400 * square + luversCount * luvers)
            );
        } else {
            setB300Total(undefined);
            setB400Total(undefined);
            setB400TotalLuvers(undefined);
            setB300TotalLuvers(undefined);
        }
    }, [square, luversStep, luvers, b400, b300, perimeter]);

    return (
        <>
            <Title appearance="title">Баннер</Title>
            <div className={styles["price"]}>
                <Input
                    id="b300"
                    type="number"
                    label="Б-300 за 1 м2(Рублей)"
                    appearance="big"
                    onChange={(e) => {
                        setB300(Number(e.target.value));
                        if (luversStep && luvers) {
                            const luversCount = perimeter / luversStep;
                            setB300Total(
                                roundValue(Number(e.target.value) * square) <= 100
                                    ? 100
                                    : roundValue(Number(e.target.value) * square)
                            );
                            setB300TotalLuvers(
                                roundValue(
                                    Number(e.target.value) * square + luversCount * luvers
                                ) <= 100
                                    ? 100
                                    : roundValue(
                                          Number(e.target.value) * square + luversCount * luvers
                                      )
                            );
                        } else {
                            setB300(undefined);
                            setB300TotalLuvers(undefined);
                        }
                    }}
                    value={b300 ? b300 : ""}
                />
                <Input
                    id="b400"
                    type="number"
                    label="Б-400 за 1 м2(Рублей)"
                    appearance="big"
                    onChange={(e) => {
                        setB400(Number(e.target.value));
                        if (luversStep && luvers) {
                            const luversCount = perimeter / luversStep;
                            setB400Total(
                                roundValue(Number(e.target.value) * square) <= 100
                                    ? 100
                                    : roundValue(Number(e.target.value) * square)
                            );
                            setB400TotalLuvers(
                                roundValue(
                                    Number(e.target.value) * square + luversCount * luvers
                                ) <= 100
                                    ? 100
                                    : roundValue(
                                          Number(e.target.value) * square + luversCount * luvers
                                      )
                            );
                        } else {
                            setB400(undefined);
                            setB400TotalLuvers(undefined);
                        }
                    }}
                    value={b400 ? b400 : ""}
                />
                <Input
                    id="luv"
                    type="number"
                    label="Цена люверса (Рублей)"
                    appearance="big"
                    onChange={(e) => {
                        setLuvers(Number(e.target.value));
                        if (luversStep && luvers && b400 && b300) {
                            const luversCount = perimeter / luversStep;
                            setB300TotalLuvers(
                                roundValue(b300 * square + luversCount * luvers) <= 100
                                    ? 100
                                    : roundValue(b300 * square + luversCount * luvers)
                            );
                            setB400TotalLuvers(
                                roundValue(b400 * square + luversCount * luvers) <= 100
                                    ? 100
                                    : roundValue(b400 * square + luversCount * luvers)
                            );
                        } else {
                            // setLuvers(undefined);
                            setB400TotalLuvers(undefined);
                            setB300TotalLuvers(undefined);
                        }
                    }}
                    value={luvers ? luvers : ""}
                />
                <Input
                    id="luv-step"
                    type="number"
                    label="Шаг люверсов (мм)"
                    appearance="big"
                    onChange={(e) => {
                        setLuversStep(Number(e.target.value));
                        if (e.target.value && luversStep && luvers && b400 && b300) {
                            const luversCount = perimeter / luversStep;
                            setB300TotalLuvers(
                                roundValue(b300 * square + luversCount * luvers) <= 100
                                    ? 100
                                    : roundValue(b300 * square + luversCount * luvers)
                            );
                            setB400TotalLuvers(
                                roundValue(b400 * square + luversCount * luvers) <= 100
                                    ? 100
                                    : roundValue(b400 * square + luversCount * luvers)
                            );
                        } else {
                            // setLuversStep(undefined);
                            setB400TotalLuvers(undefined);
                            setB300TotalLuvers(undefined);
                        }
                    }}
                    value={luversStep ? luversStep : ""}
                />
            </div>
            <Title appearance="subtitle">Цены</Title>
            <div className={styles["price"]}>
                <Input
                    id="b300-price"
                    type="number"
                    label="Б-300 без люверсов (Рублей)"
                    appearance="big"
                    value={b300Total}
                />
                <Input
                    id="b400-price"
                    type="number"
                    label="Б-400 без люверсов(Рублей)"
                    appearance="big"
                    value={b400Total}
                />
                <Input
                    id="b300-price-luv"
                    type="number"
                    label="Б-300 с люверсами (Рублей)"
                    appearance="big"
                    value={b300TotalLuvers}
                />
                <Input
                    id="b400-price-luv"
                    type="number"
                    label="Б-400 с люверсами (Рублей)"
                    appearance="big"
                    value={b400TotalLuvers}
                />
            </div>
        </>
    );
};

export default BannerPage;
