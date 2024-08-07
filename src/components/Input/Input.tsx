import { FunctionComponent, InputHTMLAttributes, ReactNode } from "react";
import styles from "./Input.module.scss";
import classNames from "classnames";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string | ReactNode;
    id: string;
    type: string;
    titlePosition?: "center" | "left" | undefined;
    appearance?: "small" | "big" | undefined;
}

const Input: FunctionComponent<InputProps> = ({ ...props }) => {
    return (
        <div className={styles["input"]}>
            <label
                htmlFor={props.id}
                className={classNames(styles["input__label"], [
                    props.titlePosition === "center" ? styles["input__label-center"] : "",
                    props.appearance === "big" ? styles["input__label-big"] : ""
                ])}
            >
                {props.label}
            </label>
            <input
                onChange={props.onChange}
                type={props.type}
                id={props.id}
                value={props.value}
                className={classNames(styles["input__input"], [
                    props.appearance === "small"
                        ? styles["input__input-small"]
                        : styles["input__input-big"]
                ])}
            />
        </div>
    );
};

export default Input;
