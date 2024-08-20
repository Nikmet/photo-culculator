import { FunctionComponent, useEffect, useState } from "react";
import SelectInput, { IOption } from "../../components/Select/Select";
import { SingleValue } from "react-select";
import {
    getLocalStorageValue,
    ILocalStorageValue,
    INITIAL_ARRAY,
    resetLocalStorage,
    setLocalStorageValue
} from "../../helpers/localstorage";
import Input from "../../components/Input/Input";
import styles from "./AdminPage.module.scss";

interface AdminPageProps {}

const options: IOption[] = [];

const AdminPage: FunctionComponent<AdminPageProps> = () => {
    const [input, setInput] = useState<string | undefined>();
    const [value, setValue] = useState<number | undefined>();
    const [, setForceRender] = useState<boolean>(false);

    const data: ILocalStorageValue[] = JSON.parse(localStorage.getItem("data") ?? "");

    useEffect(() => {
        if (options.length === 0) {
            data.forEach((v) => options.push({ value: v.name, label: v.label }));
        }
    }, [data]);

    const getValue = () => {
        return input ? options.find((c) => c.value === input) : "";
    };

    const onChange = (newValue: SingleValue<IOption | string>) => {
        setInput((newValue as IOption).value);
        // setValue(getLocalStorageValue((newValue as IOption).value));
    };

    const onClick = () => {
        const valueName = INITIAL_ARRAY.find((o) => o.name === input)?.label;
        if (input && value) {
            if (
                confirm(
                    `Вы уверен что хотите поменять цену ${valueName} c ${getLocalStorageValue(
                        input
                    )} на ${value}?`
                )
            ) {
                setLocalStorageValue(input, value);
                alert("Данные изменены");
                const clearingInput: HTMLInputElement | null = document.querySelector("#input");
                if (clearingInput) {
                    clearingInput.value = "";
                }
                setForceRender((r) => !r);
            }
        } else {
            const clearingInput: HTMLInputElement | null = document.querySelector("#input");
            if (clearingInput) {
                clearingInput.value = "";
            }
        }
    };

    const reset = () => {
        if (confirm("Вы уверены что хотите сбросить все данные по ценам?")) {
            const captcha = "reset data";
            const inputCaptcha = prompt(`Введите "${captcha}" для подтверждения удаления:`);
            if (inputCaptcha === captcha) {
                resetLocalStorage();
                alert("Данные удалены!");
                setForceRender((r) => !r);
            } else {
                alert("Неверный ввод. Попробуйте еще раз.");
            }
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <SelectInput
                    options={options}
                    id="cdf"
                    label="Выберете поле для изменения"
                    titlePosition="center"
                    appearance="big"
                    onChange={onChange}
                    value={getValue()}
                />
                <Input
                    id="input"
                    type="number"
                    label="Начальное значение"
                    appearance="big"
                    titlePosition="center"
                    onChange={(e) => setValue(Number(e.target.value))}
                    value={value ? value : undefined}
                />
                <button className={styles.button} onClick={onClick}>
                    Записать
                </button>
                <button onClick={reset} className={styles.reset}>
                    Сбросить все значения
                </button>
            </div>
            <div className={styles["wrapper-prices"]}>
                {data.map((v, i) => (
                    <p key={i}>
                        {v.label}: {v.value}р
                    </p>
                ))}
            </div>
        </div>
    );
};

export default AdminPage;
