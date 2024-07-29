import { FunctionComponent, ReactNode, useState } from "react";
import styles from "./Select.module.scss";
import classNames from "classnames";
import Select, { SingleValue } from "react-select";
import "./Select.scss";

interface SelectInputProps {
    label: string | ReactNode;
    appearance?: "small" | "big" | undefined;
    id: string;
}

interface IOption {
    value: string;
    label: string;
}

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

const SelectInput: FunctionComponent<SelectInputProps> = ({ ...props }) => {
    const [difficulty, setDifficulty] = useState<string | null>("easy");

    const getValue = () => {
        return difficulty ? options.find((c) => c.value === difficulty) : "";
    };

    const onChange = (newValue: SingleValue<IOption | string>) => {
        setDifficulty((newValue as IOption).value);
    };

    return (
        <div className={styles["input"]}>
            <label
                htmlFor={props.id}
                className={classNames(styles["input__label"], [
                    props.appearance === "big" ? styles["input__label-big"] : ""
                ])}
            >
                {props.label}
            </label>
            <Select
                id={props.id}
                options={options}
                value={getValue()}
                onChange={onChange}
                classNamePrefix="custom-select"
                isSearchable={false}
            />
        </div>
    );
};

export default SelectInput;
