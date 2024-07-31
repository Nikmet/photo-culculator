import { FunctionComponent, useEffect, useState } from "react";
import SelectInput, { IOption } from "../../components/Select/Select";
import Input from "../../components/Input/Input";
import Title from "../../components/Title/Title";
import styles from "./TermoPage.module.scss";
import { SingleValue } from "react-select";
import { useSquareStore } from "../../models/SquareStore";
import { roundValue } from "../../helpers/roundValue";

interface TermoPageProps {}

const options: IOption[] = [
    {
        value: "easy",
        label: "Легкий"
    },
    {
        value: "hard",
        label: "Сложный"
    }
];

const TermoPage: FunctionComponent<TermoPageProps> = () => {
    const { square } = useSquareStore();
    const [difficulty, setDifficulty] = useState<string | null>("easy");
    const [tf, setTF] = useState<number | undefined>(6000);
    const [tp, setTP] = useState<number | undefined>(6000);
    const [tfTotal, setTFTotal] = useState<number | undefined>(0);
    const [tpTotal, setTPTotal] = useState<number | undefined>(0);

    useEffect(() => {
        document.title = "Термотрансфер";
    }, []);

    useEffect(() => {
        if (tf && square && difficulty === "easy") {
            setTFTotal(roundValue(tf * square * 3));
        } else if (tf && square && difficulty === "hard") {
            setTFTotal(roundValue(tf * square * 5));
        } else {
            setTFTotal(undefined);
        }
        if (tp && square && difficulty === "easy") {
            setTPTotal(roundValue(tp * square * 3));
        } else if (tp && square && difficulty === "hard") {
            setTPTotal(roundValue(tp * square * 5));
        } else {
            setTPTotal(undefined);
        }
    }, [tf, tp, square, difficulty]);

    const getValue = () => {
        return difficulty ? options.find((c) => c.value === difficulty) : "";
    };

    const onChange = (newValue: SingleValue<IOption | string>) => {
        setDifficulty((newValue as IOption).value);
    };

    return (
        <>
            <Title appearance="title">ТЕРМОТРАНСФЕР</Title>
            <div className={styles.price}>
                <div className={styles["price__wrapper"]}>
                    <Input
                        id="plywood"
                        type="number"
                        label="Термоткань за 1 м2(Рублей)"
                        appearance="big"
                        onChange={(e) => {
                            setTF(Number(e.target.value));
                        }}
                        value={tf ? tf : ""}
                    />
                    <Input
                        id="tp"
                        type="number"
                        label="Термопленка за 1 м2(Рублей)"
                        appearance="big"
                        onChange={(e) => {
                            setTP(Number(e.target.value));
                        }}
                        value={tp ? tp : ""}
                    />
                </div>
                <div className={styles.center}>
                    <SelectInput
                        titlePosition="center"
                        id="difficulty"
                        label="Уровень сложности"
                        appearance="big"
                        options={options}
                        value={getValue()}
                        onChange={onChange}
                    />
                </div>
                <Title appearance="subtitle">Цены</Title>
                <div className={styles["price__wrapper"]}>
                    <Input
                        id="tf-price"
                        type="number"
                        label="Термоткань (Рублей)"
                        appearance="big"
                        value={tfTotal}
                    />
                    <Input
                        id="tp-price"
                        type="number"
                        label="Термопленка (Рублей)"
                        appearance="big"
                        value={tpTotal}
                    />
                </div>
            </div>
        </>
    );
};

export default TermoPage;
