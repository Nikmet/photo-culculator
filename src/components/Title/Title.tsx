import { FunctionComponent, ReactNode } from "react";
import styles from "./Title.module.scss";

interface TitleProps {
    appearance: "title" | "subtitle";
    children: ReactNode;
}

const Title: FunctionComponent<TitleProps> = ({ children, appearance }) => {
    return (
        <>
            {appearance === "title" ? (
                <h1 className={styles["title"]}>{children}</h1>
            ) : (
                <h2 className={styles["title-sub"]}>{children}</h2>
            )}
        </>
    );
};

export default Title;
