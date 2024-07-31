import { FunctionComponent, useEffect, useState } from "react";
import Title from "../../components/Title/Title";
import styles from "./TapePage.module.scss";
import Input from "../../components/Input/Input";
import Checkbox from "../../components/Checkbox/Checkbox";
import { useSquareStore } from "../../models/SquareStore";
import { roundValue } from "../../helpers/roundValue";

interface TapePageProps {}

export const PLASTIC_PRICE = 2600;
const MP_PRICE = 800;

const TapePage: FunctionComponent<TapePageProps> = () => {
    const { square } = useSquareStore();
    const [lfp, setLFP] = useState<number | undefined>(1000);
    const [pc, setPC] = useState<number | undefined>(1700);
    const [lfpTotal, setLFPTotal] = useState<number | undefined>(0);
    const [pcTotal, setPCTotal] = useState<number | undefined>(0);
    const [withPlastic, setWithPlastic] = useState<boolean>(false);
    const [withPlastic2, setWithPlastic2] = useState<boolean>(false);
    const [withMF, setWithMF] = useState<boolean>(false);

    useEffect(() => {
        document.title = "Пленка ПВX";
    }, []);

    useEffect(() => {
        if (lfp && pc) {
            setLFPTotal(roundValue(square * lfp));
            setPCTotal(roundValue(square * pc));
        }
    }, [lfp, pc, square]);

    useEffect(() => {
        if (withPlastic && lfp) {
            setLFPTotal(roundValue(square * lfp + PLASTIC_PRICE * square));
        } else {
            setLFPTotal(lfp ? roundValue(square * lfp) : undefined);
        }
        if (withPlastic2 && withMF && pc) {
            setPCTotal(roundValue(square * pc + PLASTIC_PRICE * square + MP_PRICE * square));
        } else if (withPlastic2 && pc) {
            setPCTotal(roundValue(square * pc + PLASTIC_PRICE * square));
        } else if (withMF && pc) {
            setPCTotal(roundValue(square * pc + MP_PRICE * square));
        } else {
            setPCTotal(pc ? roundValue(square * pc) : undefined);
        }
    }, [lfp, withPlastic, square, withPlastic2, pc, withMF]);

    // const countAdd = () => {
    //     console.log(withPlastic);
    //     if (withPlastic && lfp) {
    //         setLFPTotal(square * lfp + PLASTIC_PRICE * square);
    //     }
    //     if (withPlastic2 && withMF && pc) {
    //         setPCTotal(square * pc + PLASTIC_PRICE * square + MP_PRICE * square);
    //     } else if (withPlastic2 && pc) {
    //         setPCTotal(square * pc + PLASTIC_PRICE * square);
    //     } else if (withMF && pc) {
    //         setPCTotal(square * pc + MP_PRICE * square);
    //     }
    // };

    return (
        <>
            <Title appearance="title">ПЛЕНКА ПВХ</Title>
            <div className={styles.price}>
                <div className={styles["price__wrapper"]}>
                    <Input
                        id="lfp"
                        type="number"
                        label="Широкоформатная печать за 1 м2(Рублей)"
                        appearance="big"
                        onChange={(e) => {
                            setLFP(Number(e.target.value));
                            setLFPTotal(square * Number(e.target.value));
                        }}
                        value={lfp ? lfp : ""}
                    />
                    <Checkbox
                        id="withPlastic"
                        label="С пластиком"
                        onChange={(e) => {
                            if (e.target.checked) {
                                setWithPlastic(true);
                            } else {
                                setWithPlastic(false);
                            }
                        }}
                        checked={withPlastic}
                    />
                </div>
                <div className={styles["price__wrapper"]}>
                    <Input
                        id="pc"
                        type="number"
                        label="Плоттерная резка за 1 м2(Рублей)"
                        appearance="big"
                        onChange={(e) => {
                            setPC(Number(e.target.value));
                            setPCTotal(square * Number(e.target.value));
                        }}
                        value={pc ? pc : ""}
                    />
                    <Checkbox
                        id="withMF"
                        label="С монтажной пленкой"
                        onChange={(e) => {
                            if (e.target.checked) {
                                setWithMF(true);
                            } else {
                                setWithMF(false);
                            }
                        }}
                        checked={withMF}
                    />
                    <Checkbox
                        id="withPlastic2"
                        label="С пластиком"
                        onChange={(e) => {
                            if (e.target.checked) {
                                setWithPlastic2(true);
                            } else {
                                setWithPlastic2(false);
                            }
                        }}
                        checked={withPlastic2}
                    />
                </div>
            </div>
            <Title appearance="subtitle">Цены</Title>
            <div className={styles.price}>
                <Input
                    id="lfp-price"
                    type="number"
                    label="Широкоформатная печать (Рублей)"
                    appearance="big"
                    value={lfpTotal}
                />
                <Input
                    id="pc-price"
                    type="number"
                    label={
                        <>
                            Плоттерная резка <br /> (Рублей)
                        </>
                    }
                    appearance="big"
                    value={pcTotal}
                />
            </div>
        </>
    );
};

export default TapePage;
