import { FunctionComponent, ReactNode } from "react";
import styles from "./Select.module.scss";
import classNames from "classnames";
import Select, { SingleValue } from "react-select";
import "./Select.scss";

interface SelectInputProps {
    label: string | ReactNode;
    appearance?: "small" | "big" | undefined;
    id: string;
    onChange: (newValue: SingleValue<IOption | string>) => void;
    value: IOption | "" | undefined;
    options: IOption[];
}

export interface IOption {
    value: string;
    label: string;
}

const SelectInput: FunctionComponent<SelectInputProps> = ({ ...props }) => {
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
                options={props.options}
                value={props.value}
                onChange={props.onChange}
                classNamePrefix="custom-select"
                isSearchable={false}
            />
        </div>
    );
};

export default SelectInput;
