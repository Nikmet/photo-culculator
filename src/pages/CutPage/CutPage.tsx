import { FunctionComponent, useEffect, useState } from "react";
import SelectInput, { IOption } from "../../components/Select/Select";
import { SingleValue } from "react-select";
import styles from "./CutPage.module.scss";
import Title from "../../components/Title/Title";
import Input from "../../components/Input/Input";
import Checkbox from "../../components/Checkbox/Checkbox";
import { useSquareStore } from "../../models/SquareStore";
import { roundValue } from "../../helpers/roundValue";
import { getLocalStorageValue } from "../../helpers/localstorage";

interface CutPageProps {}

const options: IOption[] = [
    {
        value: "easy",
        label: "Легкий"
    },
    {
        value: "medium",
        label: "Средний"
    },
    {
        value: "hard",
        label: "Сложный"
    }
];

const CutPage: FunctionComponent<CutPageProps> = () => {
    const { square } = useSquareStore();
    const [difficulty, setDifficulty] = useState<string | null>("easy");
    const [plywood, setPlywood] = useState<number | undefined>(getLocalStorageValue("plywood"));
    const [acrylic, setAcrylic] = useState<number | undefined>(getLocalStorageValue("acrylic"));
    const [withEngraving, setWithEngraving] = useState<boolean>(false);
    const [plywoodTotal, setPlywoodTotal] = useState<number | undefined>(0);
    const [acrylicTotal, setAcrylicTotal] = useState<number | undefined>(0);

    useEffect(() => {
        document.title = "Лазерная резка";
    }, []);

    useEffect(() => {
        if (plywood && square && difficulty === "easy") {
            setPlywoodTotal(
                roundValue(square * plywood * 3) <= 100 ? 100 : roundValue(square * plywood * 3)
            );
        } else if (plywood && square && difficulty === "medium") {
            setPlywoodTotal(
                roundValue(square * plywood * 5) <= 100 ? 100 : roundValue(square * plywood * 5)
            );
        } else if (plywood && square && difficulty === "hard") {
            setPlywoodTotal(
                roundValue(square * plywood * 7) <= 100 ? 100 : roundValue(square * plywood * 7)
            );
        } else {
            setPlywoodTotal(undefined);
        }
        if (acrylic && square && withEngraving && difficulty === "easy") {
            setAcrylicTotal(
                roundValue(square * acrylic * 3 + getLocalStorageValue("env")) <= 100
                    ? 100
                    : roundValue(square * acrylic * 3 + getLocalStorageValue("env"))
            );
        } else if (acrylic && square && withEngraving && difficulty === "medium") {
            setAcrylicTotal(
                roundValue(square * acrylic * 5 + getLocalStorageValue("env")) <= 100
                    ? 100
                    : roundValue(square * acrylic * 5 + getLocalStorageValue("env"))
            );
        } else if (acrylic && square && withEngraving && difficulty === "hard") {
            setAcrylicTotal(
                roundValue(square * acrylic * 7 + getLocalStorageValue("env")) <= 100
                    ? 100
                    : roundValue(square * acrylic * 7 + getLocalStorageValue("env"))
            );
        } else if (acrylic && square && difficulty === "easy") {
            setAcrylicTotal(
                roundValue(square * acrylic * 3) <= 100 ? 100 : roundValue(square * acrylic * 3)
            );
        } else if (acrylic && square && difficulty === "medium") {
            setAcrylicTotal(
                roundValue(square * acrylic * 5) <= 100 ? 100 : roundValue(square * acrylic * 5)
            );
        } else if (acrylic && square && difficulty === "hard") {
            setAcrylicTotal(
                roundValue(square * acrylic * 7) <= 100 ? 100 : roundValue(square * acrylic * 7)
            );
        } else {
            setAcrylicTotal(undefined);
        }
    }, [plywood, square, difficulty, acrylic, withEngraving]);

    const getValue = () => {
        return difficulty ? options.find((c) => c.value === difficulty) : "";
    };

    const onChange = (newValue: SingleValue<IOption | string>) => {
        setDifficulty((newValue as IOption).value);
    };

    return (
        <>
            <Title appearance="title">ЛАЗЕРНАЯ РЕЗКА</Title>
            <div className={styles.price}>
                <div className={styles["price__wrapper"]}>
                    <Input
                        id="plywood"
                        type="number"
                        label="Фанера за 1 м2(Рублей)"
                        appearance="big"
                        onChange={(e) => {
                            setPlywood(Number(e.target.value));
                        }}
                        value={plywood ? plywood : ""}
                    />
                </div>
                <div className={styles["price__wrapper"]}>
                    <Input
                        id="acrylic"
                        type="number"
                        label="Акрил за 1 м2(Рублей)"
                        appearance="big"
                        onChange={(e) => setAcrylic(Number(e.target.value))}
                        value={acrylic ? acrylic : ""}
                    />
                    <Checkbox
                        id="withPlastic"
                        label="С гравировкой"
                        onChange={(e) => {
                            if (e.target.checked) {
                                setWithEngraving(true);
                            } else {
                                setWithEngraving(false);
                            }
                        }}
                        checked={withEngraving}
                    />
                </div>
            </div>
            <div className={styles.center}>
                <SelectInput
                    id="difficulty"
                    label="Уровень сложности"
                    appearance="big"
                    options={options}
                    value={getValue()}
                    onChange={onChange}
                />
            </div>

            <Title appearance="subtitle">Цены</Title>
            <div className={styles.price}>
                <Input
                    id="lfp-price"
                    type="number"
                    label="Фанера (Рублей)"
                    appearance="big"
                    value={plywoodTotal}
                />
                <Input
                    id="pc-price"
                    type="number"
                    label="Акрил (Рублей)"
                    appearance="big"
                    value={acrylicTotal}
                />
            </div>
        </>
    );
};

export default CutPage;
