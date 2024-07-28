import { FunctionComponent, InputHTMLAttributes } from "react";
import styles from "./Checkbox.module.scss";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id: string;
}

const Checkbox: FunctionComponent<CheckboxProps> = ({ ...props }) => {
    return (
        <label htmlFor={props.id} className={styles["checkbox__wrapper"]}>
            <input
                type="checkbox"
                id={props.id}
                className={styles["checkbox"]}
                onChange={props.onChange}
            />
            <span className={styles["checkbox-new"]}></span>
            {props.label}
        </label>
    );
};

export default Checkbox;
