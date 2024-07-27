import { FunctionComponent } from "react";
import styles from "./Checkbox.module.scss";

interface CheckboxProps {
    label: string;
    id: string;
}

const Checkbox: FunctionComponent<CheckboxProps> = ({ ...props }) => {
    return (
        <div className={styles["checkbox__wrapper"]}>
            <input type="checkbox" id={props.id} />
            <label htmlFor={props.id}>{props.label}</label>
        </div>
    );
};

export default Checkbox;
