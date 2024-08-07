import { FunctionComponent, useEffect, useState } from "react";
import Title from "../../components/Title/Title";
import styles from "./TapePage.module.scss";
import Input from "../../components/Input/Input";
import Checkbox from "../../components/Checkbox/Checkbox";
import { useSquareStore } from "../../models/SquareStore";
import { roundValue } from "../../helpers/roundValue";
import { getLocalStorageValue } from "../../helpers/localstorage";

interface TapePageProps {}

// export const PLASTIC_PRICE = 2600;
// const MP_PRICE = 800;

const TapePage: FunctionComponent<TapePageProps> = () => {
    const { square } = useSquareStore();
    const [lfp, setLFP] = useState<number | undefined>(getLocalStorageValue("lfp"));
    const [pc, setPC] = useState<number | undefined>(getLocalStorageValue("pc"));
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
            setLFPTotal(roundValue(square * lfp) <= 100 ? 100 : roundValue(square * lfp));
            setPCTotal(roundValue(square * pc) <= 100 ? 100 : roundValue(square * pc));
        }
    }, [lfp, pc, square]);

    useEffect(() => {
        if (withPlastic && lfp) {
            setLFPTotal(
                roundValue(square * lfp + getLocalStorageValue("plastic") * square) <= 100
                    ? 100
                    : roundValue(square * lfp + getLocalStorageValue("plastic") * square)
            );
        } else {
            setLFPTotal(
                lfp ? (roundValue(square * lfp) <= 100 ? 100 : roundValue(square * lfp)) : undefined
            );
        }
        if (withPlastic2 && withMF && pc) {
            setPCTotal(
                roundValue(
                    square * pc +
                        getLocalStorageValue("tf") * square +
                        getLocalStorageValue("mf") * square
                ) <= 100
                    ? 100
                    : roundValue(
                          square * pc +
                              getLocalStorageValue("plastic") * square +
                              getLocalStorageValue("mf") * square
                      )
            );
        } else if (withPlastic2 && pc) {
            setPCTotal(
                roundValue(square * pc + getLocalStorageValue("plastic") * square) <= 100
                    ? 100
                    : roundValue(square * pc + getLocalStorageValue("plastic") * square)
            );
        } else if (withMF && pc) {
            setPCTotal(
                roundValue(square * pc + getLocalStorageValue("mf") * square) <= 100
                    ? 100
                    : roundValue(square * pc + getLocalStorageValue("mf") * square)
            );
        } else {
            setPCTotal(
                pc ? (roundValue(square * pc) <= 100 ? 100 : roundValue(square * pc)) : undefined
            );
        }
    }, [lfp, withPlastic, square, withPlastic2, pc, withMF]);

    // const countAdd = () => {
    //     console.log(withPlastic);
    //     if (withPlastic && lfp) {
    //         setLFPTotal(square * lfp + getLocalStorageValue("plastic") * square);
    //     }
    //     if (withPlastic2 && withMF && pc) {
    //         setPCTotal(square * pc + getLocalStorageValue("plastic") * square + getLocalStorageValue("mf") * square);
    //     } else if (withPlastic2 && pc) {
    //         setPCTotal(square * pc + getLocalStorageValue("plastic") * square);
    //     } else if (withMF && pc) {
    //         setPCTotal(square * pc + getLocalStorageValue("mf") * square);
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
                            setLFPTotal(
                                roundValue(
                                    square * Number(e.target.value) +
                                        getLocalStorageValue("plastic") * square
                                ) <= 100
                                    ? 100
                                    : roundValue(
                                          square * Number(e.target.value) +
                                              getLocalStorageValue("plastic") * square
                                      )
                            );
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
                            setPCTotal(
                                roundValue(
                                    square * Number(e.target.value) +
                                        getLocalStorageValue("mf") * square
                                ) <= 100
                                    ? 100
                                    : roundValue(
                                          square * Number(e.target.value) +
                                              getLocalStorageValue("mf") * square
                                      )
                            );
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
